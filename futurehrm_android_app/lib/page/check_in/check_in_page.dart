import 'package:flutter/material.dart';

class CheckInPage extends StatefulWidget {
  static const String routeName = "/check-in";

  const CheckInPage({super.key});

  @override
  State<CheckInPage> createState() => _CheckInPageState();
}

class _CheckInPageState extends State<CheckInPage> {
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
      body: Text("This Is Check In/Out Page"),
    );
  }
}
