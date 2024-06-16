import 'package:flutter/material.dart';
import 'package:futurehrm_android_app/models/route_paths.dart';
import 'package:futurehrm_android_app/models/staff.dart';
import 'package:hive/hive.dart';

class MenuPage extends StatefulWidget {
  static String routeName = "/";

  MenuPage({super.key});

  @override
  State<MenuPage> createState() => _MenuPageState();
}

class _MenuPageState extends State<MenuPage> {
  late Future<Staff?> authFuture;
  var actions = [
    {"name": "Check In", "image": "none", "path": RoutePaths.checkInPage},
    {"name": "Attendance", "image": "none", "path": "/attendance"},
    {"name": "Payroll", "image": "none", "path": "/payroll"},
    {"name": "Request Leave", "image": "none", "path": "/request-leave"},
  ];

  @override
  void initState() {
    super.initState();
    authFuture = checkAuth();
  }

  Future<Staff?> checkAuth() async {
    var box = await Hive.openBox('Auth');
    return box.get('CurrentAuth') as Staff?;
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<Staff?>(
      future: authFuture,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return Scaffold(
            body: Center(
              child: CircularProgressIndicator(),
            ),
          );
        }

        if (!snapshot.hasData || snapshot.data?.id == null) {
          Future.microtask(
              () => Navigator.pushNamed(context, RoutePaths.loginPage));
          return Scaffold(
            body: Center(
              child: CircularProgressIndicator(),
            ),
          );
        }

        Staff currentAuth = snapshot.data!;

        return Scaffold(
          appBar: AppBar(
            title: const Text("Menu"),
            leading: Container(),
            leadingWidth: 20,
          ),
          body: SingleChildScrollView(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(0, 40, 0, 20),
                    child: Stack(
                      clipBehavior: Clip.none,
                      children: [
                        Card(
                          color: Colors.white,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10.0),
                          ),
                          elevation: 5,
                          child: Center(
                            heightFactor: 1.5,
                            child: ListTile(
                              title: Text(
                                "Hello ${currentAuth.lastname!}",
                                style: const TextStyle(
                                  fontSize: 24,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                              subtitle: Text("How are you today ?"),
                            ),
                          ),
                        ),
                        Positioned(
                          right: 0,
                          bottom: 0,
                          child: Image.asset(
                            "assets/images/MenuPage/MotivatePpl.png",
                            width: 150,
                            fit: BoxFit.fitWidth,
                          ),
                        ),
                      ],
                    ),
                  ),
                  GridView.builder(
                    shrinkWrap: true,
                    padding: const EdgeInsets.all(5),
                    gridDelegate:
                        const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 3,
                      mainAxisSpacing: 40,
                      crossAxisSpacing: 24,
                      childAspectRatio: 4 / 3,
                    ),
                    itemBuilder: (context, i) {
                      var item = actions[i];
                      return Card(
                        color: Colors.white,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10.0),
                        ),
                        elevation: 1,
                        child: InkWell(
                          child: Center(
                            child: Text(item["name"]!),
                          ),
                          onTap: () {
                            Navigator.pushNamed(
                              context,
                              item['path']!,
                            );
                          },
                        ),
                      );
                    },
                    itemCount: actions.length,
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
