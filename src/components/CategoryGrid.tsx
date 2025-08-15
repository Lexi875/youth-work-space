import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Coffee, 
  GraduationCap, 
  Users, 
  Car, 
  Home,
  Camera,
  Gamepad2
} from "lucide-react";

const categories = [
  {
    name: "Retail & Sales",
    icon: ShoppingCart,
    count: 245,
    color: "text-blue-600"
  },
  {
    name: "Food Service",
    icon: Coffee,
    count: 189,
    color: "text-orange-600"
  },
  {
    name: "Tutoring",
    icon: GraduationCap,
    count: 156,
    color: "text-green-600"
  },
  {
    name: "Childcare",
    icon: Users,
    count: 134,
    color: "text-purple-600"
  },
  {
    name: "Delivery",
    icon: Car,
    count: 98,
    color: "text-red-600"
  },
  {
    name: "Housekeeping",
    icon: Home,
    count: 87,
    color: "text-teal-600"
  },
  {
    name: "Photography",
    icon: Camera,
    count: 65,
    color: "text-pink-600"
  },
  {
    name: "Entertainment",
    icon: Gamepad2,
    count: 43,
    color: "text-indigo-600"
  }
];

export const CategoryGrid = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground text-lg">
            Find opportunities that match your interests and skills
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="group cursor-pointer transition-all duration-300 hover:shadow-soft hover:-translate-y-2 border-border/50"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{category.name}</h3>
                    <p className="text-muted-foreground text-sm">{category.count} jobs</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};