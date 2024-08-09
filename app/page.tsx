import Image from "next/image";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import SectionAbout from "./components/SectionAbout/SectionAbout";

export default function Home() {
  return (
    <>
    <Navigation />
    <Header />
    <main>
    <SectionAbout />
    </main>
    </>

  );
}
