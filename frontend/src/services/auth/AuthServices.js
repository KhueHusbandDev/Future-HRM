import { toast } from "sonner";
import { configApi } from "../../api/config";

export class AuthService {
  static login = async (userData) => {
    try {
      const { data } = await fetch(`http://localhost:8080/staff/login/${userData.email}/${userData.password}`, {
        mode: "no-cors",
        method: "GET"
      });
      return data;
    } catch (error) {
      if (error) {
        console.log(error.response?.data);
        throw new Error(error.response?.data)
      }
      throw new Error('Login Failed')
    }
  }

  static registerUser = async (dataUser) => {
    try {
      const { data } = await configApi.post('/auth/register', dataUser);
      return data;
    } catch (error) {
      if (error) {
        console.log(error.response?.data);
        throw new Error(error.response?.data)
      }
      console.log(error);
      throw new Error('Register Error')
    }
  }
}

// import { configApi } from "../../api/config";

// export class AuthService {
//   static login = async (userData) => {
//     try {
//       const response = await fetch(`http://localhost:8080/staff/login/${userData.email}/${userData.password}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         // Removed 'mode: "no-cors"'
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();

//       return data;
//     } catch (error) {
//       console.error("Login error:", error);
//       throw new Error('Login Failed');
//     }
//   }

//   static registerUser = async (dataUser) => {
//     try {
//       const { data } = await configApi.post('/auth/register', dataUser);

//       return data;
//     } catch (error) {
//       console.error("Register error:", error);
//       throw new Error('Register Error');
//     }
//   }
// }