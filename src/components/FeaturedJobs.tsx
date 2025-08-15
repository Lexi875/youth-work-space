import { JobCard, Job } from "./JobCard";
import { Button } from "@/components/ui/button";

const featuredJobs: Job[] = [
  {
    id: "1",
    title: "Sales Assistant",
    company: "Tesco Extra",
    location: "Bromborough Village",
    type: "Part-time",
    salary: "£8.60-£10.50/hr",
    posted: "2 days ago",
    description: "Join our team as a Sales Assistant! Help customers find what they need while learning valuable retail skills. Perfect for students with flexible scheduling.",
    category: "Retail"
  },
  {
    id: "2",
    title: "Barista",
    company: "Costa Coffee",
    location: "Croft Retail Park",
    type: "Part-time",
    salary: "£8.60-£9.50/hr + tips",
    posted: "1 day ago",
    description: "We're looking for enthusiastic individuals to join our coffee team. Learn coffee-making skills and customer service in a welcoming environment.",
    category: "Food Service"
  },
  {
    id: "3",
    title: "Maths Tutor",
    company: "Bromborough Learning Centre",
    location: "Bromborough Village",
    type: "Part-time",
    salary: "£12-£15/hr",
    posted: "3 days ago",
    description: "Help secondary school students with maths homework and GCSE preparation. Must have strong maths skills and patience working with young learners.",
    category: "Tutoring"
  },
  {
    id: "4",
    title: "Activity Leader",
    company: "Wirral Summer Scheme",
    location: "Bromborough Recreation Centre",
    type: "Seasonal",
    salary: "£8.60-£9.20/hr",
    posted: "5 days ago",
    description: "Lead fun activities for children aged 6-12 during summer holidays. Great for students who love working with children and outdoor activities.",
    category: "Childcare"
  },
  {
    id: "5",
    title: "Delivery Driver",
    company: "Just Eat",
    location: "Bromborough & Bebington",
    type: "Part-time",
    salary: "£7.50/hr + tips",
    posted: "1 week ago",
    description: "Deliver food orders to customers throughout Bromborough area. Must have reliable transport and be 16+ with valid driving licence or use bicycle/scooter.",
    category: "Delivery"
  },
  {
    id: "6",
    title: "Social Media Assistant",
    company: "Bromborough Business Network",
    location: "Remote/Hybrid",
    type: "Part-time",
    salary: "£9-£12/hr",
    posted: "4 days ago",
    description: "Help local Bromborough businesses manage their social media presence. Create content, schedule posts, and engage with local customers online.",
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