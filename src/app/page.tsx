import Image from "next/image";
import RouletteWheel from "@/components/Wheel";

export default function Home() {
  return (
    <main className="flex flex-col  items-center  ">
      <Image src="/logo.png" alt="logo" width={100} height={100}></Image>
      <h1 className="text-4xl font-bold mb-8 text-royal-blue-500">
        Snack van Fortuin
      </h1>
      <RouletteWheel />
    </main>
  );
}
