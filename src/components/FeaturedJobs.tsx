import { JobCard, Job } from "./JobCard";
import { Button } from "@/components/ui/button";
import { jobsData } from "@/data/jobs";
import { useState, useMemo } from "react";

interface FeaturedJobsProps {
  searchQuery?: string;
  searchLocation?: string; 
  searchCategory?: string;
}

export const FeaturedJobs = ({ searchQuery = "", searchLocation = "", searchCategory = "" }: FeaturedJobsProps) => {
  const [showAll, setShowAll] = useState(false);
  
  const filteredJobs = useMemo(() => {
    let filtered = jobsData;
    
    if (searchQuery) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (searchLocation) {
      filtered = filtered.filter(job => 
        job.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }
    
    if (searchCategory) {
      filtered = filtered.filter(job => job.category === searchCategory);
    }
    
    return filtered;
  }, [searchQuery, searchLocation, searchCategory]);

  const displayedJobs = showAll ? filteredJobs : filteredJobs.slice(0, 6);
  const hasSearchFilters = searchQuery || searchLocation || searchCategory;

  return (
    <section className="py-16 px-4 bg-gradient-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {hasSearchFilters ? `Found ${filteredJobs.length} Jobs` : "Featured Opportunities"}
          </h2>
          <p className="text-muted-foreground text-lg">
            {hasSearchFilters 
              ? "Here are the jobs matching your search" 
              : "Hand-picked jobs perfect for young professionals"}
          </p>
        </div>
        
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {displayedJobs.map((job, index) => (
                <div key={job.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <JobCard job={job} />
                </div>
              ))}
            </div>
            
            {filteredJobs.length > 6 && (
              <div className="text-center">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 hover-scale"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "Show Less" : `View All ${filteredJobs.length} Jobs`}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};