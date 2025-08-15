import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              YouthJobs
            </div>
            <p className="text-muted-foreground text-sm">
              Connecting young professionals with their first career opportunities. 
              Start your journey today.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Job Seekers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Career Advice</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Resume Builder</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Interview Tips</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Post a Job</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Hiring Resources</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact Sales</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest job alerts and career tips delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="text-sm" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 YouthJobs. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};