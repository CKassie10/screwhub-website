
'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-headline font-bold text-primary mb-4">Get in Touch</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  For inquiries, bulk orders, or expert screw advice, reach out to our team.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-1 space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-headline font-bold text-primary border-b pb-4">Contact Details</h2>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="bg-secondary/10 p-3 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Call or WhatsApp</p>
                        <p className="text-xl font-bold text-primary">083 460 0993</p>
                        <p className="text-sm text-secondary font-medium">Kamal - Lead Specialist</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/5 p-3 rounded-lg text-primary">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Hours</p>
                        <p className="text-sm font-medium">Mon - Fri: 8:00 AM - 5:00 PM</p>
                        <p className="text-sm text-muted-foreground">Sat: 9:00 AM - 1:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-primary text-white rounded-2xl shadow-xl">
                    <h3 className="text-xl font-headline font-bold mb-4">Bulk Orders</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                      Are you a contractor or distributor looking for large quantities? Speak to Kamal directly for special pricing and logistics support.
                    </p>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">Request Bulk Quote</Button>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <Card className="shadow-lg border-none">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-headline font-bold text-primary mb-6">Send an Inquiry</h2>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Your Name</Label>
                            <Input id="name" placeholder="John Doe" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Input id="subject" placeholder="Bulk order inquiry, Technical advice, etc." required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea id="message" placeholder="Tell us about your project requirements..." className="min-h-[150px]" required />
                        </div>
                        <Button className="w-full md:w-auto px-12 h-12 bg-primary text-white">Submit Inquiry</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
