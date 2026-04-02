const Footer = () => {
  return (
    <footer className="border-t border-border py-12 mb-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-lg font-black tracking-tighter">
              NUMB<span className="text-electric">.</span>EDITION
            </span>
            <p className="text-xs text-muted-foreground mt-1 tracking-wider">
              Underground culture. Elevated.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            {["Instagram", "Soundcloud", "Twitter/X", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-electric transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-[10px] text-muted-foreground tracking-wider">
            © 2026 NUMB.EDITION. All rights reserved. Based in London, UK.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
