import { Calendar, MapPin, Clock, Heart, Star, Coffee, Music, Camera } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface DateIdea {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  difficulty: "Easy" | "Medium" | "Adventurous";
  icon: any;
  tips: string[];
}

const DateIdeas = () => {
  const { toast } = useToast();

  const dateIdeas: DateIdea[] = [
    {
      id: "1",
      title: "Stargazing Picnic",
      description: "Spread a blanket under the stars, bring your favorite snacks, and marvel at the cosmos together. Perfect for deep conversations and magical moments.",
      category: "Romantic",
      duration: "3-4 hours",
      difficulty: "Easy",
      icon: Star,
      tips: [
        "Check the weather forecast for clear skies",
        "Bring a telescope or stargazing app",
        "Pack warm blankets and hot drinks",
        "Choose a location away from city lights"
      ]
    },
    {
      id: "2",
      title: "Coffee Shop Hopping",
      description: "Explore different coffee shops in your city, trying unique blends and pastries. Rate each place and create your own coffee guide together.",
      category: "Casual",
      duration: "4-6 hours", 
      difficulty: "Easy",
      icon: Coffee,
      tips: [
        "Research interesting local coffee shops",
        "Bring a notebook to rate each place",
        "Try something new at each location",
        "Take photos of your favorite drinks"
      ]
    },
    {
      id: "3",
      title: "Outdoor Concert Date",
      description: "Find local outdoor concerts or music festivals. Dance under the stars and discover new artists together while enjoying the vibrant atmosphere.",
      category: "Adventurous",
      duration: "5-8 hours",
      difficulty: "Medium",
      icon: Music,
      tips: [
        "Check local event listings and venues",
        "Bring portable chairs or a blanket",
        "Arrive early for better spots",
        "Don't forget ear protection for loud venues"
      ]
    },
    {
      id: "4",
      title: "Photography Walk",
      description: "Explore your city with cameras in hand, capturing beautiful moments and hidden gems. Challenge each other to find the most creative shots.",
      category: "Creative",
      duration: "3-5 hours",
      difficulty: "Easy",
      icon: Camera,
      tips: [
        "Choose an interesting neighborhood to explore",
        "Set photo challenges for each other",
        "Visit during golden hour for best lighting",
        "Share and compare your favorite shots"
      ]
    },
    {
      id: "5",
      title: "Cooking Class Adventure",
      description: "Learn to cook a new cuisine together. Whether it's pasta making or sushi rolling, creating something delicious as a team is incredibly bonding.",
      category: "Creative",
      duration: "2-3 hours",
      difficulty: "Medium",
      icon: Heart,
      tips: [
        "Book classes in advance, they fill up quickly",
        "Choose a cuisine you both want to learn",
        "Wear comfortable, closed-toe shoes",
        "Ask questions and have fun with mistakes"
      ]
    },
    {
      id: "6",
      title: "Sunrise Hike",
      description: "Wake up early and hike to a scenic viewpoint to watch the sunrise together. Pack a thermos of coffee and enjoy nature's daily miracle.",
      category: "Adventurous",
      duration: "4-6 hours",
      difficulty: "Adventurous",
      icon: MapPin,
      tips: [
        "Check sunrise times and plan accordingly",
        "Bring flashlights or headlamps",
        "Pack warm layers and comfortable hiking boots",
        "Research trails and difficulty levels beforehand"
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800 hover:bg-green-200";
      case "Medium": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"; 
      case "Adventurous": return "bg-red-100 text-red-800 hover:bg-red-200";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Romantic": return "bg-pink-100 text-pink-800 hover:bg-pink-200";
      case "Casual": return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "Creative": return "bg-purple-100 text-purple-800 hover:bg-purple-200";
      case "Adventurous": return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  const handlePlanDate = (dateIdea: DateIdea) => {
    toast({
      title: `Great choice! 💕`,
      description: `"${dateIdea.title}" sounds like the perfect date. Start planning and make some beautiful memories!`,
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="heart-float mb-6">
            <Calendar className="h-16 w-16 mx-auto text-primary animate-pulse-heart" />
          </div>
          <h1 className="text-5xl md:text-6xl font-romantic font-bold text-gradient-romantic mb-4">
            Date Ideas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover magical experiences and create unforgettable memories together
          </p>
        </div>

        {/* Date Ideas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dateIdeas.map((idea, index) => {
            const IconComponent = idea.icon;
            return (
              <Card 
                key={idea.id}
                className="hover-heart shadow-soft border-0 gradient-soft animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-romantic text-gradient-romantic">
                        {idea.title}
                      </CardTitle>
                    </div>
                    <Heart className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className={getCategoryColor(idea.category)}>
                      {idea.category}
                    </Badge>
                    <Badge className={getDifficultyColor(idea.difficulty)}>
                      {idea.difficulty}
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{idea.duration}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {idea.description}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Pro Tips:</h4>
                    <ul className="space-y-1">
                      {idea.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <span className="text-primary">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    onClick={() => handlePlanDate(idea)}
                    className="w-full gradient-romantic hover:scale-105 transition-romantic shadow-romantic"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Plan This Date
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 rounded-2xl gradient-soft shadow-soft">
          <Heart className="h-12 w-12 mx-auto text-primary mb-4 animate-pulse-heart" />
          <h3 className="text-3xl font-romantic font-bold text-gradient-romantic mb-4">
            Ready to Create Magic?
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every great love story is made up of countless small moments. Pick an idea, plan your adventure, and make today unforgettable!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DateIdeas;