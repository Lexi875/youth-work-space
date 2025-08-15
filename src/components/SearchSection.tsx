import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin } from "lucide-react";

export const SearchSection = () => {
  return (
    <div className="bg-gradient-hero py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Find Your First Job
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover local opportunities perfect for students and young professionals aged 14-18
          </p>
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Job title or keyword" 
                className="pl-10 h-12 border-border/50 focus:ring-primary"
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="City or zip code" 
                className="pl-10 h-12 border-border/50 focus:ring-primary"
              />
            </div>
            
            <Button size="lg" className="h-12 bg-gradient-primary hover:bg-primary-hover font-medium">
              Search Jobs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};