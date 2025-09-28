import { Heart, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import valentineHero from "@/assets/valentine-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${valentineHero})` }}
        />
        <div className="absolute inset-0 gradient-romantic opacity-70" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="heart-float mb-6">
            <Heart className="h-16 w-16 mx-auto text-white animate-pulse-heart" />
          </div>
          <h1 className="text-6xl md:text-8xl font-romantic font-bold text-white mb-6 animate-fade-in-up">
            Love is Magic
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Welcome to our Valentine's wonderland where every moment sparkles with romance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 hover:scale-105 transition-romantic shadow-glow backdrop-blur-sm"
            >
              <Link to="/love-letters">
                <Heart className="mr-2 h-5 w-5" />
                Read Love Letters
              </Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:scale-105 transition-romantic backdrop-blur-sm"
            >
              <Link to="/memories">
                <Sparkles className="mr-2 h-5 w-5" />
                Browse Memories
              </Link>
            </Button>
          </div>
        </div>

        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/20 animate-heart-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                fontSize: `${1 + Math.random() * 2}rem`,
              }}
            >
              💕
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-romantic font-bold text-gradient-romantic mb-4">
              Explore Our Love Universe
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover magical ways to celebrate your love story
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-heart shadow-soft border-0 gradient-soft">
              <div className="mb-6">
                <Heart className="h-12 w-12 mx-auto text-primary animate-pulse-heart" />
              </div>
              <h3 className="text-2xl font-romantic font-semibold mb-4 text-gradient-romantic">
                Love Letters
              </h3>
              <p className="text-muted-foreground mb-6">
                Express your deepest feelings with heartfelt messages and romantic notes
              </p>
              <Button asChild variant="outline" className="hover:scale-105 transition-romantic">
                <Link to="/love-letters">Start Writing</Link>
              </Button>
            </Card>

            <Card className="p-8 text-center hover-heart shadow-soft border-0 gradient-soft">
              <div className="mb-6">
                <Sparkles className="h-12 w-12 mx-auto text-accent animate-pulse-heart" />
              </div>
              <h3 className="text-2xl font-romantic font-semibold mb-4 text-gradient-romantic">
                Precious Memories
              </h3>
              <p className="text-muted-foreground mb-6">
                Capture and cherish beautiful moments that make your love story unique
              </p>
              <Button asChild variant="outline" className="hover:scale-105 transition-romantic">
                <Link to="/memories">View Gallery</Link>
              </Button>
            </Card>

            <Card className="p-8 text-center hover-heart shadow-soft border-0 gradient-soft">
              <div className="mb-6">
                <Gift className="h-12 w-12 mx-auto text-primary animate-pulse-heart" />
              </div>
              <h3 className="text-2xl font-romantic font-semibold mb-4 text-gradient-romantic">
                Date Ideas
              </h3>
              <p className="text-muted-foreground mb-6">
                Discover romantic adventures and create unforgettable experiences together
              </p>
              <Button asChild variant="outline" className="hover:scale-105 transition-romantic">
                <Link to="/date-ideas">Get Inspired</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;