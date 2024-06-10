import axios from "axios";
import { useAuthStore } from "../store/AuthStore";

export const configApi = axios.create({
  baseURL: "https://localhost:8080"
});