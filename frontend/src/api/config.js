import axios from "axios";
import { useAuthStore } from "../store/AuthStore";

export const configApi = axios.create({
  baseURL: "http://localhost:8080"
});