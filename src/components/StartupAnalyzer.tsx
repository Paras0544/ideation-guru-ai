import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, TrendingUp, Users, DollarSign, Rocket, Target, BarChart3, Sparkles } from "lucide-react";

interface StartupAnalysis {
  name: string;
  tagline: string;
  elevatorPitch: string;
  targetAudience: string;
  marketAnalysis: {
    tam: string;
    sam: string;
    som: string;
  };
  businessModel: string;
  monetization: string;
  mvpFeatures: string[];
  launchCopy?: string;
}

const StartupAnalyzer = () => {
  const [idea, setIdea] = useState("");
  const [analysis, setAnalysis] = useState<StartupAnalysis | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAnalysis = async () => {
    if (!idea.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI analysis - in real app, this would call an AI API
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const sampleAnalysis: StartupAnalysis = {
      name: "IdeaForge",
      tagline: "Turn your spark into a startup empire",
      elevatorPitch: "IdeaForge is an AI-powered platform that transforms basic startup ideas into comprehensive business plans. We help entrepreneurs validate, develop, and launch their ideas with data-driven insights and actionable strategies.",
      targetAudience: "Aspiring entrepreneurs, early-stage founders, business students, and innovation teams at corporations looking to validate and develop new business concepts.",
      marketAnalysis: {
        tam: "$450B - Global entrepreneurship and business consulting market",
        sam: "$45B - AI-powered business tools and startup services",
        som: "$2.3B - Addressable market for startup ideation and validation tools"
      },
      businessModel: "Freemium SaaS with tiered subscriptions offering advanced AI analysis, market research, and business plan generation features.",
      monetization: "Monthly subscriptions ($19-99), enterprise licensing, and premium consulting services for validated ideas.",
      mvpFeatures: [
        "Basic idea input and analysis",
        "Market size estimation",
        "Competitor identification",
        "Business model suggestions",
        "Simple pitch generation",
        "PDF export functionality"
      ],
      launchCopy: "🚀 Turn Your Next Big Idea Into Reality - Get instant AI-powered business analysis, market validation, and startup roadmaps. Join 10,000+ entrepreneurs who've validated their ideas with IdeaForge. Start free today!"
    };
    
    setAnalysis(sampleAnalysis);
    setIsGenerating(false);
  };

  const improvementSuggestions = [
    "Focus on a specific niche market first",
    "Add AI-powered competitor analysis",
    "Include financial projections",
    "Consider a mobile app version",
    "Partner with accelerators and incubators"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center justify-center gap-2">
              <Sparkles className="h-8 w-8 text-primary-glow" />
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
                StartUpGPT
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Transform your idea into a comprehensive startup analysis with AI
            </p>
            <div className="mx-auto max-w-2xl">
              <Card className="bg-card/95 backdrop-blur-sm border-border/20 shadow-elegant">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Describe Your Startup Idea
                  </CardTitle>
                  <CardDescription>
                    Share your basic concept and let AI generate a complete business analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="e.g., A mobile app that connects dog owners with local pet sitters..."
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    className="min-h-[120px] bg-background border-border"
                  />
                  <Button
                    onClick={generateAnalysis}
                    disabled={!idea.trim() || isGenerating}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground"></div>
                        Analyzing Your Idea...
                      </>
                    ) : (
                      <>
                        <Rocket className="mr-2 h-4 w-4" />
                        Generate Startup Analysis
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Analysis Results */}
      {analysis && (
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-6xl space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {analysis.name}
              </h2>
              <p className="text-xl text-muted-foreground italic">"{analysis.tagline}"</p>
            </div>

            {/* Main Analysis Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Elevator Pitch */}
              <Card className="lg:col-span-2 bg-gradient-secondary border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Elevator Pitch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{analysis.elevatorPitch}</p>
                </CardContent>
              </Card>

              {/* Target Audience */}
              <Card className="bg-card border-border/20 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Target Audience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{analysis.targetAudience}</p>
                </CardContent>
              </Card>

              {/* Business Model */}
              <Card className="bg-card border-border/20 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Business Model
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{analysis.businessModel}</p>
                </CardContent>
              </Card>

              {/* Market Analysis */}
              <Card className="bg-card border-border/20 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Market Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <Badge variant="outline" className="mb-1">TAM</Badge>
                    <p className="text-sm text-foreground">{analysis.marketAnalysis.tam}</p>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">SAM</Badge>
                    <p className="text-sm text-foreground">{analysis.marketAnalysis.sam}</p>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">SOM</Badge>
                    <p className="text-sm text-foreground">{analysis.marketAnalysis.som}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Monetization */}
              <Card className="bg-card border-border/20 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Monetization Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{analysis.monetization}</p>
                </CardContent>
              </Card>

              {/* MVP Features */}
              <Card className="lg:col-span-2 bg-card border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-primary" />
                    MVP Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {analysis.mvpFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Launch Copy */}
              {analysis.launchCopy && (
                <Card className="lg:col-span-2 bg-gradient-secondary border-border/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      Product Launch Copy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed">{analysis.launchCopy}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Improvement Suggestions */}
            <Card className="bg-gradient-secondary border-border/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Want to Improve Your Idea?
                </CardTitle>
                <CardDescription>
                  Consider these suggestions to strengthen your startup concept
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {improvementSuggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-glow"></div>
                      <span className="text-foreground text-sm">{suggestion}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => {
                    setAnalysis(null);
                    setIdea("");
                  }}
                  variant="outline" 
                  className="mt-4 border-primary/20 hover:bg-primary/10"
                >
                  Start Over with New Idea
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartupAnalyzer;