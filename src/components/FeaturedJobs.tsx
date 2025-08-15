import { JobCard, Job } from "./JobCard";
import { Button } from "@/components/ui/button";

const featuredJobs: Job[] = [
  {
    id: "1",
    title: "Sales Associate",
    company: "Target",
    location: "Downtown Mall",
    type: "Part-time",
    salary: "$15-17/hr",
    posted: "2 days ago",
    description: "Join our team as a Sales Associate! Help customers find what they need while learning valuable retail skills. Perfect for students with flexible scheduling.",
    category: "Retail"
  },
  {
    id: "2",
    title: "Barista",
    company: "Local Coffee Co.",
    location: "Main Street",
    type: "Part-time",
    salary: "$14-16/hr + tips",
    posted: "1 day ago",
    description: "We're looking for enthusiastic individuals to join our coffee team. Learn coffee-making skills and customer service in a fun environment.",
    category: "Food Service"
  },
  {
    id: "3",
    title: "Math Tutor",
    company: "Learning Center",
    location: "Education District",
    type: "Part-time",
    salary: "$18-22/hr",
    posted: "3 days ago",
    description: "Help middle school students with math homework and test preparation. Must have strong math skills and patience working with young learners.",
    category: "Tutoring"
  },
  {
    id: "4",
    title: "Camp Counselor",
    company: "Summer Adventure Camp",
    location: "City Park",
    type: "Seasonal",
    salary: "$13-15/hr",
    posted: "5 days ago",
    description: "Lead fun activities for kids aged 6-12 during summer camp. Great for students who love working with children and outdoor activities.",
    category: "Childcare"
  },
  {
    id: "5",
    title: "Delivery Driver",
    company: "QuickEats",
    location: "City Center",
    type: "Part-time",
    salary: "$12/hr + tips",
    posted: "1 week ago",
    description: "Deliver food orders to customers throughout the city. Must have reliable transportation and be 16+ with valid driver's license.",
    category: "Delivery"
  },
  {
    id: "6",
    title: "Social Media Assistant",
    company: "Local Business Network",
    location: "Remote/Hybrid",
    type: "Part-time",
    salary: "$16-20/hr",
    posted: "4 days ago",
    description: "Help local businesses manage their social media presence. Create content, schedule posts, and engage with customers online.",
    category: "Marketing"
  }
];

export const FeaturedJobs = () => {
  return (
    <section className="py-16 px-4 bg-gradient-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Opportunities</h2>
          <p className="text-muted-foreground text-lg">
            Hand-picked jobs perfect for young professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
};