import React, { useState } from 'react';
import { ShoppingCart, Barcode, Printer, CheckCircle, WifiOff } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  sku: string;
  price: number;
  qty: number;
}

export const POSMockup: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([
    { id: '1', name: 'Refined Cooking Oil (1L)', sku: 'SKU-7721', price: 4.5, qty: 2 },
    { id: '2', name: 'Whole Wheat Flour (5kg)', sku: 'SKU-8042', price: 6.2, qty: 1 },
    { id: '3', name: 'Premium Black Tea (250g)', sku: 'SKU-1190', price: 3.8, qty: 1 },
  ]);

  const [paymentDone, setPaymentDone] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const addItem = (item: CartItem) => {
    setPaymentDone(false);
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, item];
    });
  };

  const clearCart = () => {
    setCart([]);
    setPaymentDone(false);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setPaymentDone(true);
    setTimeout(() => {
      setCart([]);
      setPaymentDone(false);
    }, 4000);
  };

  const catalog = [
    { id: '4', name: 'Pure Basmati Rice (2kg)', sku: 'SKU-4401', price: 5.5, qty: 1 },
    { id: '5', name: 'Iodized Table Salt (1kg)', sku: 'SKU-3105', price: 1.2, qty: 1 },
    { id: '6', name: 'Cane Sugar Crystals (1kg)', sku: 'SKU-9920', price: 2.4, qty: 1 },
  ];

  return (
    <div className="bg-[#202722] text-[#F7F5EF] rounded-xl border border-[#323C35] shadow-xl overflow-hidden font-sans">
      {/* POS Top Bar */}
      <div className="bg-[#123B2A] px-4 py-3 border-b border-[#224E3A] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#D6B46A]" />
          <span className="text-xs font-bold tracking-wider uppercase text-white">
            YUSER Retail POS v1.2
          </span>
          <span className="text-[10px] bg-[#164632] text-[#D6B46A] border border-[#224E3A] px-2 py-0.5 rounded font-mono">
            Lane #01 (Terminal)
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1 text-emerald-300 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
            <WifiOff className="w-3 h-3 text-[#D6B46A]" />
            <span>Local Offline Mode Active</span>
          </span>
          <span className="text-white/60 font-mono text-[11px]">Shift: Morning #04</span>
        </div>
      </div>

      {/* POS Working Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">
        {/* Left: Quick Catalog / Quick Touch */}
        <div className="lg:col-span-7 p-4 border-b lg:border-b-0 lg:border-r border-[#323C35] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D6B46A]">
                Quick Touch SKU Catalog
              </span>
              <span className="text-[11px] text-[#9AA39D] flex items-center gap-1 font-mono">
                <Barcode className="w-3.5 h-3.5 text-[#D6B46A]" /> Scan Ready
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {catalog.map((item) => (
                <button
                  key={item.id}
                  onClick={() => addItem(item)}
                  className="bg-[#2A342D] hover:bg-[#344038] border border-[#3A473E] hover:border-[#D6B46A] p-2.5 rounded-lg text-left transition-all active:scale-[0.98] group"
                >
                  <p className="text-xs font-medium text-white group-hover:text-[#D6B46A] line-clamp-2">
                    {item.name}
                  </p>
                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#3A473E]">
                    <span className="text-[10px] text-[#9AA39D] font-mono">{item.sku}</span>
                    <span className="text-xs font-bold text-white">${item.price.toFixed(2)}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-lg bg-[#18201B] border border-[#2B352E]">
              <div className="flex items-center justify-between text-xs text-[#9AA39D] mb-1.5">
                <span>Hardware State:</span>
                <span className="text-emerald-400 font-mono">Connected</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#EFECE3]/70">
                <span>Thermal Printer: ESC/POS 80mm</span>
                <span>Drawer: Automated Kick</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#323C35] flex items-center justify-between text-[11px] text-[#9AA39D]">
            <span>Click any item tile above to simulate barcode scan and item addition.</span>
          </div>
        </div>

        {/* Right: Active Ticket / Bill */}
        <div className="lg:col-span-5 bg-[#1B221D] p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-[#323C35] mb-3">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <ShoppingCart className="w-3.5 h-3.5 text-[#D6B46A]" /> Current Sale Ticket
              </span>
              <span className="text-[11px] font-mono text-[#D6B46A]">
                {cart.length} {cart.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            {paymentDone ? (
              <div className="bg-[#123B2A] border border-[#224E3A] p-4 rounded-lg text-center my-6 animate-fade-in">
                <CheckCircle className="w-8 h-8 text-[#D6B46A] mx-auto mb-2" />
                <p className="text-sm font-bold text-white">Receipt #TRX-9821 Printed</p>
                <p className="text-xs text-[#EFECE3]/80 mt-1">Payment: Cash Tendered • Sale Saved to Local Storage</p>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-12 text-[#9AA39D] text-xs">
                Ticket is empty. Scan an item to start sale.
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-xs bg-[#222B24] p-2 rounded border border-[#2D3830]"
                  >
                    <div className="flex-1 pr-2">
                      <p className="font-medium text-white truncate">{item.name}</p>
                      <p className="text-[10px] text-[#9AA39D] font-mono">
                        ${item.price.toFixed(2)} × {item.qty}
                      </p>
                    </div>
                    <div className="text-right font-mono font-semibold text-[#D6B46A]">
                      ${(item.price * item.qty).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bill Calculation & Actions */}
          <div className="pt-3 border-t border-[#323C35] mt-3">
            <div className="space-y-1 text-xs mb-3 font-mono">
              <div className="flex justify-between text-[#9AA39D]">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#9AA39D]">
                <span>Tax (5% est.)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-white pt-1 border-t border-[#323C35]">
                <span>Total Due</span>
                <span className="text-[#D6B46A]">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={clearCart}
                disabled={cart.length === 0 || paymentDone}
                className="px-3 py-2 text-xs font-semibold rounded bg-[#2A342D] hover:bg-[#344038] text-[#EFECE3] disabled:opacity-40 transition-colors"
              >
                Clear Ticket
              </button>
              <button
                type="button"
                onClick={handleCheckout}
                disabled={cart.length === 0 || paymentDone}
                className="px-3 py-2 text-xs font-bold rounded bg-[#D6B46A] hover:bg-[#C29E52] text-[#123B2A] flex items-center justify-center gap-1.5 disabled:opacity-40 transition-colors shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" /> Complete Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
