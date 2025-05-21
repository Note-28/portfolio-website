const Footer = () => {
  const year = 2025;
  
  return (
    <footer className="py-4 pb-6 bg-cyber-darkGray border-t border-cyber-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-center mb-4">
              <p className="text-sm text-white">
                © {year} Manan Punatu — All bugs are features. Especially the undocumented ones.
              </p>
            </div>
            
            <div className="inline-flex items-center px-2 py-0.5 bg-cyber-black text-xs text-cyber-green border border-cyber-green font-mono rounded">
              <span>Status:</span>
              <span className="inline-block w-2 h-2 rounded-full bg-cyber-green animate-pulse mx-1"></span>
              <span>Server Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;