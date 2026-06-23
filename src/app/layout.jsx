import { Inter } from "next/font/google";
import "../index.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ravija Hettiarachchi | Portfolio",
  description: "Secure journeys through curiosity and constant learning. Cybersecurity enthusiast and undergraduate ICT student.",
  icons: {
    icon: "/tablogo.png",
    apple: "/tablogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
