
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Bot, Sparkles, Loader2, CheckCircle2, ArrowRight, ChevronLeft, Hexagon } from 'lucide-react';
import { screwSelectorAssistant, ScrewSelectorAssistantOutput } from '@/ai/flows/screw-selector-assistant';
import { motion, AnimatePresence } from 'framer-motion';

export function ScrewAssistant() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScrewSelectorAssistantOutput | null>(null);
  const [form, setForm] = useState({
    applicationDescription: '',
    materialType: '',
    environmentalConditions: '',
  });

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const output = await screwSelectorAssistant(form);
      setResult(output);
      setStep(4);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="bg-secondary p-3 rounded-2xl w-fit shadow-2xl shadow-secondary/20">
                  <Bot className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-5xl lg:text-7xl font-headline font-bold text-white tracking-tighter">
                  Intelligent <span className="text-secondary italic">Selection.</span>
                </h2>
                <p className="text-white/60 text-xl leading-relaxed">
                  Our neural-trained assistant analyzes your project geometry and environmental loads to find the mathematically perfect fastener.
                </p>
              </motion.div>

              <div className="flex gap-4">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`h-1.5 flex-grow rounded-full transition-all duration-500 ${step >= s ? 'bg-secondary' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="glass-dark border-white/5 rounded-[40px] overflow-hidden">
                    <CardContent className="p-10">
                      {step === 1 && (
                        <div className="space-y-6">
                          <Label className="text-white/60 text-xs font-bold uppercase tracking-widest">Step 01 / Application</Label>
                          <h3 className="text-2xl font-bold text-white">What are you building?</h3>
                          <Textarea 
                            placeholder="Describe your assembly context..."
                            className="bg-white/5 border-white/10 text-white min-h-[150px] rounded-2xl text-lg p-6 focus:bg-white/10 transition-all"
                            value={form.applicationDescription}
                            onChange={e => setForm({...form, applicationDescription: e.target.value})}
                          />
                          <Button 
                            onClick={handleNext} 
                            disabled={!form.applicationDescription}
                            className="w-full bg-secondary h-14 rounded-2xl text-lg font-bold group"
                          >
                            Continue <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-6">
                          <Label className="text-white/60 text-xs font-bold uppercase tracking-widest">Step 02 / Materials</Label>
                          <h3 className="text-2xl font-bold text-white">Substrate Composition</h3>
                          <div className="space-y-4">
                            <Input 
                              placeholder="e.g., Cold-rolled steel to oak"
                              className="bg-white/5 border-white/10 text-white h-14 rounded-2xl px-6 focus:bg-white/10"
                              value={form.materialType}
                              onChange={e => setForm({...form, materialType: e.target.value})}
                            />
                            <p className="text-white/40 text-xs">Specify both the fix-through and receiving materials.</p>
                          </div>
                          <div className="flex gap-3 pt-4">
                            <Button variant="ghost" onClick={handleBack} className="text-white/60 hover:text-white"><ChevronLeft /></Button>
                            <Button 
                              onClick={handleNext} 
                              disabled={!form.materialType}
                              className="flex-grow bg-secondary h-14 rounded-2xl text-lg font-bold"
                            >
                              Final Step
                            </Button>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-6">
                          <Label className="text-white/60 text-xs font-bold uppercase tracking-widest">Step 03 / Environment</Label>
                          <h3 className="text-2xl font-bold text-white">Ambient Conditions</h3>
                          <Input 
                            placeholder="e.g., Coastal marine (high salinity)"
                            className="bg-white/5 border-white/10 text-white h-14 rounded-2xl px-6 focus:bg-white/10"
                            value={form.environmentalConditions}
                            onChange={e => setForm({...form, environmentalConditions: e.target.value})}
                          />
                          <Button 
                            onClick={handleSubmit} 
                            disabled={loading || !form.environmentalConditions}
                            className="w-full bg-secondary h-14 rounded-2xl text-lg font-bold shadow-2xl shadow-secondary/20"
                          >
                            {loading ? <Loader2 className="animate-spin" /> : <><Sparkles className="mr-2 h-5 w-5" /> Calculate Selection</>}
                          </Button>
                        </div>
                      )}

                      {step === 4 && result && (
                        <motion.div 
                          initial={{ scale: 0.9, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="space-y-8"
                        >
                          <div className="text-center space-y-4">
                            <div className="mx-auto w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center border border-secondary/20">
                              <CheckCircle2 className="h-10 w-10 text-secondary" />
                            </div>
                            <h3 className="text-3xl font-headline font-bold text-white tracking-tighter">{result.recommendedScrewType}</h3>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                              <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Metallurgy</p>
                              <p className="text-secondary font-bold text-sm">{result.materialFinishSuggestion}</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                              <p className="text-[10px] font-bold text-white/40 uppercase mb-1">Architecture</p>
                              <p className="text-secondary font-bold text-sm">{result.headDriveSuggestion}</p>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <p className="text-white/60 text-sm italic leading-relaxed">"{result.reasoning}"</p>
                          </div>

                          <div className="flex flex-col gap-3">
                            <Link href="/shop" className="w-full">
                              <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-2xl h-14 font-bold">
                                Order Specs Now
                              </Button>
                            </Link>
                            <Button variant="ghost" className="text-white/40 text-xs" onClick={() => { setStep(1); setResult(null); }}>
                              Restart Calculation
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
