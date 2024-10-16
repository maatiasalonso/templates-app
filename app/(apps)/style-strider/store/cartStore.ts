import { create } from 'zustand';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  colors: string[];
  sizes: string[];
  size: string;
  quantity: number;
}

export interface CartState {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string, size: string) => void;
  clearCart: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCartStore = create<CartState>((set: any) => ({
  items: [],
  addToCart: (product: Product) =>
    set((state: CartState) => ({
      items: [...state.items, product],
    })),
  removeFromCart: (id: string, size: string) =>
    set((state: CartState) => ({
      items: state.items.filter(
        (item: Product) => !(item.id === id && item.size === size)
      ),
    })),
  clearCart: () => set({ items: [] }),
  increaseQuantity: (id: string) =>
    set((state: CartState) => ({
      items: state.items.map((item: Product) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQuantity: (id: string) =>
    set((state: CartState) => ({
      items: state.items.map((item: Product) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ),
    })),
}));
