import Image from "next/image";

export default function Home() {
  return (
    <main 
    style={{ display: "flex", 
      justifyContent: "center",
      alignItems: "center"
}}>
      
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        width={283}
        height={64}
        
      />
    </main>
  );
}
