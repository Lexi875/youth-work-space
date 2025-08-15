import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign } from "lucide-react";

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Part-time" | "Full-time" | "Internship" | "Seasonal";
  salary: string;
  posted: string;
  description: string;
  category: string;
}

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-soft hover:-translate-y-1 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg leading-tight line-clamp-2">{job.title}</h3>
            <p className="font-medium text-muted-foreground">{job.company}</p>
          </div>
          <Badge variant="secondary" className="shrink-0">
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            <span>{job.salary}</span>
          </div>
        </div>
        
        <p className="text-sm line-clamp-3 text-muted-foreground">{job.description}</p>
        
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{job.posted}</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full" variant="outline">
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};