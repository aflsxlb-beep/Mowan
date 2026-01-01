
import React from 'react';
import { SHOP_INFO, MENU_DATA, DRINKS, SPECIALS } from './constants';
import MenuSection from './components/MenuSection';
import ImageEditor from './components/ImageEditor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header / Logo Section */}
      <header className="py-8 text-center flex flex-col items-center">
        <div className="relative mb-4">
          <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-black rotate-12 shadow-xl overflow-hidden">
             <img src="https://picsum.photos/seed/mowan/200/200" alt="Mowan Logo" className="object-cover w-full h-full opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-black font-black text-2xl -rotate-12 select-none">Mowan</span>
             </div>
          </div>
          <div className="absolute -bottom-2 -right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            雞蛋仔專賣
          </div>
        </div>
        
        <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">
          {SHOP_INFO.name}
        </h1>
        
        <div className="space-y-1 text-sm text-gray-600 max-w-md mx-auto">
          <p className="flex items-center justify-center gap-2">
            <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">LINE</span>
            {SHOP_INFO.line}
            <span className="mx-2">|</span>
            <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">電話</span>
            {SHOP_INFO.phone}
          </p>
          <p className="font-medium">{SHOP_INFO.address}</p>
        </div>
      </header>

      {/* Hero Notice */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-10 rounded-r shadow-sm">
        <p className="text-yellow-800 text-sm font-medium leading-relaxed">
          ✨ {SHOP_INFO.note}
        </p>
      </div>

      {/* Menu Body */}
      <div className="space-y-12">
        {MENU_DATA.map((section, idx) => (
          <MenuSection key={idx} title={section.title} items={section.items} />
        ))}

        {/* Extras / Add-ons */}
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <h3 className="text-orange-800 font-bold mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            加料區
          </h3>
          <div className="flex flex-wrap gap-4 text-sm font-medium text-orange-700">
            <span>原味麻糬、黑糖麻糬、起司、黑眼豆豆 <b className="text-red-600">+10 元</b></span>
            <span>蜂蜜麻糬、煙燻起司、辣味起司 <b className="text-red-600">+15 元</b></span>
          </div>
        </div>

        {/* Special Menu Items */}
        <div className="grid md:grid-cols-2 gap-8">
          <MenuSection title="飲品系列" items={DRINKS} gridCols="grid-cols-1 sm:grid-cols-2" />
          <MenuSection title="特色美食" items={SPECIALS} gridCols="grid-cols-1" />
        </div>
      </div>

      {/* AI Image Editor Section */}
      <ImageEditor />

      {/* Footer Info */}
      <footer className="mt-20 border-t border-gray-200 pt-8 text-center text-gray-400 text-sm">
        <p>© 2024 {SHOP_INFO.name}. All Rights Reserved.</p>
        <p className="mt-2">Made for Waffle Lovers.</p>
      </footer>

      {/* Floating Action Bar (Sticky CTA) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/90 backdrop-blur shadow-2xl rounded-full border border-yellow-200 flex items-center justify-between px-6 py-3 z-50">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">預訂專線</span>
          <span className="text-lg font-black text-orange-600">{SHOP_INFO.phone}</span>
        </div>
        <div className="flex gap-2">
          <a href={`tel:${SHOP_INFO.phone}`} className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <button onClick={() => window.open('https://line.me/R/ti/p/@412nugdq')} className="bg-green-500 text-white px-4 py-2 rounded-full font-bold hover:bg-green-600 transition-colors shadow-md flex items-center gap-2">
            LINE 點餐
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
