import { Hero } from "@/components/sections/Hero";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ContactStrip } from "@/components/sections/ContactStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <AboutPreview />
      <ServicesOverview />
      <ContactStrip />
    </>
  );
}
