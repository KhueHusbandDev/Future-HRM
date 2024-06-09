import axios from "axios";

export const configApi = axios.create({
    baseURL: process.env.BACKEND_URL
});

// interceptor
configApi.interceptors.request.use((config) => {
    const token = useAuthStore.getState().token;
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
});