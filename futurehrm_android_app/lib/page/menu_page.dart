import 'package:flutter/material.dart';
import 'package:futurehrm_android_app/models/staff.dart';
import 'package:hive/hive.dart';

class MenuPage extends StatefulWidget {
  static String routeName = "/menu";

  MenuPage({super.key});

  @override
  State<MenuPage> createState() => _MenuPageState();
}

class _MenuPageState extends State<MenuPage> {
  late Staff currentAuth;
  var actions = [
    {"name": "Check In", "image": "none"},
    {"name": "Attendance", "image": "none"},
    {"name": "Payroll", "image": "none"},
    {"name": "Request Leave", "image": "none"},
  ];

  void getCurrentAuth() async {
    var box = await Hive.openBox("Auth");
    currentAuth = box.get("CurrentAuth");
    print(currentAuth);
  }

  @override
  Widget build(BuildContext context) {
    getCurrentAuth();

    return Scaffold(
      appBar: AppBar(
        title: Text("Menu"),
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
          child: Column(
            children: [
              GridView.builder(
                shrinkWrap: true,
                padding: EdgeInsets.all(5),
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 3,
                  mainAxisSpacing: 40,
                  crossAxisSpacing: 24,
                  // width / height: fixed for *all* items
                  childAspectRatio: 4 / 3,
                ),
                // return a custom ItemCard
                itemBuilder: (context, i) {
                  var item = actions[i];
                  return Card(
                    color: Colors.white,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10.0),
                    ),
                    elevation: 5,
                    child: Center(
                      child: Text(item["name"]!),
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
  }
}
