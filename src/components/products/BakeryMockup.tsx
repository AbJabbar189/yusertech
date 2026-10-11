import React, { useState } from 'react';
import { Cake, Calendar, Clock, Check } from 'lucide-react';

export const BakeryMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'counter' | 'wastage'>('orders');

  const upcomingCakeOrders = [
    {
      id: 'CAKE-108',
      customer: 'Siddiqui Family',
      cakeType: 'Double Layer Belgian Chocolate (2.5 kg)',
      pickupDate: 'Tomorrow, 4:30 PM',
      inscription: '"Happy 10th Birthday Rayan"',
      deposit: '$30.00',
      balanceDue: '$25.00',
      status: 'In Kitchen Queue',
    },
    {
      id: 'CAKE-109',
      customer: 'Tariq Al-Mansoor',
      cakeType: 'Red Velvet Fondant Floral (3.0 kg)',
      pickupDate: 'Oct 14, 2:00 PM',
      inscription: '"Congratulations Ayla & Farhan"',
      deposit: '$45.00',
      balanceDue: '$40.00',
      status: 'Design Confirmed',
    },
  ];

  return (
    <div className="bg-[#202722] text-[#F7F5EF] rounded-xl border border-[#323C35] shadow-xl overflow-hidden font-sans">
      {/* Header Bar */}
      <div className="bg-[#123B2A] px-4 py-3 border-b border-[#224E3A] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Cake className="w-4 h-4 text-[#D6B46A]" />
          <span className="text-xs font-bold tracking-wider uppercase text-white">
            YUSER Bakery Manager
          </span>
          <span className="text-[10px] bg-[#164632] text-[#D6B46A] border border-[#224E3A] px-2 py-0.5 rounded font-mono">
            Kitchen & Front Terminal
          </span>
        </div>
        <div className="flex items-center gap-2">
          {(['orders', 'counter', 'wastage'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2.5 py-1 text-xs rounded font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-[#D6B46A] text-[#123B2A] font-bold'
                  : 'bg-[#164632] text-[#EFECE3]/80 hover:text-white'
              }`}
            >
              {tab === 'orders'
                ? 'Advance Cake Bookings'
                : tab === 'counter'
                ? 'Fresh Pastry Counter'
                : 'Daily Wastage Log'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 min-h-[380px]">
        {activeTab === 'orders' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-[#9AA39D] pb-1 border-b border-[#323C35]">
              <span>Active Advance Cake Production Queue</span>
              <span className="font-mono text-[#D6B46A]">2 Custom Orders Pending</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {upcomingCakeOrders.map((order) => (
                <div
                  key={order.id}
                  className="bg-[#2A342D] border border-[#3A473E] rounded-lg p-3.5 space-y-2.5"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] font-mono bg-[#18201B] px-2 py-0.5 rounded text-[#D6B46A]">
                        {order.id}
                      </span>
                      <h4 className="text-sm font-semibold text-white mt-1">{order.customer}</h4>
                    </div>
                    <span className="text-[10px] font-semibold bg-[#123B2A] text-emerald-300 border border-[#224E3A] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> {order.status}
                    </span>
                  </div>

                  <div className="text-xs space-y-1 text-[#EFECE3]/90 bg-[#222B24] p-2.5 rounded border border-[#2D3830]">
                    <p className="font-medium text-white">{order.cakeType}</p>
                    <p className="text-[11px] text-[#D6B46A] italic">{order.inscription}</p>
                    <p className="text-[11px] text-[#9AA39D] flex items-center gap-1 pt-0.5">
                      <Calendar className="w-3 h-3 text-[#D6B46A]" /> Due: {order.pickupDate}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-xs">
                    <span className="text-[#9AA39D]">
                      Deposit: <strong className="text-white">{order.deposit}</strong>
                    </span>
                    <span className="text-[#9AA39D]">
                      Due at Pickup: <strong className="text-[#D6B46A]">{order.balanceDue}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#18201B] rounded-lg border border-[#2B352E] flex items-center justify-between text-xs text-[#9AA39D]">
              <span>Need kitchen slips printed?</span>
              <span className="text-white font-mono flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-[#D6B46A]" /> Auto-prints 3-inch Baker Slip
              </span>
            </div>
          </div>
        )}

        {activeTab === 'counter' && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { name: 'Sourdough Country Loaf', price: '$4.80', stock: '14 left' },
                { name: 'Butter Croissant (French)', price: '$2.75', stock: '22 left' },
                { name: 'Pistachio Baklava Box (250g)', price: '$7.50', stock: '9 left' },
                { name: 'Dark Chocolate Éclair', price: '$3.50', stock: '18 left' },
                { name: 'Cardamom Milk Rusk (Pack)', price: '$3.20', stock: '35 left' },
                { name: 'Strawberry Tartlet', price: '$4.00', stock: '8 left' },
                { name: 'Artisan Baguette (Crusty)', price: '$2.90', stock: '16 left' },
                { name: 'Espresso Double Shot', price: '$2.50', stock: 'Ready' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#2A342D] border border-[#3A473E] p-2.5 rounded-lg text-left"
                >
                  <p className="text-xs font-medium text-white line-clamp-1">{item.name}</p>
                  <p className="text-sm font-bold text-[#D6B46A] mt-1">{item.price}</p>
                  <span className="text-[10px] text-[#9AA39D]">{item.stock}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#9AA39D] text-center pt-2">
              Fast touch interface optimized for peak morning and holiday queues.
            </p>
          </div>
        )}

        {activeTab === 'wastage' && (
          <div className="space-y-3">
            <div className="bg-[#2A342D] p-3 rounded-lg border border-[#3A473E] space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white">Daily Leftover & Spoilage Auditing</span>
                <span className="text-[10px] font-mono text-amber-300">Shift Night Close</span>
              </div>
              <p className="text-xs text-[#9AA39D]">
                Records evening unsold perishable items to adjust next day dough kneading and flour preparation quotas.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-xs">
                <div className="bg-[#18201B] p-2 rounded text-center">
                  <span className="text-[10px] text-[#9AA39D] block">Unsold Loaves</span>
                  <strong className="text-white text-sm">4 units</strong>
                </div>
                <div className="bg-[#18201B] p-2 rounded text-center">
                  <span className="text-[10px] text-[#9AA39D] block">Pastry Spoilage</span>
                  <strong className="text-white text-sm">2 units</strong>
                </div>
                <div className="bg-[#18201B] p-2 rounded text-center">
                  <span className="text-[10px] text-[#9AA39D] block">Ingredient Variance</span>
                  <strong className="text-emerald-400 text-sm">-1.2%</strong>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
