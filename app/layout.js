import { Lexend } from "next/font/google";
import "./style/global.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "West-MEC Vet",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        {children}</body>
    </html>
  );
}
