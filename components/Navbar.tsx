// components/Navbar.tsx
'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importer Image de Next.js
import React from 'react';
import logo from '../public/caro-cook.png'; // Assurez-vous de remplacer par le chemin d'accès réel à votre image de logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-green-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          {/* Lien vers la page d'accueil avec le logo */}
          <Link href="/" passHref className="flex items-center">
            
              <Image 
                src={logo} 
                alt="Logo Recettes Faciles" 
                width={50} // La largeur de votre logo
                height={50} // La hauteur de votre logo
              />
              <span className="ml-2 hover:text-green-700 transition duration-300 ease-in-out text-center">La cuisine à Caro&#x1F422;</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {/* Icone de menu (burger) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
        <div className={`flex flex-col md:flex-row gap-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/about" passHref  className="hover:text-green-700 transition duration-300 ease-in-out m-1">
            À Propos
          </Link>
          <Link href="/contact" passHref className="hover:text-green-700 transition duration-300 ease-in-out m-1">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
