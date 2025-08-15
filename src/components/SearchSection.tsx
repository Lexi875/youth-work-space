import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin } from "lucide-react";
import { useState } from "react";

interface SearchSectionProps {
  onSearch: (query: string, location: string, category: string) => void;
}

export const SearchSection = ({ onSearch }: SearchSectionProps) => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Bromborough");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    onSearch(query, location, category);
  };

  return (
    <div className="bg-gradient-hero py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Find Your First Job in Bromborough
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover local opportunities in Bromborough and surrounding areas, perfect for students and young professionals aged 14-18
          </p>
        </div>
        
        <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50 animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Job title or keyword" 
                className="pl-10 h-12 border-border/50 focus:ring-primary"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="City, town or postcode" 
                className="pl-10 h-12 border-border/50 focus:ring-primary"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-12 border-border/50">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                <SelectItem value="Retail">Retail</SelectItem>
                <SelectItem value="Food Service">Food Service</SelectItem>
                <SelectItem value="Tutoring">Tutoring</SelectItem>
                <SelectItem value="Childcare">Childcare</SelectItem>
                <SelectItem value="Delivery">Delivery</SelectItem>
                <SelectItem value="Entertainment">Entertainment</SelectItem>
                <SelectItem value="Pet Care">Pet Care</SelectItem>
                <SelectItem value="Sports">Sports</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              size="lg" 
              className="h-12 bg-gradient-primary hover:bg-primary-hover font-medium hover-scale"
              onClick={handleSearch}
            >
              Search Jobs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};