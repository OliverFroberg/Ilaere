"use client"
import Card from "@/component/card"
import {AnimatePresence, motion} from "motion/react"
import {useState} from "react"

export default function Page() {
	const [isReadMoreOpen, setReadMoreOpen] = useState(false)

	return (
		<main className="wrapper flex flex-col gap-10">
			<Card>
				<video controls className="w-full h-auto">
					<source src="/campus.mp4" type="video/mp4"/>
				</video>
			</Card>
			<Card>
				<div className="bg-orange w-full flex flex-col gap-6 p-8 text-white">
					<div className="grid desktop:grid-cols-2 gap-4">
						<img src="/campus-simon.webp" className="w-full rounded-base max-w-100 mx-auto" alt="Simon fra køkknet"/>
						<div className="flex flex-col p-5 gap-2 text-center justify-evenly">
							<h1 className="text-4xl desktop:text-8xl [line-height:1.2em]">Campus Djursland</h1>
							<h2 className="text-2xl desktop:text-4xl">Hvor trivsel og faglig udvikling går hånd i hånd</h2>
						</div>
					</div>

					<hr/>

					<motion.article className={"flex flex-col gap-5"}>
						<p>Campus Djursland tilbyder læreplads til cater-elev i et levende og socialt fællesskab, hvor trivsel og faglig udvikling går hånd i
							hånd.</p>
						<AnimatePresence initial={false}>
							{
								isReadMoreOpen && (
									<>
										<motion.p transition={{ease: "easeInOut"}}
												  initial={{translateY: -100, opacity: 0}}
												  animate={{translateY: 0, opacity: 1}}
												  exit={{translateY: -100, opacity: 0}}
												  key={"p1"}>
											Campuskøkkenet fungerer dagligt, som madstation for elever
											og beboere på Campus og skolehjem. Her tilbereder de sund, velsmagende mad
											fra bunden og arbejder dagligt med sæsonens råvarer, kosthensyn og effektiv produktion i et professionelt køkkenmiljø.
										</motion.p>
										<motion.p transition={{ease: "easeInOut"}}
												  initial={{translateY: -100, opacity: 0}}
												  animate={{translateY: 0, opacity: 1}}
												  exit={{translateY: -100, opacity: 0}}
												  key={"p2"}>
											Caterelev hos Campus Djursland bliver en del af et team,
											der brænder for både god mad og et godt arbejdsmiljø. De får praktisk erfaring
											med planlægning, tilberedning og servering – og mulighed for at arbejde selvstændigt og tage ansvar i trygge rammer.
										</motion.p>
										<motion.p transition={{ease: "easeInOut"}}
												  initial={{translateY: -100, opacity: 0}}
												  animate={{translateY: 0, opacity: 1}}
												  exit={{translateY: -100, opacity: 0}}
												  key={"p3"}>
											Samtidig er Campus Djursland et unikt sted at være elev.
											Her bor og lever unge sammen under uddannelse i et socialt,
											efterskolelignende miljø. Medarbejderne skaber en hverdag med god stemning, sunde rutiner og plads til fællesskab.
										</motion.p>
									</>
								)
							}
						</AnimatePresence>

						<button
							className={"rounded-full bg-white text-black w-fit px-3 py-1 mx-auto block tablet:hidden cursor-pointer hover:shadow-lg transition"}
							onClick={() => setReadMoreOpen(!isReadMoreOpen)}>
							{
								!isReadMoreOpen ? "Læs mere" : "Læs mindre"
							}
						</button>
					</motion.article>
				</div>
			</Card>

			<div className="grid grid-cols-1 desktop:grid-cols-2 w-full gap-12 border-black bg-white">
				{/* LEFT SIDE */}
				<div className="w-full rounded-base overflow-hidden border border-black bg-white">
					<div className="p-4 sm:p-6">
						<h2 className="text-xl sm:text-2xl font-semibold text-orange-300 mb-4 text-center">
							Kontakt os gerne, vi tager imod:
						</h2>

						<hr className={"my-6"}/>

						{/* List */}
						<ul className="space-y-3 mb-6  text-black">
							<li className="text-base sm:text-lg">✅ Elever</li>
							<li className="text-base sm:text-lg">✅ Praktikanter</li>
							<li className="text-base sm:text-lg">❌ Sæsonmedarbejder/Fritidsjob</li>
							<li className="text-base sm:text-lg">❌ Juniormesterlære</li>
							<li className="text-base sm:text-lg">❌ Erhvervsgrunduddannelse (EGU)</li>
						</ul>


						<div className="space-y-2">
							<button
								type="button"
								className="w-full text-orange-300 py-2 px-4 rounded-2xl border-2 border-orange-300 hover:underline">
								Se nuværende lærling
							</button>
							<button
								type="button"
								className="w-full text-green-400 py-2 px-4 rounded-2xl border-2 border-green-400 hover:underline">
								Læs om uddannelsen på ug.dk
							</button>

							<button
								type="button"
								className="w-full text-orange-300 py-2 px-4 rounded-2xl border-2 border-orange-30 hover:underline">
								Se nuværende lærling
							</button>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE */}
				<div className="w-full rounded-base overflow-hidden border border-black bg-white text-center">
					<div className="p-4 sm:p-6 text-black">
						{/* Logo image */}
						<div className="mb-4">
							<img src="/image/campus Djursland 09.23.11.jpeg" alt="Campus Djursland Logo" className="mx-auto h-16 sm:h-20 object-contain"/>
						</div>

						{/* Contact Info */}
						<h3 className="text-2xl font-bold">Visitkort for:</h3>
						<p className="text-lg font-bold">Campus Djursland</p>
						<p>Ydesvej 4</p>
						<p>8500 Grenå</p>
						<p><span className="font-bold">Tlf:</span> +45 30 22 10 08</p>
						<p>
							<span className="font-bold">Email:</span>
							<a
								href="mailto:vibeke@campusdjursland.dk"
								className="text-orange-400"
							>
								vibeke@campusdjursland.dk
							</a>
						</p>
						<p>
							<span className="font-bold">Facebook:</span>
							<a href="#" className="text-orange-400">Find os her</a>
						</p>
					</div>
				</div>
			</div>


			<h2 className="text-2xl text-black sm:text-3xl text-center w-full mx-auto rounded-3xl border border-black p-2 sm:p-4 block m-2 font-semibold">
				Flere attraktive virksomheder
			</h2>

			<div className="flex flex-col desktop:flex-row justify-between gap-4 p-3 text-center">

				<div className="rounded-2xl border border-black overflow-hidden w-full desktop:w-64">
					<img
						src="/image/cafe_kraemmerhuset-400x250.webp"
						alt="Campus Djursland Logo"
						className="w-full object-cover aspect-video"
					/>
					<div className="p-4 bg-white">
						<p className="font-semibold text-black mb-2">Café Kræmmerhuset</p>
						<a href="#" className="text-blue-600 hover:underline no-underline">Læs mere</a>
					</div>
				</div>


				<div className="rounded-2xl border border-black overflow-hidden w-full desktop:w-64">
					<img
						src="/image/Moellefisk-Havnens-Roegeri-laerling-praktik-ilaere-400x250.webp"
						alt="Campus Djursland Logo"
						className="w-full object-cover aspect-video"
					/>
					<div className="p-4 bg-white">
						<p className="font-semibold text-black mb-2">Møllefisk & Havnens Røgeri</p>
						<a href="#" className="text-blue-600 hover:underline no-underline">Læs mere</a>
					</div>
				</div>


				<div className="rounded-2xl border border-black overflow-hidden w-full desktop:w-64">
					<img
						src="/image/Skaermbillede.png"
						alt="Skaermbillede"
						className="w-full object-cover aspect-video"
					/>
					<div className="p-4 bg-white">
						<p className="font-semibold text-black mb-2">Sølbakkegård A/S</p>
						<a href="#" className="text-blue-600 no-underline hover:underline">Læs mere</a>
					</div>
				</div>


			</div>

		</main>
	)
}

