import { Montserrat, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
  fallback: ["sans-serif"],
});

export const monteserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  variable: "--monteserrat-font",
});
