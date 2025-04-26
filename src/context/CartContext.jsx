
// import { createContext, useContext, useState, useEffect } from 'react';
// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = localStorage.getItem('cartItems');
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item._id === product._id);
//       if (existingItem) {
//         return prevItems.map(item =>
//           item._id === product._id
//             ? { ...item, quantity: (item.quantity || 1) + 1 }
//             : item
//         );
//       } else {
//         return [...prevItems, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
//   };

//   const increaseQuantity = (productId) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQuantity = (productId) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item._id === productId
//           ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
//           : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loadingCart, setLoadingCart] = useState(true); // ✅ new state here

  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setLoadingCart(false); // ✅ mark loading as done
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item._id === product._id);
      if (existingItem) {
        return prevItems.map(item =>
          item._id === product._id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, loadingCart }} // ✅ pass loadingCart here too
    >
      {children}
    </CartContext.Provider>
  );
};
