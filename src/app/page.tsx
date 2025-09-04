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
      <section className="row-start-1 col-start-2 m-2 text-center border  gradient-one justify-center items-center flex flex-col p-4 rounded-base  h-[50px] text-black font-bold">
        <p>Praktik- og lærepladser på Djursland</p>
      </section>
      <article className="row-start-2 col-start-2 m-2 text-center bg-amber-600 rounded-base text-white p-4 h-auto ">
        <p className="text-[14px]">ilære.dk er skabt i samarbejde mellem folkeskoler, erhvervsskoler og virksomheder for at fremme interessen for erhvervsrettede uddannelser for folkeskoleelever i 7., 8. og 9.klasse.
          Hvis du har svært ved at finde ud af, hvilket arbejde eller fag der kunne være spændende for dig, så prøv at kigge her på hjemmesiden.</p>
      </article>
     </div>

     <div className=" rounded-b-full flex flex-wrap h-48 w-full gradient-three justify-center">

     </div>



       
      </div>
   </main>

  );
}
