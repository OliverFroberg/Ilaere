"use client"

import Card from "@/component/card"
import React, {useState} from "react"
import {useMediaQuery} from "@/component/utils"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faClose} from "@fortawesome/free-solid-svg-icons"
import {AnimatePresence, motion} from "motion/react"
import Link from "next/link"

export default function Navigation() {
	const isDesktop = useMediaQuery("(min-width: 1024px)")
	const [isMenuOpen, setMenuOpen] = useState(false)

	const NavButtons = ({href, text}: { href: string, text: string }) => (
		<li className={"w-full text-center"}>
			<Link href={href} className={
				"hover:bg-black/5 hover:shadow-lg px-4 py-2 rounded-2xl underline underline-offset-2 transition inline-block " +
				`${!isDesktop && "w-full"}`
			}>{text}</Link>
		</li>
	)

	const NavLinks = () => (
		<>
			<NavButtons href={"#"} text={"Mød virksomhederne"}/>
			<NavButtons href={"#"} text={"Erhvervsuddannelser"}/>
			<NavButtons href={"#"} text={"Info"}/>
			<NavButtons href={"#"} text={"Kontakt"}/>
			<NavButtons href={"#"} text={"Bliv en del af ilære.dk"}/>
		</>
	)

	return (
		<nav className={"z-10"}>
			<div className={"flex gap-10 tablet:gap-4 justify-between items-center py-4"}>
				<Link href="/" className={"w-full max-w-100 shadow-lg hover:shadow-xl hover:scale-105 transition"}><img src="/ilaere.dk-logo.png"
																													 alt="ilære.dk logo"/></Link>
				{isDesktop ? (
					<Card>
						<ul className={"flex justify-center items-center h-full px-4 py-2 whitespace-nowrap"}>
							<NavLinks/>
						</ul>
					</Card>
				) : (
					<>
						{/* Burger menu toggle button */}
						<button className={"aspect-square hover:bg-black/5 hover:shadow-lg p-2 rounded-full transition cursor-pointer z-20"}
								onClick={() => setMenuOpen(!isMenuOpen)}>
							{!isMenuOpen ?
								<FontAwesomeIcon icon={faBars} className={"text-3xl"}/> :
								<FontAwesomeIcon icon={faClose} className={"text-3xl"}/>
							}
						</button>
					</>
				)}
			</div>

			<AnimatePresence initial={false}>
				{/* Burger menu */}
				{isMenuOpen && (
					<>
						{/* Background overlay */}
						<motion.div className={"fixed top-0 left-0 w-full h-full backdrop-blur-lg -z-1"}
									initial={{opacity: 0}}
									animate={{opacity: 1}}
									exit={{opacity: 0}}
									key="overlay"/>

						{/* List of links */}
						<motion.ul
							className={"absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-fit flex flex-col gap-4 p-8 justify-center items-center"}
							initial={{opacity: 0, translateY: -50}}
							animate={{opacity: 1, translateY: 0}}
							exit={{opacity: 0, translateY: -50}}
							transition={{duration: 0.3, ease: "easeInOut"}}
							key="list">
							<NavLinks/>
						</motion.ul>
					</>
				)}
			</AnimatePresence>
		</nav>
	)
}