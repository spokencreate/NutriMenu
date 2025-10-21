// src/pages/RecipesPage.tsx

import { Utensils } from 'lucide-react';
import Button from '../components/Button';

const RecipesPage = () => (
  <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
    <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-emerald-700">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
        <Utensils size={28} className="mr-3 text-amber-600" />
        African Recipes Library (WIP)
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        A searchable collection of African-themed recipes with detailed nutritional breakdowns.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['Ghana', 'Nigeria', 'Kenya', 'Ethiopia', 'Morocco', 'South Africa'].map((country) => (
          <div
            key={country}
            className="p-3 bg-emerald-50 text-emerald-800 font-semibold rounded-lg text-center hover:bg-emerald-100 transition duration-150"
          >
            {country}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <Button onClick={() => alert('Search functionality coming soon!')}>
          Search Recipes
        </Button>
      </div>
    </div>
  </div>
);

export default RecipesPage;
