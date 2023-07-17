import axois from "axios";

const http = axois.create({
  baseURL: "/api/",
  timeout: 6000,
});
