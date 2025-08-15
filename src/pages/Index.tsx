import { Navigation } from "@/components/Navigation";
import { SearchSection } from "@/components/SearchSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedJobs } from "@/components/FeaturedJobs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SearchSection />
      <CategoryGrid />
      <FeaturedJobs />
      <Footer />
    </div>
  );
};

export default Index;
