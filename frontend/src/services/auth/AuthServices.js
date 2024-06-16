import { toast } from "sonner";
import { configApi } from "../../api/config";

export class AuthService {
  static login = async (userData) => {
    try {
      const { data } = await configApi.get(`http://localhost:8080/staff/login/${userData.email}/${userData.password}`);
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