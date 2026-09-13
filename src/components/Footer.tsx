
import logo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 mt-20 border-t border-purple-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
        
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="Dev Stack Logo" className="h-8 object-contain" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed pr-4">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 text-sm font-medium text-gray-700">
              <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
              <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="font-bold text-gray-900 text-xs tracking-wider mb-4 uppercase">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-gray-900 text-xs tracking-wider mb-4 uppercase">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="font-bold text-gray-900 text-xs tracking-wider mb-4 uppercase">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

       
       { /* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;