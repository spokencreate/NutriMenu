// src/pages/HomePage.tsx

import { Calendar } from 'lucide-react';
import Button from '../components/Button';
import MealCard from '../components/MealCard';
import type { FC } from 'react';

type Page = 'home' | 'planner' | 'recipes';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: FC<HomePageProps> = ({ setCurrentPage }) => {
  const featuredMeals = [
    {
      name: "Jollof Rice Bowl",
      description: "Smoky Nigerian jollof rice with grilled chicken and plantain.",
      calories: 450,
      protein: 35,
      ingredient: "Rice"
    },
    {
      name: "Egusi Soup & Pounded Yam",
      description: "Melon seed soup rich in greens, served with fluffy pounded yam.",
      calories: 620,
      protein: 42,
      ingredient: "Melon Seeds"
    },
    {
      name: "Waakye Power Plate",
      description: "Rice and beans cooked with sorghum leaves, served with shito sauce.",
      calories: 510,
      protein: 28,
      ingredient: "Beans/Rice"
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 to-stone-200 p-8 md:p-12 rounded-2xl shadow-xl mb-12 border-4 border-amber-200">
        <h2 className="text-5xl font-extrabold text-amber-900 mb-4">
          Nourish Your Body, Taste Africa
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl">
          Discover nutritionally balanced African and Diaspora recipes tailored for your health goals. 
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button icon={Calendar} onClick={() => setCurrentPage('planner')}>
            Start Your Planner
          </Button>
          <Button variant="secondary" onClick={() => setCurrentPage('recipes')}>
            Explore Recipes
          </Button>
        </div>
      </div>

      {/* Featured Meals Section */}
      <h3 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-300 pb-2">
        Featured High-Protein Meals
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredMeals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
