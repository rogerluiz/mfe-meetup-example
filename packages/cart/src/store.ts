import { create } from 'zustand';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ProductResponse = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

export type CartsProducts = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
};

export type Carts = {
  id: number;
  products: CartsProducts[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type CartResponse = {
  limit: number;
  carts: Carts[];
  skip: number;
  total: number;
};

export type CartAddProducts = {
  id: number;
  quantity: number;
};

interface State {
  products: Product[] | null;
  getProduct: (limit: number) => void;
  cartList: Carts[] | null;
  getCart: (idUser: number) => void;
  addCart: (idUser: number, products: CartAddProducts[]) => void;
}

export const useStore = create<State>()((set) => ({
  products: null,
  getProduct: async (limit: number) => {
    const res = await fetch(
      `https://dummyjson.com/products/category/mens-shoes?limit=${limit}`,
    );

    const data: ProductResponse = await res.json();

    set((state) => ({ ...state, products: data.products }));
  },
  cartList: null,
  getCart: async (idUser: number) => {
    const res = await fetch(`https://dummyjson.com/carts/user/${idUser}`);

    const data: CartResponse = await res.json();

    set((state) => ({ ...state, cartList: data.carts }));
  },
  addCart: async (idUser: number, products: CartAddProducts[]) => {
    const res = await fetch('https://dummyjson.com/carts/add/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: idUser,
        products,
      }),
    });

    const data: CartResponse = await res.json();

    set((state) => ({
      ...state,
      cartList: [...(state.cartList as any), data.carts],
    }));
  },
}));
