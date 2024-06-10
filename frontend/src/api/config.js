import axios from "axios";
import { useAuthStore } from "../store/AuthStore";

export const configApi = axios.create({
    baseURL: "https://localhost:8080"
});

    // interceptor
    configApi.interceptors.request.use((config) => {
        const token = useAuthStore.getState().token;
        if (token) config.headers["Authorization"] = `Bearer ${token}`;
        return config;
    });