// types/Recette.ts
export type Recette = {
  id: number;
  titre: string;
  description: string;
  ingredients: { nom: string; quantite: string }[];
  tempsPreparation: string;
  tempsCuisson: string;
  instructions: string[];
  imageURL: string;
  nutrition: {
    calories: string;
    proteines: string;
    carbohydrates: string;
    lipides: string;
  };
};
