import { useState } from "react";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Methodology", href: "#methodology" },
  { label: "Dataset", href: "#dataset" },
  { label: "Live Demo", href: "#demo" },
  { label: "Results", href: "#results" },
  { label: "Literature", href: "#literature" },
  { label: "Team", href: "#team" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-glass">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#hero" className="text-sm font-semibold text-gradient tracking-wide">
          NIDS — PBL 2026
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary/50"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-glass border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
