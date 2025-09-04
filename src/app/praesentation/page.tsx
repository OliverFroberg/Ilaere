export default function Page() {
	return (
		<>	

<div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-3 p-4">

{/* LEFT SIDE: Kontakt os gerne */}
<div className="w-full sm:w-80 rounded-lg overflow-hidden border border-black bg-white">
  <div className="p-4 sm:p-6">
    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
      Kontakt os gerne, vi tager imod:
    </h2>

    {/* List */}
    <ul className="space-y-3 mb-6">
      <li className="text-base sm:text-lg">✅ Elever</li>
      <li className="text-base sm:text-lg">✅ Praktikanter</li>
      <li className="text-base sm:text-lg">❌ Sæsonmedarbejder/Fritidsjob</li>
      <li className="text-base sm:text-lg">❌ Juniormesterlære</li>
      <li className="text-base sm:text-lg">❌ Erhvervsgrunduddannelse (EGU)</li>
    </ul>

    
    <div className="space-y-3">
      <button 
        type="button" 
        className="w-full bg-red-100 text-red-600 py-2 px-4 rounded hover:bg-red-200 border-black">
        Se nuværende lærling
      </button>
      <button 
        type="button" 
        className="w-full bg-red-100 text-red-600 py-2 px-4 rounded hover:bg-red-200">
        Læs om uddannelsen på ug.dk
      </button>
    </div>
  </div>
</div>

{/* RIGHT SIDE */}
<div className="w-full sm:w-80 rounded-lg overflow-hidden border border-black bg-white text-center">
  <div className="p-4 sm:p-6">
    {/* Logo image */}
    <div className="mb-4">
      <img 
        src="your-campus-logo.png" 
        alt="Campus Djursland Logo" 
        className="mx-auto h-16 sm:h-20 object-contain"
      />
    </div>


    {/* Contact Info */}
    <h3 className="text-lg font-bold">Visitkort for:</h3>
    <p className="font-semibold">Campus Djursland</p>
    <p>Ydesvej 4</p>
    <p>8500 Grenå</p>
    <p><span className="font-bold">Tlf:</span> +45 30 22 10 08</p>
    <p>
      <span className="font-bold">Email:</span>{" "}
      <a 
        href="mailto:vibeke@campusdjursland.dk" 
        className="text-orange-400"
      >
        vibeke@campusdjursland.dk
      </a>
    </p>
    <p>
      <span className="font-bold">Facebook:</span>{" "}
      <a href="#" className="text-orange-400">Find os her</a>
    </p>
  </div>
</div>

</div>

		</>
	)
}

