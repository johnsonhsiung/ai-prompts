import { Inter } from "next/font/google";

export const metadata = {
  title: "AI-Prompts",
  description: "Prompt-engineered AI use-cases",
};
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
            {children}
      </body>
    </html>
  );
}
