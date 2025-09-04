export default function Page() {
	return (
		<>
			
			<div className="flex flex-col w-full h-auto gap-10">
				<video controls  className="w-full h-auto">
					<source src="/campus.mp4" type="video/mp4" />
				</video>
				<div className="bg-orange-500 w-full flex flex-col gap-5 text-white">
					<div className=" flex flex-col">
						<img src="/campus-simon.webp" className="w-full" alt="Simon fra køkknet" />
						<div className="flex flex-col p-5 gap-2 text-center">
							<h1 className="text-5xl">Campus Djursland</h1>
							<h2 className="text-2xl">Hvor trivsel og faglig udvikling går hånd i hånd</h2>
						</div>	
					</div>
					<article className="p-5 flex flex-col gap-5">
						<p>Campus Djursland tilbyder læreplads til cater-elev i et levende og socialt fællesskab, hvor trivsel og faglig udvikling går hånd i hånd.</p>
						<p>Campuskøkkenet fungerer dagligt, som madstation for elever og beboere på Campus og skolehjem. Her tilbereder de sund, velsmagende mad fra bunden og arbejder dagligt med sæsonens råvarer, kosthensyn og effektiv produktion i et professionelt køkkenmiljø.</p>
						<p>Caterelev hos Campus Djursland bliver en del af et team, der brænder for både god mad og et godt arbejdsmiljø. De får praktisk erfaring med planlægning, tilberedning og servering – og mulighed for at arbejde selvstændigt og tage ansvar i trygge rammer.</p>
						<p>Samtidig er Campus Djursland et unikt sted at være elev. Her bor og lever unge sammen under uddannelse i et socialt, efterskolelignende miljø. Medarbejderne skaber en hverdag med god stemning, sunde rutiner og plads til fællesskab.</p>
					</article>
				</div>
			</div>
		</>
	)
}

