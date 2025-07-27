import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Users, DollarSign, Rocket, Target, BarChart3, Lightbulb, Zap, Globe } from "lucide-react";

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
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const sampleAnalysis: StartupAnalysis = {
      name: "VentureCore",
      tagline: "Precision-engineered startup intelligence",
      elevatorPitch: "VentureCore leverages advanced AI algorithms to transform raw business concepts into data-driven startup strategies. Our platform conducts comprehensive market analysis, competitive intelligence, and strategic planning to maximize venture success probability through quantifiable insights.",
      targetAudience: "Serial entrepreneurs, venture capital firms, corporate innovation labs, and ambitious business professionals seeking systematic approaches to startup development and market validation.",
      marketAnalysis: {
        tam: "$780B - Global business intelligence and analytics market",
        sam: "$85B - AI-powered enterprise decision tools and startup services",
        som: "$4.2B - Addressable market for startup intelligence and validation platforms"
      },
      businessModel: "Enterprise SaaS platform with tiered subscriptions, featuring advanced AI analytics, real-time market intelligence, and strategic consultation services for high-growth ventures.",
      monetization: "Subscription tiers ($49-299/month), enterprise licensing ($50K+/year), and premium strategy consulting services for validated opportunities.",
      mvpFeatures: [
        "AI-powered market analysis engine",
        "Competitive intelligence dashboard",
        "Financial projection modeling",
        "Risk assessment algorithms",
        "Strategic roadmap generation",
        "Investor pitch optimization"
      ],
      launchCopy: "⚡ Transform Ideas Into Empire-Building Strategies - Deploy military-grade business intelligence for your startup. VentureCore's AI analyzes 500M+ data points to deliver precision market insights. Join elite entrepreneurs building the future. Deploy now."
    };
    
    setAnalysis(sampleAnalysis);
    setIsGenerating(false);
  };

  const improvementSuggestions = [
    "Implement blockchain-based IP protection",
    "Integrate predictive market modeling",
    "Add real-time competitor tracking",
    "Develop mobile command center",
    "Create venture capital network integration"
  ];

  return (
    <div className="min-h-screen bg-background font-inter antialiased">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-muted to-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(210_8%_20%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(210_8%_20%/0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />
        <div className="absolute inset-0 bg-gradient-accent" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-20">
          <div className="mx-auto max-w-5xl text-center">
            {/* Floating Logo */}
            <div className="mb-8 flex items-center justify-center gap-3 animate-float">
              <div className="relative">
                <Brain className="h-12 w-12 text-primary animate-glow-pulse" />
                <div className="absolute inset-0 h-12 w-12 bg-primary/20 rounded-full blur-xl" />
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground">
                StartUp<span className="text-primary">GPT</span>
              </h1>
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Military-grade AI intelligence for strategic startup development
              </p>
              <div className="flex items-center justify-center gap-6 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Real-time Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span>Global Intelligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  <span>Precision Targeting</span>
                </div>
              </div>
            </div>

            {/* Input Section */}
            <div className="mx-auto max-w-3xl mt-12 animate-slide-up">
              <Card className="bg-gradient-card backdrop-blur-sm border border-border/40 shadow-sharp hover:shadow-intense transition-all duration-500">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl font-bold">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    Strategic Concept Input
                  </CardTitle>
                  <CardDescription className="text-base font-light">
                    Deploy your business concept for comprehensive strategic analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Textarea
                    placeholder="Input your business concept for strategic analysis..."
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    className="min-h-[140px] bg-input/50 border-border/60 text-foreground placeholder:text-muted-foreground/60 font-light text-base resize-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                  <Button
                    onClick={generateAnalysis}
                    disabled={!idea.trim() || isGenerating}
                    className="w-full bg-gradient-primary hover:shadow-glow text-primary-foreground font-semibold text-base h-14 transition-all duration-400 hover:scale-[1.02] active:scale-[0.98]"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <div className="mr-3 h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                        Processing Strategic Analysis...
                      </>
                    ) : (
                      <>
                        <Brain className="mr-3 h-5 w-5" />
                        Execute Strategic Analysis
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
        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="mx-auto max-w-7xl space-y-10">
            {/* Header */}
            <div className="text-center space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                  {analysis.name}
                </h2>
                <p className="text-xl font-light text-primary italic tracking-wide">
                  {analysis.tagline}
                </p>
              </div>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            </div>

            {/* Strategic Overview */}
            <Card className="bg-gradient-card border border-border/40 shadow-sharp hover:shadow-intense transition-all duration-500 animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  Strategic Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed font-light text-lg">{analysis.elevatorPitch}</p>
              </CardContent>
            </Card>

            {/* Intelligence Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Target Intelligence */}
              <Card className="bg-gradient-card border border-border/40 shadow-sharp hover:shadow-intense transition-all duration-500 group hover:scale-[1.02] animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-bold">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    Target Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-light leading-relaxed">{analysis.targetAudience}</p>
                </CardContent>
              </Card>

              {/* Business Architecture */}
              <Card className="bg-gradient-card border border-border/40 shadow-sharp hover:shadow-intense transition-all duration-500 group hover:scale-[1.02] animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-bold">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    Business Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-light leading-relaxed">{analysis.businessModel}</p>
                </CardContent>
              </Card>

              {/* Market Intelligence */}
              <Card className="bg-gradient-card border border-border/40 shadow-sharp hover:shadow-intense transition-all duration-500 group hover:scale-[1.02] animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-bold">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    Market Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(analysis.marketAnalysis).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <Badge variant="outline" className="border-primary/30 text-primary font-medium tracking-wider">
                        {key.toUpperCase()}
                      </Badge>
                      <p className="text-sm text-foreground font-light pl-2 border-l-2 border-primary/20">{value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Revenue Architecture */}
              <Card className="bg-gradient-card border border-border/40 shadow-sharp hover:shadow-intense transition-all duration-500 group hover:scale-[1.02] animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-bold">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    Revenue Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-light leading-relaxed">{analysis.monetization}</p>
                </CardContent>
              </Card>
            </div>

            {/* MVP Strategic Components */}
            <Card className="bg-gradient-card border border-border/40 shadow-sharp hover:shadow-intense transition-all duration-500 animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  MVP Strategic Components
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analysis.mvpFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Launch Strategy */}
            {analysis.launchCopy && (
              <Card className="bg-gradient-secondary border border-primary/20 shadow-sharp hover:shadow-glow transition-all duration-500 animate-scale-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    Launch Strategy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed font-light text-lg">{analysis.launchCopy}</p>
                </CardContent>
              </Card>
            )}

            {/* Strategic Enhancements */}
            <Card className="bg-gradient-card border border-border/40 shadow-sharp hover:shadow-intense transition-all duration-500 animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  Strategic Enhancement Protocols
                </CardTitle>
                <CardDescription className="text-base font-light">
                  Advanced optimization strategies for competitive dominance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {improvementSuggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-accent/20 hover:bg-accent/40 transition-colors group">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary-glow group-hover:bg-primary transition-colors" />
                      <span className="text-foreground font-light">{suggestion}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button 
                    onClick={() => {
                      setAnalysis(null);
                      setIdea("");
                    }}
                    variant="outline" 
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  >
                    Initialize New Analysis
                  </Button>
                  <Button 
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                  >
                    Deploy Strategy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartupAnalyzer;