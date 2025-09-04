import type {Metadata} from "next"
import "@/style/globals.css"
import React from "react"
import {Abril_Fatface, DM_Sans, Open_Sans} from "next/font/google"
import "@/style/gradient.css"
import Navigation from "@/component/navigation"
import Link from "next/link"

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

				<footer className={"bg-stone-900 text-white"}>
					<div className={"wrapper grid grid-cols-4 justify-between gap-10"}>
						<ul className={"list-disc flex flex-col gap-2"}>
							<li className={"list-none"}><h4 className={"text-2xl text-orange"}>Tag på opdagelse:</h4></li>
							<li><Link className={"hover:underline cursor-pointer"} href={"#"}>Jobkompasset</Link></li>
							<li><Link className={"hover:underline cursor-pointer"} href={"#"}>Lærepladsen.dk</Link></li>
							<li><Link className={"hover:underline cursor-pointer"} href={"#"}>UddannelsesGuiden</Link></li>
						</ul>

						<ul className={"list-disc flex flex-col gap-2"}>
							<li className={"list-none"}><h4 className={"text-2xl text-orange"}>Links:</h4></li>
							<li><Link className={"hover:underline cursor-pointer"} href={"#"}>LinkedIn</Link></li>
							<li><Link className={"hover:underline cursor-pointer"} href={"#"}>Cookiepolitik</Link></li>
						</ul>

						<ul className={"flex flex-col gap-2"}>
							<li><h4 className={"text-orange"}>
								Erhvervsskolernes
								Elevorganisation har
								lavet et projekt om vejen
								til Erhvervsuddannelse:
							</h4></li>
							<li><Link className={"hover:underline cursor-pointer"} href={"#"}>Klik her for at besøge &quot;Vejen til EUD&quot;</Link></li>
						</ul>

						<ul className={"flex flex-col gap-2"}>
							<li><p>En del af:</p></li>
							<li><img src={"/business-djursland-logo-hvid.png"} alt={"Business Djursland"}/></li>
						</ul>
					</div>
				</footer>
			</body>
		</html>
	)
}