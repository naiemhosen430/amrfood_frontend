import Image from "next/image";
import Hero from "./_components/home/Hero";
import HowToWork from "./_components/home/HowToWork";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <HowToWork />
      </div>
    </>
  );
}
