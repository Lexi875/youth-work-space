import { Button } from "@/components/ui/button";
import { Bell, User, Menu } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            YouthJobs
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Find Jobs
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Companies
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Career Tips
            </a>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full"></div>
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          
          <Button variant="outline" className="hidden sm:flex">
            Post a Job
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};