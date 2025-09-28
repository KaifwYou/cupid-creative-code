import { Camera, Heart, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Memories = () => {
  const { toast } = useToast();

  // Sample memory data - in a real app this would come from a database
  const memories = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=300&fit=crop",
      title: "First Date Magic",
      description: "The night we knew we were meant to be together",
      date: "January 15, 2024"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
      title: "Sunset Adventures",
      description: "Watching the world paint the sky just for us",
      date: "January 28, 2024"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
      title: "Cozy Moments",
      description: "Finding paradise in simple moments together",
      date: "February 5, 2024"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      title: "Dancing in the Rain",
      description: "When the weather couldn't dampen our spirits",
      date: "February 10, 2024"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=400&h=300&fit=crop",
      title: "Picnic Perfect",
      description: "Love tastes better when shared under blue skies",
      date: "February 12, 2024"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      title: "City Lights Love",
      description: "Finding magic in the urban glow together",
      date: "February 13, 2024"
    }
  ];

  const handleAddMemory = () => {
    toast({
      title: "Coming Soon! 📸",
      description: "Memory upload feature will be available soon. For now, enjoy browsing our collection!",
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="heart-float mb-6">
            <Camera className="h-16 w-16 mx-auto text-primary animate-pulse-heart" />
          </div>
          <h1 className="text-5xl md:text-6xl font-romantic font-bold text-gradient-romantic mb-4">
            Our Memories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of precious moments that tell our love story
          </p>
        </div>

        {/* Add Memory Button */}
        <div className="text-center mb-12">
          <Button 
            onClick={handleAddMemory}
            size="lg"
            className="gradient-romantic hover:scale-105 transition-romantic shadow-romantic"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add New Memory
          </Button>
        </div>

        {/* Memory Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <Card 
              key={memory.id}
              className="group overflow-hidden hover-heart shadow-soft border-0 gradient-soft animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 gradient-romantic opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="h-12 w-12 text-white animate-pulse-heart" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-romantic font-semibold text-gradient-romantic">
                    {memory.title}
                  </h3>
                  <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  {memory.description}
                </p>
                <p className="text-sm text-accent font-medium">
                  {memory.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating Hearts Animation */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute text-primary/10 animate-heart-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                fontSize: `${1.5 + Math.random() * 1}rem`,
              }}
            >
              💕
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Memories;