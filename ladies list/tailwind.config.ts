
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#FF5CA9",
          dark: "#C93E7C"
        }
      }
    }
  },
  plugins: []
};
export default config;
