
import React from 'react';
import { MenuItem } from '../types';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  gridCols?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, gridCols = "grid-cols-2 md:grid-cols-3" }) => {
  return (
    <section className="mb-8">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-bold bg-yellow-400 text-black px-4 py-1 rounded-sm rotate-1 inline-block shadow-sm">
          {title}
        </h2>
        <div className="flex-grow border-b-2 border-dashed border-yellow-300 ml-4"></div>
      </div>
      <div className={`grid ${gridCols} gap-2`}>
        {items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center bg-white p-2 rounded border border-yellow-100 hover:shadow-md transition-shadow">
            <span className="text-gray-800 font-medium">{item.name}</span>
            <span className="text-orange-600 font-bold ml-2">${item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
