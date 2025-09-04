export default function Page() {
	return (
		<main className="bg-white">
    	

<div className="grid grid-cols-1 sm:grid-cols-2 w-fit mx-auto justify-items-center p-4 gap-12 border-black bg-white">

{/* LEFT SIDE */}
<div className="w-full sm:w-80 rounded-lg overflow-hidden border border-black bg-white">
  <div className="p-4 sm:p-6">
    <h2 className="text-xl sm:text-2xl font-semibold text-orange-300 mb-4 text-center">
      Kontakt os gerne, vi tager imod:
    </h2>

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
<div className="w-full sm:w-80 rounded-lg overflow-hidden border border-black bg-white text-center">
  <div className="p-4 sm:p-6 text-black">
    {/* Logo image */}
    <div className="mb-4">
  
      <img 
        src="/image/campus Djursland 09.23.11.jpeg"  alt="Campus Djursland Logo"  className="mx-auto h-16 sm:h-20 object-contain"/>
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


<h2 className="text-2xl text-black sm:text-3xl text-center w-full max-w-4xl mx-auto rounded-3xl border-2 border-black p-2 sm:p-4 block m-2 font-semibold">
  Flere attraktive virksomheder
</h2>

<div className="flex flex-wrap justify-center gap-12 p-3">

<div className="rounded-2xl border-2 border-black overflow-hidden w-64 sm:w-72 md:w-80 lg:w-64">
  <img 
    src="/image/cafe_kraemmerhuset-400x250.webp" 
    alt="Campus Djursland Logo" 
    className="w-full h-40 object-cover"
  />
  <div className="p-4 bg-white">
    <p className="font-semibold text-black mb-2">Café Kræmmerhuset</p>
    <a href="#" className="text-blue-600 hover:underline no-underline">Læs mere</a>
  </div>
</div>



<div className="rounded-2xl border-2 border-black overflow-hidden w-64 sm:w-72 md:w-80 lg:w-64">
  <img 
    src="/image/Moellefisk-Havnens-Roegeri-laerling-praktik-ilaere-400x250.webp" 
    alt="Campus Djursland Logo" 
    className="w-full h-40 object-cover"
  />
  <div className="p-4 bg-white">
    <p className="font-semibold text-black mb-2">Café Kræmmerhuset</p>
    <a href="#" className="text-blue-600 hover:underline no-underline">Læs mere</a>
  </div>
</div>



<div className="rounded-2xl border-2 border-black overflow-hidden w-64 sm:w-72 md:w-80 lg:w-64">
  <img 
    src="/image/Skaermbillede.png" 
    alt="Skaermbillede" 
    className="w-full h-40 object-cover"
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

