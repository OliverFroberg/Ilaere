import type {Metadata} from "next"
import "@/style/globals.css"
import React from "react"
import {Abril_Fatface, DM_Sans, Open_Sans} from "next/font/google"
import "@/style/gradient.css"
import Navigation from "@/component/navigation"

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
})

const fatFace = Abril_Fatface({
	variable: "--font-abril-fatface",
	subsets: ["latin"],
	weight: "400"
})

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "ilære.dk",
	description: "ilære.dk - stedet, hvor unge og virksomheder mødes",
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="da">
			<body className={`${openSans.variable} ${openSans.className} ${fatFace.variable} ${dmSans.variable} antialiased main_page__background`}>
				<header className={"sticky top-0 z-50 wrapper"}>
					<Navigation/>
				</header>
				{children}
				<footer>

				</footer>
			</body>
		</html>
	)
}