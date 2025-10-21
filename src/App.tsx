// src/App.tsx

import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import PlannerPage from './pages/PlannerPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'recipes' | 'planner'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'planner':
        return <PlannerPage />;
      case 'recipes':
        return <RecipesPage />;
      case 'home':
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <footer className="bg-gray-800 text-stone-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} NutriMenu. Powered by African Flavor and Modern Nutrition.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
