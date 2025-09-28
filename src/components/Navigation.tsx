import { Heart, MessageCircle, Camera, Calendar, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/love-letters", label: "Love Letters", icon: MessageCircle },
    { path: "/memories", label: "Memories", icon: Camera },
    { path: "/date-ideas", label: "Date Ideas", icon: Calendar },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 gradient-soft shadow-soft backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-romantic font-bold text-gradient-romantic hover:scale-105 transition-romantic"
          >
            <Heart className="h-8 w-8 animate-pulse-heart" />
            <span>Valentine's Magic</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-full transition-romantic hover-heart",
                  location.pathname === path 
                    ? "bg-primary text-primary-foreground shadow-romantic" 
                    : "text-foreground hover:bg-secondary"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "p-2 rounded-full transition-romantic",
                  location.pathname === path 
                    ? "bg-primary text-primary-foreground" 
                    : "text-foreground hover:bg-secondary"
                )}
                title={label}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;