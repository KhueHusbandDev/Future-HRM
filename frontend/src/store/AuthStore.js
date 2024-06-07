import { toast } from "sonner";
import { AuthService } from "../services/auth/AuthServices"
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const storeAPI = (set) => ({
    status: "unauthorized",
    token: undefined,
    user: undefined,
    loginUser: async (email, password) => {
        try {
            // const { token, ...user } = await AuthService.login(email, password);
            // setStatus({ status: "authorized", token, user });
            set({ status: "authorize", user: { email, password }, token: "tokenTest" })
            toast.success("Login Success");
        } catch (error) {
            set({ status: "unauthorized", token: undefined, user: undefined })
            toast.error("Login Failed");
        }
    },
    logout: () => {
        set({ status: "unauthorize", token: undefined, user: undefined });
    },
    registerUser: async (userData) => {
        try {
            await AuthService.registerUser(userData);
        } catch (error) {
            throw new Error(`${error}`)

        }
    }
})

export const useAuthStore = create()(
    devtools(
        persist(storeAPI, { name: "auth-store" })
    )
)