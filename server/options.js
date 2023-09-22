import cors from "cors";
import { allowedOrigins } from "./server.js";

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
