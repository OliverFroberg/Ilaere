import Card from "@/component/card";
import "@/style/mainpage.css"

export default function Home() {
	return (
		<main className={"wrapper"}>
     <h1>Welcome to the Home Page</h1>
     <div className="container m-auto w-auto h-auto ">


      {/* hero section med Vi er i lære */}
      <div className="container grid grid-cols-3 gap-4 m-auto grid-rows-3">
        <figure className=" row-start-3 col-start-1 "></figure>
        <section className=" justify-center self-center row-start-2 col-start-2">
          <h2>Section Title</h2>
          <h3>Vi er i Lære</h3>
          <p>ilære,dk -stedet, hvor unge og virksomheder mødes</p>
        </section>
        <figure className=" row-start-1 col-start-3 "></figure>
      </div>

      {/* kort */}  
      <div className="container m-auto grid grid-cols-3 gap-4 grid-row-3 h-auto w-auto justify-center">

        <img  className="col-span-2 h-40 w-full" src="https://images.unsplash.com/photo-1756660011546-c0aba6372da2?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <button className="row-start-1 col-start-3 self-center text-center" >hello</button>
      

        </div>  

        


      {/* slider */}

      <div className="container m-auto w-auto h-auto flex flex-wrap justify-center">

      </div>


      {/* Flere Virksomheder */}

      <div className="container m-auto w-auto h-auto flex flex-wrap justify-center ">

      <div><h2>Flere Virksomheder</h2>
      </div>



      </div >



      {/* video */}
      <div className="container m-auto w-auto h-auto  grid grid-cols-2 justify-center items-center">
      
      <iframe className="row-span-2 col-start-1 w-full h-full m-r-auto " src="https://player.vimeo.com/video/1086696953?h=08d3c4e9cf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" title="Det er fedt at tag en erhvervsuddannelse"></iframe>
      <section className="row-start-1 col-start-2 m-2 text-center border  gradient-one justify-center items-center flex flex-col p-4 rounded-base  h-[50px] text-black  font-abril-fatface">
        <p>Praktik- og lærepladser på Djursland</p>
      </section>
      <article className="row-start-2 col-start-2 m-2 text-center bg-nav rounded-base text-white p-4 h-auto ">
        <p className="text-[14px]">ilære.dk er skabt i samarbejde mellem folkeskoler, erhvervsskoler og virksomheder for at fremme interessen for erhvervsrettede uddannelser for folkeskoleelever i 7., 8. og 9.klasse.
          Hvis du har svært ved at finde ud af, hvilket arbejde eller fag der kunne være spændende for dig, så prøv at kigge her på hjemmesiden.</p>
      </article>
     </div>

     <div className=" rounded-full flex flex-wrap h-180 w-full gradient-three flex-col justify-center items-center mt-5 ">
        <h1 className=" font-bold m-5 text-2xl  " >Brancheområderne</h1>
        <div className="text-white bg-nav rounded-base text-[20px] m-5 p-2" ><p>fødevarer, jordbrug og oplevelser</p></div>
        <div className="text-white bg-nav rounded-base text-[20px] m-5 p-2" ><p>kontor,handel og forretningsservice</p></div>
        <div className="text-white bg-nav rounded-base text-[20px] m-5 p-2" ><p>Teknologi, byggeri og transport </p></div>
        <div className="text-white bg-nav rounded-base text-[20px] m-5 p-2" ><p>Omsorg, sunhed og pædagogik </p></div>


     </div>


      <section className=" grid grid-cols-2 grid-rows-3 justify-center gap-3 ">
        
        <h2 className=" col-span-2 row-1 text-end  self-end-safe pr-15 font-abril-fatface text-2xl ">Fødevarer, jordbrug og oplevelser</h2>

        
        <div className=" w-[600px]   col-1 mt-2 row-2 flex flex-col justify-start  p-2 h-auto">
         <CardContainer title="Campus Djursland" description="Castronom, fødevarer, jordbrug og oplevelser" link="#" image="/./image/mediegrafikerelev_viden_djurs_ilaere_elevplads_erhvervsuddannelser_djursland_billede3.webp"
          /> 
          


        </div>
       

        
   
        
        <div className="h-[400px] w-[600px]  col-1 mt-2">
          <CardContainer title="Møllefisk & Havnens Røgeri" description="Fødevarer, jordbrug og oplevelser" link="#" image="/./image/Moellefisk-Havnens-Roegeri-laerling-praktik-ilaere-400x250.webp"
          />
        

          
         </div>





        <div className="h-[400px] w-[600px]   col-2 m-2  row-span-2 row-start-2  self-center-safe">
            <CardContainer title="Café kræmmerhuset" description="Fødevarer, jordbrug og oplevelser" link="#" image="/./image/Gastronom_laerling_cafe_kraemmerhuset_ilaere_erhvervsuddannelser_djursland-400x250.webp"
          />
        </div>

      </section>
      







       
      </div>
   </main>

  );
}






function CardContainer({title,description,link,image}:{title:string, image:string, description:string, link:string}) {
  return (
    <Card>
        <div className=" w-[600px]   col-1 mt-2 row-2 flex flex-col justify-start  p-2 h-auto">
          <figure className=" justify-self-start w-full " ><img className="w-full" src={image} alt="" /></figure>
          <p>{title}</p>
          <p>{description}</p>
          <a href={link} className=" bg-nav text-white rounded-base p-4 m-2 w-fit">læs mere</a>

          


        </div>
        </Card>
  )
}