import {configApi} from "../../api/config";

export class AuthService {
    static login = async (email, password) => {
        try {
            const { data } = await configApi.post('/auth/login', { email, password });
            return data;
        } catch (error) {
            if (error) {
                console.log(error.response?.data);
                throw new Error(error.response?.data)
            }
            console.log(error);
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