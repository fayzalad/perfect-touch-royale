import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import type { Product, CartItem } from "@/data/products";

interface AppContextType {
  // Cart
  cart: CartItem[];
  cartCount: number;
  subtotal: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (product: Product, color: string, size: string, quantity: number) => void;
  updateCart: (index: number, delta: number) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;

  // Product modal
  selected: Product | null;
  setSelected: (product: Product | null) => void;

  // Toast
  notice: string;
  showNotice: (msg: string) => void;

  // Wishlist
  wishlist: number[];
  toggleWishlist: (id: number) => void;
  isWishlisted: (id: number) => boolean;
}

const AppContext = createContext<AppContextType | null>(null);

function loadFromStorage<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => loadFromStorage("ptr_cart", []));
  const [cartOpen, setCartOpen] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);
  const [notice, setNotice] = useState("");
  const [wishlist, setWishlist] = useState<number[]>(() => loadFromStorage("ptr_wishlist", []));

  // Persist cart
  useEffect(() => {
    localStorage.setItem("ptr_cart", JSON.stringify(cart));
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    localStorage.setItem("ptr_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const cartCount = cart.reduce((n, item) => n + item.quantity, 0);
  const subtotal = cart.reduce((n, item) => n + item.product.price * item.quantity, 0);

  const showNotice = useCallback((msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(""), 2800);
  }, []);

  const addToCart = useCallback(
    (product: Product, color: string, size: string, quantity: number) => {
      setCart((prev) => {
        const found = prev.find(
          (i) => i.product.id === product.id && i.size === size && i.color === color,
        );
        if (found)
          return prev.map((i) => (i === found ? { ...i, quantity: i.quantity + quantity } : i));
        return [...prev, { product, size, color, quantity }];
      });
      showNotice(`${product.name} added to your bag`);
      setSelected(null);
    },
    [showNotice],
  );

  const updateCart = useCallback((index: number, delta: number) => {
    setCart((prev) =>
      prev.flatMap((item, i) =>
        i === index
          ? item.quantity + delta > 0
            ? [{ ...item, quantity: item.quantity + delta }]
            : []
          : [item],
      ),
    );
  }, []);

  const removeFromCart = useCallback((index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWishlist = useCallback((id: number) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }, []);

  const isWishlisted = useCallback((id: number) => wishlist.includes(id), [wishlist]);

  return (
    <AppContext.Provider
      value={{
        cart,
        cartCount,
        subtotal,
        cartOpen,
        setCartOpen,
        addToCart,
        updateCart,
        removeFromCart,
        clearCart,
        selected,
        setSelected,
        notice,
        showNotice,
        wishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
