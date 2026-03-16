
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-headline font-bold tracking-tight">
              SCREW<span className="text-secondary">HUB</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium specialist in high-quality industrial fasteners. We provide a massive range of screws for every application, in-stock and ready for immediate dispatch.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-secondary transition-colors">All Screws</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><Link href="#" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-bold mb-4">Support</h3>
            <p className="text-sm text-white/60 mb-2">Need help with your order?</p>
            <p className="font-medium text-secondary">083 460 0993</p>
            <p className="text-sm text-white/60">Kamal - Lead Specialist</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} ScrewHub Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="text-xs text-white/40 px-2 py-1 border border-white/10 rounded">DIN Standards</span>
            <span className="text-xs text-white/40 px-2 py-1 border border-white/10 rounded">ISO Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
