import { useState } from "react";
import { Heart, Send, Plus, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface LoveLetter {
  id: string;
  title: string;
  message: string;
  date: string;
  sender: string;
}

const LoveLetters = () => {
  const { toast } = useToast();
  const [letters, setLetters] = useState<LoveLetter[]>([
    {
      id: "1",
      title: "My Heart Belongs to You",
      message: "Every day with you feels like a fairy tale. Your smile lights up my world and makes everything better. I love how you laugh at my silly jokes and how you always know exactly what to say when I need comfort. You are my sunshine on cloudy days.",
      date: "February 14, 2024",
      sender: "Your Forever Love"
    },
    {
      id: "2", 
      title: "A Promise of Forever",
      message: "I promise to love you through all seasons of life. In joy and sorrow, in laughter and tears, my heart will always find its way back to you. You are my safe haven, my greatest adventure, and my sweetest dream come true.",
      date: "February 13, 2024",
      sender: "Your Devoted Partner"
    }
  ]);
  
  const [newLetter, setNewLetter] = useState({
    title: "",
    message: "",
    sender: ""
  });
  const [isWriting, setIsWriting] = useState(false);

  const handleSubmit = () => {
    if (!newLetter.title || !newLetter.message || !newLetter.sender) {
      toast({
        title: "Oops! 💕",
        description: "Please fill in all fields to send your love letter",
        variant: "destructive"
      });
      return;
    }

    const letter: LoveLetter = {
      id: Date.now().toString(),
      ...newLetter,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };

    setLetters([letter, ...letters]);
    setNewLetter({ title: "", message: "", sender: "" });
    setIsWriting(false);
    
    toast({
      title: "Love Letter Sent! 💌",
      description: "Your heartfelt message has been added to the collection",
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="heart-float mb-6">
            <MessageCircle className="h-16 w-16 mx-auto text-primary animate-pulse-heart" />
          </div>
          <h1 className="text-5xl md:text-6xl font-romantic font-bold text-gradient-romantic mb-4">
            Love Letters
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Express your deepest feelings and share messages that touch the heart
          </p>
        </div>

        {/* Write New Letter Button */}
        {!isWriting && (
          <div className="text-center mb-12">
            <Button 
              onClick={() => setIsWriting(true)}
              size="lg"
              className="gradient-romantic hover:scale-105 transition-romantic shadow-romantic"
            >
              <Plus className="mr-2 h-5 w-5" />
              Write a Love Letter
            </Button>
          </div>
        )}

        {/* Write Letter Form */}
        {isWriting && (
          <Card className="mb-12 shadow-romantic border-0 gradient-soft">
            <CardHeader>
              <CardTitle className="text-2xl font-romantic text-gradient-romantic flex items-center">
                <Heart className="mr-2 h-6 w-6 animate-pulse-heart" />
                Write Your Heart Out
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Letter title..."
                value={newLetter.title}
                onChange={(e) => setNewLetter({ ...newLetter, title: e.target.value })}
                className="border-accent/30 focus:border-primary"
              />
              <Textarea
                placeholder="Pour your heart out here..."
                value={newLetter.message}
                onChange={(e) => setNewLetter({ ...newLetter, message: e.target.value })}
                rows={6}
                className="border-accent/30 focus:border-primary resize-none"
              />
              <Input
                placeholder="From (your name)..."
                value={newLetter.sender}
                onChange={(e) => setNewLetter({ ...newLetter, sender: e.target.value })}
                className="border-accent/30 focus:border-primary"
              />
              <div className="flex gap-4 pt-4">
                <Button 
                  onClick={handleSubmit}
                  className="gradient-romantic hover:scale-105 transition-romantic shadow-romantic"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Love Letter
                </Button>
                <Button 
                  onClick={() => setIsWriting(false)}
                  variant="outline"
                  className="hover:scale-105 transition-romantic"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Letters Collection */}
        <div className="space-y-8">
          {letters.map((letter, index) => (
            <Card 
              key={letter.id} 
              className="hover-heart shadow-soft border-0 gradient-soft animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-romantic text-gradient-romantic flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-primary" />
                  {letter.title}
                </CardTitle>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>From: {letter.sender}</span>
                  <span>{letter.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">{letter.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {letters.length === 0 && !isWriting && (
          <div className="text-center py-20">
            <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4 opacity-50" />
            <p className="text-xl text-muted-foreground">
              No love letters yet. Be the first to share your heart!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveLetters;