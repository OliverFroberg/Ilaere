import Image from "next/image";

export default function Home() {
  return (

   <main>
     <h1>Welcome to the Home Page</h1>
     <div className="container mx-auto">
       <Image src="/path/to/image.jpg" alt="Description" width={500} height={500} />
     </div>
   </main>
   
  );
}
