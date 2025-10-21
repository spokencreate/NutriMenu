// src/pages/PlannerPage.tsx

import { Calendar } from 'lucide-react';
import Button from '../components/Button';

const PlannerPage = () => (
  <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
    <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-amber-700">
      <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
        <Calendar size={28} className="mr-3 text-emerald-600" />
        Weekly Meal Planner (WIP)
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        This is where users will build their weekly menu based on nutritional targets (macros, calories).
      </p>
      <div className="bg-stone-100 p-4 rounded-lg text-sm text-gray-700">
        <strong>Features Coming Soon:</strong> Drag-and-drop meal selection, Macro tracking display, and customizable serving sizes.
      </div>
      <div className="mt-6 flex justify-end">
        <Button variant="secondary" onClick={() => alert('Feature being developed...')}>
          Generate Plan
        </Button>
      </div>
    </div>
  </div>
);

export default PlannerPage;
