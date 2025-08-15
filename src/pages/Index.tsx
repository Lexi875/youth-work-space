import { Navigation } from "@/components/Navigation";
import { SearchSection } from "@/components/SearchSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedJobs } from "@/components/FeaturedJobs";
import { Footer } from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearch = (query: string, location: string, category: string) => {
    setSearchQuery(query);
    setSearchLocation(location);
    setSearchCategory(category);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <SearchSection onSearch={handleSearch} />
      <CategoryGrid />
      <FeaturedJobs 
        searchQuery={searchQuery}
        searchLocation={searchLocation}
        searchCategory={searchCategory}
      />
      <Footer />
    </div>
  );
};

export default Index;
