import 'package:flutter/material.dart';

class MenuPage extends StatefulWidget {
  int authId;

  MenuPage({super.key, required this.authId});

  @override
  State<MenuPage> createState() => _MenuPageState(authId);
}

class _MenuPageState extends State<MenuPage> {
  late int authId;

  _MenuPageState(int authId);

  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
