import Hero from "@/sections/hero";
import Work from "@/sections/Work";
import About from "@/sections/about";
import Team from "@/sections/team";
import Service from "@/sections/service";
import Footer from "@/sections/footer";
import TopNav from "@/components/top-nav/TopNav";

export default function Home() {

  return (
    <>
      <TopNav />
      <Hero />
      {/* <About /> */}
      {/* <Stats /> */}
      {/* <TimeTested /> */}
      <Service />
      <Work />
      <Team />
      <Footer />
    </>
  );
}