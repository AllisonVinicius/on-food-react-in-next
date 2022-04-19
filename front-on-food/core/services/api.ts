import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.imersaofx.danieldcs.com/",
  headers: {
    Autorization: "Bearer [YWxsaXNvbnZpbmljaXVzNjNAZ21haWwuY29t]",
  },
});
