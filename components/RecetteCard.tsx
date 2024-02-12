// components/RecetteCard.tsx
'use client'
import React, { useState } from 'react';
import { Recette } from '../type/Recettes'; // Assurez-vous que le chemin d'importation est correct.
import Link from 'next/link';

type RecetteCardProps = {
  recette: Recette;
};

const RecetteCard: React.FC<RecetteCardProps> = ({ recette }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="recette-card bg-white shadow-md rounded-lg overflow-hidden">
      <img src={recette.imageURL} alt={recette.titre} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recette.titre}</h2>
        <p className="text-gray-700 text-base mb-4">{recette.description}</p>
        <button onClick={toggleDetails} className="text-blue-500 hover:underline focus:outline-none">
          {showDetails ? 'Masquer les détails' : 'Voir plus'}
        </button>
        {showDetails && (
          <>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Ingrédients:</h3>
              <ul className="list-disc list-inside">
                {recette.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.nom}: {ingredient.quantite}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Instructions:</h3>
              <ol className="list-decimal list-inside">
                {recette.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Nutrition:</h3>
              <p>Calories: {recette.nutrition.calories}</p>
              <p>Protéines: {recette.nutrition.proteines}</p>
              <p>Carbohydrates: {recette.nutrition.carbohydrates}</p>
              <p>Lipides: {recette.nutrition.lipides}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Temps de préparation:</h3>
              <p>{recette.tempsPreparation}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Temps de cuisson:</h3>
              <p>{recette.tempsCuisson}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecetteCard;
