
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Bot, Sparkles, Loader2, CheckCircle2, Info } from 'lucide-react';
import { screwSelectorAssistant, ScrewSelectorAssistantOutput } from '@/ai/flows/screw-selector-assistant';

export function ScrewAssistant() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScrewSelectorAssistantOutput | null>(null);
  const [form, setForm] = useState({
    applicationDescription: '',
    materialType: '',
    environmentalConditions: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await screwSelectorAssistant(form);
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-secondary p-2 rounded-lg">
              <Bot className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary">AI Screw Selector</h2>
              <p className="text-muted-foreground">Not sure which screw you need? Let our expert AI guide you.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card className="shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-xl">Project Details</CardTitle>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="app">Application Description</Label>
                    <Textarea 
                      id="app" 
                      placeholder="e.g., Mounting a heavy wooden cabinet to a brick wall..."
                      required
                      value={form.applicationDescription}
                      onChange={e => setForm({...form, applicationDescription: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="materials">Materials to fasten</Label>
                    <Input 
                      id="materials" 
                      placeholder="e.g., Wood to Masonry"
                      required
                      value={form.materialType}
                      onChange={e => setForm({...form, materialType: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="env">Environmental Conditions</Label>
                    <Input 
                      id="env" 
                      placeholder="e.g., Indoor, humid kitchen environment"
                      required
                      value={form.environmentalConditions}
                      onChange={e => setForm({...form, environmentalConditions: e.target.value})}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-white"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing Requirements...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Find My Screw
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>

            {result ? (
              <Card className="shadow-xl border-secondary bg-white animate-in fade-in slide-in-from-right-4 duration-500">
                <CardHeader className="bg-secondary/5 border-b">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-secondary flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Recommended Solution
                    </CardTitle>
                  </div>
                  <h3 className="text-2xl font-bold pt-2">{result.recommendedScrewType}</h3>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Expert Reasoning
                    </h4>
                    <p className="text-sm leading-relaxed">{result.reasoning}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Material / Finish</p>
                      <p className="font-bold text-sm">{result.materialFinishSuggestion}</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Head / Drive</p>
                      <p className="font-bold text-sm">{result.headDriveSuggestion}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Key Characteristics</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {result.keyCharacteristics.map((char, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {result.additionalTips && (
                    <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                      <p className="text-xs font-bold text-accent uppercase mb-1">Pro Tip</p>
                      <p className="text-sm italic">{result.additionalTips}</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="pt-0 pb-6 flex flex-col gap-3">
                  <Button className="w-full bg-primary text-white">
                    Browse Related Screws
                  </Button>
                  <Button variant="ghost" className="w-full text-xs" onClick={() => setResult(null)}>
                    Reset Selection
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-xl opacity-40">
                <Bot className="h-16 w-16 mb-4" />
                <p className="text-center font-medium">Complete the form to receive an AI-powered recommendation based on your specific needs.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
