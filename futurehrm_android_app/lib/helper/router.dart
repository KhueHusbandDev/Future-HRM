import 'package:flutter/material.dart';
import 'package:futurehrm_android_app/models/route_paths.dart';
import 'package:futurehrm_android_app/page/check_in/check_in_page.dart';
import 'package:futurehrm_android_app/page/login/login_page.dart';
import 'package:futurehrm_android_app/page/menu_page.dart';

class RouterHelper {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      case RoutePaths.start:
        return MaterialPageRoute(
          builder: (_) => MenuPage(),
        );
      case RoutePaths.loginPage:
        // you can do things like pass arguments to screens
        return MaterialPageRoute(
          builder: (_) => LoginPage(),
        );

      case RoutePaths.menuPage:
        // you can do things like pass arguments to screens
        return MaterialPageRoute(
          builder: (_) => MenuPage(),
        );

      case RoutePaths.checkInPage:
        // you can do things like pass arguments to screens
        return MaterialPageRoute(
          builder: (_) => const CheckInPage(),
        );

      default:
        return MaterialPageRoute(
          builder: (_) => Scaffold(
            body: Center(
              child: Text('No route defined for ${settings.name}'),
            ),
          ),
        );
    }
  }
}
