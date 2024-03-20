import axios from "axios";
import { EmailContent } from "@/app/models/IEmailContent";

export const API = axios.create({
//   baseURL: "http://localhost:4050/", 
  baseURL: "https://dappstoolstest.netlify.app/",
});

export function useSendEmailToClient() {
  async function sendEmailToClient(formValues: EmailContent) {
    return API.post("/api/services", formValues);
  }

  return sendEmailToClient;
}
