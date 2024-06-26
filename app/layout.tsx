import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Rutvij's Portfolio",
	description: "A space themed portfolio built by rutvij sathe",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
				<Analytics />
				<StarsCanvas />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
