import Card from "@/component/card"
import "@/style/mainpage.css"

export default function Home() {
	const StudentBubble = ({src}: { src: string }) => (
		<figure className={"max-h-60 desktop:max-w-60 aspect-square"}>
			<img src={src} alt={""}
				 className={"rounded-full h-full w-full object-cover object-bottom"}/>
		</figure>
	)

	return (
		<main className={"wrapper flex flex-col gap-20"}>
			{/* hero section med Vi er i lære */}
			<section className="grid grid-rows-3 desktop:grid-cols-3 desktop:grid-rows-1 desktop:h-120 gap-10 px-10">
				<div className={"mx-auto tablet:mr-0 desktop:mx-auto desktop:mt-auto"}>
					<StudentBubble src={"/Artboard-1.png"}/>
				</div>
				<div className={"w-fit h-fit text-center justify-self-center self-center"}>
					<Card>
						<div className="p-4 gradient-one flex flex-col gap-2">
							<h2 className={"text-white"}>Hvad vil du være?</h2>
							<h3 className={"text-3xl font-bold text-hero-title text-shadow-lg"}>Vi er i Lære</h3>
							<p className={"text-white"}>ilære.dk - stedet, hvor unge og virksomheder mødes</p>
							<img src="/understreg-ilaere.webp" alt=""/>
						</div>
					</Card>
				</div>
				<div className={"mx-auto tablet:ml-0 desktop:mx-auto"}>
					<StudentBubble src={"/Artboard-2.png"}/>
				</div>
			</section>

			{/* kort */}
			<section className="m-auto flex flex-col-reverse tablet:grid grid-cols-3 gap-10 w-full">
				<div className={"col-span-2"}>
					<Card>
						<div className={"w-full h-100"}/>
					</Card>
				</div>

				<div className={"w-fit h-fit text-center justify-self-center self-center"}>
					<Card>
						<div className="px-4 py-2 bg-orange text-white font-bold">Find virksomhederne på kortet</div>
					</Card>
				</div>
			</section>

			{/* TODO: Slider */}

			{/* video */}
			<section className="m-auto flex flex-col-reverse tablet:grid grid-cols-2 gap-10 w-full">
				<div>
					<Card>
						<iframe className="w-full aspect-video"
								src="https://player.vimeo.com/video/1086696953?h=08d3c4e9cf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
								allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
								referrerPolicy="strict-origin-when-cross-origin" title="Det er fedt at tag en erhvervsuddannelse"></iframe>
					</Card>
				</div>

				<div className={"w-full h-fit text-center justify-self-center self-center flex flex-col gap-4"}>
					<div className={"w-fit mx-auto"}>
						<Card>
							<h2 className="px-6 py-4 gradient-one text-black font-bold text-2xl font-abril-fatface">Praktik- og lærepladser på Djursland</h2>
						</Card>
					</div>

					<Card>
						<p className="p-4 bg-orange text-white">ilære.dk er skabt i samarbejde mellem folkeskoler, erhvervsskoler og virksomheder for at fremme
							interessen for erhvervsrettede uddannelser for folkeskoleelever i 7., 8. og 9.klasse.
							Hvis du har svært ved at finde ud af, hvilket arbejde eller fag der kunne være spændende for dig, så prøv at kigge her på
							hjemmesiden.</p>
					</Card>
				</div>
			</section>

			<section className={"relative w-full max-w-180 aspect-square mx-auto p-10 my-20 mobile:p-20 mobile:my-0 z-10"}>
				<div className={"absolute top-0 left-0 w-full h-full rounded-full gradient-three -z-1 scale-150 mobile:scale-100"}/>
				<div className={"flex flex-col gap-4 justify-center items-center text-center mx-auto max-w-100 w-full h-full"}>
					<h1 className="font-bold text-[1.5em]">Brancheområderne</h1>
					<a className="text-white rounded-base bg-orange w-full p-2 cursor-pointer hover:shadow-lg transition">fødevarer, jordbrug og oplevelser</a>
					<a className="text-white rounded-base bg-orange w-full p-2 cursor-pointer hover:shadow-lg transition">kontor,handel og
						forretningsservice</a>
					<a className="text-white rounded-base bg-orange w-full p-2 cursor-pointer hover:shadow-lg transition">Teknologi, byggeri og transport </a>
					<a className="text-white rounded-base bg-orange w-full p-2 cursor-pointer hover:shadow-lg transition">Omsorg, sunhed og pædagogik</a>
				</div>
			</section>


			<section className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-rows-4 justify-center gap-16 [direction:rtl]">
				<h2 className="text-center self-center text-2xl font-bold font-abril-fatface tablet:col-span-2 desktop:col-span-1">Fødevarer, jordbrug og oplevelser</h2>

				<div className={"desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="Campus Djursland" description="Castronom, fødevarer, jordbrug og oplevelser" link="#"
								   image="/image/mediegrafikerelev_viden_djurs_ilaere_elevplads_erhvervsuddannelser_djursland_billede3.webp"
					/>
				</div>
				<div className={"hidden tablet:block desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="Café kræmmerhuset" description="Fødevarer, jordbrug og oplevelser" link="#"
								   image="/image/cafe_kraemmerhuset-400x250.webp"
					/>
				</div>
				<div className={"hidden desktop:block desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="Møllefisk & Havnens Røgeri" description="Fødevarer, jordbrug og oplevelser" link="#"
								   image="/image/Moellefisk-Havnens-Roegeri-laerling-praktik-ilaere-400x250.webp"
					/>
				</div>

				<a href="#" className={"underline underline-offset-2 self-end"}>« Gamle poster</a>
			</section>

			<section className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-rows-4 justify-center gap-16 [direction:ltr]">
				<h2 className="text-center self-center text-2xl font-bold font-abril-fatface tablet:col-span-2 desktop:col-span-1">Kontor, handel og forretningsservice</h2>

				<div className={"desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="Midtdjurs Traktorlager A/S -Butik" description="Kontor, handel og forretningsservice" link="#"
								   image="/image/Skaermbillede-2025-02-10-kl.-13.13.54-400x250.png"
					/>
				</div>
				<div className={"hidden tablet:block desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="Mr. Grenaa" description="Kontor, handel og forretningsservice" link="#"
								   image="/image/mr-grenaa-ilaere-400x250.jpg"
					/>
				</div>
				<div className={"hidden desktop:block desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="SuperBrugsen Glesborg" description="Kontor, handel og forretningsservice" link="#"
								   image="/image/superbrugsen_glesborg-ilaere-400x250.png"
					/>
				</div>

				<a href="#" className={"underline underline-offset-2 self-end tablet:col-span-2 desktop:col-span-1 tablet:[direction:rtl] desktop:[direction:ltr]"}>« Gamle poster</a>
			</section>

			<section className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-rows-4 justify-center gap-16 [direction:rtl]">
				<h2 className="text-center self-center text-2xl font-bold font-abril-fatface tablet:col-span-2 desktop:col-span-1">Teknologi, byggeri og transport</h2>

				<div className={"desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="Terma a/s" description="Industritekniker, Teknologi, byggeri og transport" link="#"
								   image="/image/Terma-ilaere-erhvervsuddannelser-djursland-1-400x250.webp"
					/>
				</div>
				<div className={"hidden tablet:block desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="Johnsen Print & Digital Media " description="Grafisk tekniker, Teknologi, byggeri og transport" link="#"
								   image="/image/johnsen-print-og-media-ilaere-erhvervsuddannelser-djursland-400x250.jpg"
					/>
				</div>
				<div className={"hidden desktop:block desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="Viden Djurs" description="Mediegrafiker, Teknologi, byggeri og transport" link="#"
								   image="/image/mediegrafikerelev_viden_djurs_ilaere_elevplads_erhvervsuddannelser_djursland_billede.webp"
					/>
				</div>

				<a href="#" className={"underline underline-offset-2 self-end"}>« Gamle poster</a>
			</section>

			<section className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-rows-4 justify-center gap-16 [direction:ltr]">
				<h2 className="text-center self-center text-2xl font-bold font-abril-fatface tablet:col-span-2 desktop:col-span-1">Omsorg, sundhed og pædagogik</h2>

				<div className={"desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="Landsforeningen talentspejderne" description="Omsorg, sundhed og pædagogik" link="#"
								   image="/image/326966693_1145828589449699_5748631226438879334_n_192-1-e1740476725930-400x250.jpg"
					/>
				</div>
				<div className={"hidden tablet:block desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="Norddjurs kommune -EUX Velfærd" description="Omsorg, sundhed og pædagogik" link="#"
								   image="/image/Skaermbillede-2025-02-10-kl.-14.57.07-400x250.png"
					/>
				</div>
				<div className={"hidden desktop:block desktop:row-span-2 [direction:ltr]"}>
					<CardContainer title="Norddjurs kommune" description="Omsorg, sundhed og pædagogik" link="#"
								   image="/image/Skaermbillede-2025-02-10-kl.-14.37.44-400x250.png"
					/>
				</div>

				<a href="#" className={"underline underline-offset-2 self-end tablet:col-span-2 desktop:col-span-1 tablet:[direction:rtl] desktop:[direction:ltr]"}>« Gamle poster</a>
			</section>
		</main>
	)
}

function CardContainer({title, description, link, image}: { title: string, image: string, description: string, link: string }) {
	return (
		<Card>
			<div className="flex flex-col">
				<figure className="w-full"><img className="w-full" src={image} alt=""/></figure>
				<div className={"p-4"}>
					<p className={"font-semibold text-lg"}>{title}</p>
					<p>{description}</p>
					<a href={link} className="text-orange">læs mere</a>
				</div>
			</div>
		</Card>
	)
}