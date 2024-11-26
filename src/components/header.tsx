import React from "react";

import { Menu } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          TechConsult Pro
        </a>
        <nav className="hidden md:flex space-x-4">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="md:hidden">
          <Menu />
        </button>
      </div>
    </header>
  );
};

export default Header;
