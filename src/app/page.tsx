import Hero from "@/components/Hero";
import PopularExams from "@/components/PopularExams";
import Reviews from "@/components/Reviews";
import Faqs from "@/components/Faqs";
import HowItWorks from "@/components/HowItWorks";
import ContactCta from "@/components/ContactCta";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <PopularExams />
      <HowItWorks />
      <Reviews />
      <Faqs />
      <ContactCta />
    </main>
  );
}
