import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:futurehrm_android_app/models/response_data.dart';
import 'package:futurehrm_android_app/models/staff.dart';
import 'package:futurehrm_android_app/page/menu_page.dart';
import 'package:http/http.dart' as http;

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  bool _isLoading = false;

  void _login(String email, String password) async {
    if (_formKey.currentState!.validate()) {
      setState(() {
        _isLoading = true;
      });

      // try {
      String url = 'http://192.168.1.6:8080/staff/login/${email}/${password}';
      final response = await http.get(Uri.parse(url));
      if (response.statusCode == 200) {
        final parsed = ResponseData.fromMap(json.decode(response.body));
        if (parsed.data != null) {
          Staff stf = Staff.fromMap(parsed.data!);
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => MenuPage(authId: stf.id!)),
          );
        } else {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Invalid login data')),
          );
        }
      } else {
        throw Exception('Failed to authenticate');
      }
      // } catch (e) {
      //   ScaffoldMessenger.of(context).showSnackBar(
      //     SnackBar(content: Text('Error: $e')),
      //   );
      // } finally {
      //   setState(() {
      //     _isLoading = false;
      //   });
      // }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Center(
          child: Form(
            key: _formKey,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                SizedBox(
                  height: 50,
                ),
                Container(
                  decoration: BoxDecoration(
                    border: Border.all(
                      color: Colors.black, // Border color
                      width: 3.0, // Border width
                    ),
                    borderRadius:
                        BorderRadius.circular(40.0), // Same as ClipRRect
                  ),
                  child: ClipRRect(
                    borderRadius:
                        BorderRadius.circular(40.0), // ClipRRect radius
                    child: Image.asset(
                      "assets/images/Logo.jpg",
                      width: 300,
                    ),
                  ),
                ),
                SizedBox(
                  height: 30,
                ),
                const Text(
                  "Login Form",
                  style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
                ),
                Container(
                  alignment: Alignment.centerLeft,
                  width: 300,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        "Email",
                        style: TextStyle(fontSize: 24),
                      ),
                      TextFormField(
                        controller: _emailController,
                        decoration: const InputDecoration(
                          // label: Text('Enter username'),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.all(
                              Radius.circular(10),
                            ),
                          ),
                        ),
                        validator: (String? value) {
                          if (value == null || value.isEmpty) {
                            return 'Please enter username';
                          }
                          return null;
                        },
                      ),
                      SizedBox(
                        height: 10,
                      ),
                      Text(
                        "Password",
                        style: TextStyle(fontSize: 24),
                      ),
                      TextFormField(
                        controller: _passwordController,
                        obscureText: true,
                        decoration: const InputDecoration(
                          // label: Text('Enter password'),
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.all(
                              Radius.circular(10),
                            ),
                          ),
                        ),
                        validator: (String? value) {
                          if (value == null || value.isEmpty) {
                            return 'Please enter password';
                          }
                          return null;
                        },
                      ),
                      ElevatedButton(
                        child: const Text('Sign in'),
                        onPressed: () {
                          if (_formKey.currentState!.validate()) {
                            _login(_emailController.text,
                                _passwordController.text);
                          }
                        },
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
