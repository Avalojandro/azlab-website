import Hero from "@/components/Hero";
import PopularExams from "@/components/PopularExams";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <PopularExams />
      <HowItWorks />
    </main>
  );
}
