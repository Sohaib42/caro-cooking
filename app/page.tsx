import Image from "next/image";
import Navbar from "../components/Navbar";
import RecetteCard from "../components/RecetteCard";
import caro from '../public/caro-cook-white.png';
import recipeData from '../public/recipe.json'; // Importez vos données de recettes
import Footer from "@/components/Footer";
export default function Home() {
  const { recettes } = recipeData;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="my-12 mx-auto">
        <Image 
          src={caro} 
          alt="Logo" 
          width={200}
          height={200}
          priority
        />
      </div>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Des recettes pour Caro🐢</h1>
        <p>Voici les armes à ta disposition pour une meilleure santé 💖 💖 💖 </p>
        <p>Cette liste grandira avec le temps : </p>
        {/* Afficher les recettes ici */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recettes.map(recette => (
            <RecetteCard key={recette.id} recette={recette} />
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
