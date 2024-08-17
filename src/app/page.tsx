import Wheel from "../components/Wheel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <Image src="/logo.png" alt="logo" width={100} height={100}></Image>
      <h1 className="text-4xl font-bold mb-8 text-royal-blue-500">
        Snack van Fortuin
      </h1>
      <Wheel />
    </main>
  );
}
