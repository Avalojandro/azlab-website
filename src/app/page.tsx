import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import PopularExams from "@/components/PopularExams";
import Reviews from "@/components/Reviews";
import Faqs from "@/components/Faqs";
import HowItWorks from "@/components/HowItWorks";
import ContactCta from "@/components/ContactCta";
import { getProducts } from "../../services/api";

export default async function Home() {
  const response = await getProducts(1, 4);
  const products = response?.data || response?.products || [];

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <PopularExams products={products} />
      <HowItWorks />
      <ImageCarousel />
      <Reviews />
      <Faqs />
      <ContactCta />
    </main>
  );
}
