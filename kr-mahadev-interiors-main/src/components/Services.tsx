import { ChefHat, DoorClosed, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import kitchenImage from "@/assets/kitchen-island.jpg";
import wardrobeImage from "@/assets/wardrobe-bedroom.jpg";
import ceilingImage from "@/assets/ceiling-lighting.jpg";

const services = [
  {
    title: "Modular Kitchens",
    description: "Smart, stylish, and functional kitchen designs tailored to your cooking needs and space.",
    icon: ChefHat,
    image: kitchenImage,
  },
  {
    title: "Bedroom Wardrobes",
    description: "Custom wardrobes with modern finishes that maximize storage and complement your bedroom.",
    icon: DoorClosed,
    image: wardrobeImage,
  },
  {
    title: "False Ceiling & Lighting",
    description: "Elegant ceilings with premium lighting solutions that transform any room's ambiance.",
    icon: Lightbulb,
    image: ceilingImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive interior design solutions crafted with precision and style
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 bg-primary rounded-full">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
