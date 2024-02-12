// pages/recettes/[id].tsx
import fs from 'fs';
import path from 'path';
import { GetStaticPaths, GetStaticProps } from 'next';

// Assurez-vous que le type Recette correspond à la structure de votre JSON
import { Recette } from '../../type/Recettes';

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params;
  if (!params) {
    return { notFound: true };
  }

  const filePath = path.join(process.cwd(), "public", "recipe.json");
  const jsonData = fs.readFileSync(filePath);
  const recettes = JSON.parse(jsonData.toString());

  const recette = recettes.find((r: Recette) => r.id.toString() === params.id);

  if (!recette) {
    return { notFound: true };
  }

  return {
    props: {
      recette,
    },
  };
};

// Ajoutez également getStaticPaths pour définir les chemins à générer
export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'public', 'recipe.json');
  const jsonData = fs.readFileSync(filePath);
  const recettes = JSON.parse(jsonData.toString());

  const paths = recettes.map((recette: Recette) => ({
    params: { id: recette.id.toString() },
  }));

  return { paths, fallback: false };
};

// Le composant pour afficher les détails de la recette
const RecetteDetails = ({ recette }: { recette: Recette }) => {
  return (
    <div>
      <h1>{recette.titre}</h1>
      {/* Affichez les autres propriétés de la recette comme vous le souhaitez */}
    </div>
  );
};

export default RecetteDetails;
