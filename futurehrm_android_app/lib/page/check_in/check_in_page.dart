import 'package:flutter/material.dart';

class CheckInPage extends StatefulWidget {
  static const String routeName = "/check-in";

  const CheckInPage({super.key});

  @override
  State<CheckInPage> createState() => _CheckInPageState();
}

class _CheckInPageState extends State<CheckInPage> {
  String _formatMDY(DateTime date) {
    return "${date.month}-${date.day}-${date.year}";
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Check In-Out"),
        // leading: IconButton(
        //   icon: Icon(Icons.home),
        //   onPressed: () {
        //     Navigator.of(context).popAndPushNamed(MenuPage.routeName);
        //   },
        // ),
      ),
      body: SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.all(5),
          child: Column(
            children: [
              Container(
                width: 500,
                child: Card(
                  color: Color.fromRGBO(247, 150, 30, 1),
                  child: Column(
                    children: [
                      Container(
                        width: 450,
                        height: 200,
                        child: Card(
                          child: Container(
                            alignment: Alignment.center,
                            child: Text(
                              "Today is ${_formatMDY(DateTime.now())}",
                              style: TextStyle(
                                fontSize: 32,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ),
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: [
                          TextButton(
                            onPressed: () {},
                            style: ButtonStyle(),
                            child: Text("Check In"),
                          ),
                          TextButton(
                            onPressed: () {},
                            style: ButtonStyle(),
                            child: Text("Check Out"),
                          ),
                        ],
                      )
                    ],
                  ),
                ),
              ),
              Text("Check In Out History"),
            ],
          ),
        ),
      ),
    );
  }
}
