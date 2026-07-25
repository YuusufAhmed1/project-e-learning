import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus, FaArrowRight } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal, getCartCount } = useCart();

  const subtotal = getCartTotal();
  // Simple discount logic: if total > 200, give 10% off
  const discount = subtotal > 200 ? subtotal * 0.1 : 0; 
  const tax = (subtotal - discount) * 0.08; // 8% tax
  const total = subtotal - discount + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-light-gray">
        <div className="bg-white p-12 rounded-3xl shadow-lg text-center max-w-md w-full mx-4">
          <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-6xl text-gray-300">🛒</span>
          </div>
          <h2 className="text-2xl font-bold text-dark-text mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added any courses to your cart yet. Discover your next skill today!
          </p>
          <Link 
            to="/products"
            className="inline-block w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold hover:shadow-lg transition-all"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light-gray min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold text-dark-text mb-8">Shopping Cart ({getCartCount()} items)</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full md:w-32 h-32 md:h-24 object-cover rounded-xl"
                />
                
                <div className="flex-grow text-center md:text-left">
                  <Link to={`/product/${item.slug}`} className="hover:text-primary transition-colors">
                    <h3 className="font-bold text-lg text-dark-text line-clamp-1">{item.title}</h3>
                  </Link>
                  <p className="text-sm text-gray-500 mb-2">By {item.instructor.name}</p>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <span className="font-bold text-lg text-primary">${item.discountPrice || item.price}</span>
                    {item.discountPrice && <span className="text-sm text-gray-400 line-through">${item.price}</span>}
                  </div>
                </div>

                <div className="flex flex-row items-center gap-6">
                  {/* Quantity Controls */}
                  <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-3 text-gray-500 hover:text-primary transition-colors disabled:opacity-50"
                      disabled={item.quantity <= 1}
                    >
                      <FaMinus size={12} />
                    </button>
                    <span className="w-8 text-center font-medium text-dark-text">{item.quantity}</span>
                    <button 
                      onClick={() => increaseQuantity(item.id)}
                      className="p-3 text-gray-500 hover:text-primary transition-colors"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>
                  
                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                    title="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-dark-text mb-6">Order Summary</h3>
              
              <div className="space-y-4 text-gray-600 border-b border-gray-100 pb-6 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-dark-text">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-500">
                    <span>Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="font-medium text-dark-text">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-lg font-bold text-dark-text">Total</span>
                <span className="text-3xl font-bold text-primary">${total.toFixed(2)}</span>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mb-4">
                Proceed to Checkout <FaArrowRight />
              </button>
              
              <Link 
                to="/courses" 
                className="w-full py-4 bg-gray-50 text-gray-600 rounded-xl font-medium text-center hover:bg-gray-100 transition-colors block"
              >
                Back to Courses
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
