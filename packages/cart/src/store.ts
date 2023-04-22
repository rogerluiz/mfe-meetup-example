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

export type CartAddProducts = {
  id: number;
  quantity: number;
};

export type CartList = {
  id: number;
  products: Product[];
  total: number;
  totalProducts: number;
};

interface State {
  products: Product[] | null;
  getProduct: (limit: number) => void;
  cartList: CartList | null;
  addCart: (product: Product) => void;
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
  addCart: async (product: Product) => {
    set((state) => ({
      ...state,
      cartList: {
        id: 1,
        products: state.cartList
          ? [...state.cartList.products, product]
          : [product],
        total: state.cartList
          ? state.cartList.total + product.price
          : product.price,
        totalProducts: state.cartList ? state.cartList.products.length + 1 : 1,
      },
    }));
  },
}));

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

interface CartState {
  cartList: Carts | null;
  getCart: (id: number) => void;
  addCart: (product: CartAddProducts[]) => void;
}

export const useCartStore = create<CartState>()((set) => ({
  cartList: null,
  getCart: async (id: number) => {
    const res = await fetch(`https://dummyjson.com/carts/${id}`);

    const data: Carts = await res.json();
    console.log(data);
    set((state) => ({ ...state, cartList: data }));
  },

  addCart: async () => {},
}));
