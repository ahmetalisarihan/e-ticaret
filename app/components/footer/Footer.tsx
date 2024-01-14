import React from "react";

const Footer = () => {
  return (
    <footer className="h-34 bg-sky-500 border-t border-peach max-width">
      <div className="flex items-center justify-center mt-3 md:mt-10">Düzenlenecek...</div>

      {/* Copyright text */}
      <p className="mt-8 text-center text-grey-600 text-sm">
        Copyright © {new Date().getFullYear()} AAS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
