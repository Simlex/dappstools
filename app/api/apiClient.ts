import axios from "axios";
import { EmailContent } from "../models/IEmailContent";

export const API = axios.create({
  baseURL: "http://localhost:4050/",
});

export function useSendEmailToClient() {
  async function sendEmailToClient(formValues: EmailContent) {
    return API.post("/api/services", formValues);
  }

  return sendEmailToClient;
}
