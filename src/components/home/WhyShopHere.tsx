
import { ShieldCheck, Truck, Package, Layers } from 'lucide-react';

export function WhyShopHere() {
  const features = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-secondary" />,
      title: "ISO/DIN Standards",
      description: "Our range meets the strictest international quality standards for engineering and construction."
    },
    {
      icon: <Layers className="h-8 w-8 text-secondary" />,
      title: "Extensive Finishes",
      description: "Available in Z/P, Z/Y, Stainless A2/A4, Brass, Black, Dacromet, and Hot-Dip Galvanized."
    },
    {
      icon: <Package className="h-8 w-8 text-secondary" />,
      title: "Head Styles Galore",
      description: "Choose from Pan Pozi, Csk Pozi, Wafer, Hex Hd, Mushroom, and many more specialized types."
    },
    {
      icon: <Truck className="h-8 w-8 text-secondary" />,
      title: "Fast Logistics",
      description: "Optimized stock management ensuring your items are ready to ship within 24 hours."
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4">Why Choose ScrewHub?</h2>
          <p className="text-white/60">We don't just sell screws; we provide the precision-engineered components that hold your world together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="p-3 bg-white/10 rounded-lg mb-2">
                {feature.icon}
              </div>
              <h3 className="text-xl font-headline font-bold">{feature.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
