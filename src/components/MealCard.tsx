// src/components/MealCard.tsx

import type { FC } from 'react';
import { Zap } from 'lucide-react';
import Button from './Button';

interface Meal {
  name: string;
  description: string;
  calories: number;
  protein: number;
  ingredient: string;
}

interface MealCardProps {
  meal: Meal;
}

const MealCard: FC<MealCardProps> = ({ meal }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
    <div className="p-4 bg-emerald-100">
      <Zap size={20} className="inline mr-2 text-amber-700" />
      <span className="text-sm font-medium text-gray-700">
        {meal.calories} Cal | {meal.protein}g P
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{meal.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{meal.description}</p>
      <ul className="text-xs text-gray-500 space-y-1">
        <li>- Main Ingredient: {meal.ingredient}</li>
        <li>- Cuisine: African Fusion</li>
      </ul>
      <Button
        variant="primary"
        className="mt-4 w-full"
        onClick={() => alert(`Viewing details for: ${meal.name}`)}
      >
        View Details
      </Button>
    </div>
  </div>
);

export default MealCard;
