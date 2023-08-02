import Fourth from "../../components/About/Fourth/Fourth";
import HeroAbout from "../../components/About/HeroAbout/HeroAbout";
import Newsletter from "../../components/About/Newsletter/Newsletter";
import Third from "../../components/About/Third/Third";

export default function About() {
  return (
    <section className="md:px-4 sm:px-4">
      <HeroAbout />
      <Third />
      <Fourth />
      <Newsletter />
    </section>
  );
}
