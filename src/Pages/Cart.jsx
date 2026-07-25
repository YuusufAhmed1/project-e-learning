import { Link } from "react-router-dom";
import { FaTrash, FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Reducer";

const Cart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItem
  );


  const getCartCount = () => {
    return cartItems.length;
  };


  const getCartTotal = () => {

    return cartItems.reduce(
      (total, item) => 
        total + Number(item.discountPrice || item.price),
      0
    );

  };


  const subtotal = getCartTotal();

  const discount = subtotal > 200 ? subtotal * 0.1 : 0;

  const tax = (subtotal - discount) * 0.08;

  const total = subtotal - discount + tax;



  if(cartItems.length === 0){

    return (

      <div className="
      min-h-[70vh]
      flex
      flex-col
      items-center
      justify-center
      bg-gray-100
      ">

        <div className="
        bg-white
        p-12
        rounded-3xl
        shadow-lg
        text-center
        max-w-md
        w-full
        mx-4
        ">


          <div className="
          w-32
          h-32
          bg-gray-50
          rounded-full
          flex
          items-center
          justify-center
          mx-auto
          mb-6
          ">

            <span className="text-6xl text-gray-300">
              🛒
            </span>

          </div>


          <h2 className="
          text-2xl
          font-bold
          mb-3
          ">
            Your cart is empty
          </h2>


          <p className="
          text-gray-500
          mb-8
          ">
            Looks like you haven't added any courses yet.
          </p>


          <Link
          to="/courses"
          className="
          block
          py-4
          bg-black
          text-white
          rounded-xl
          font-bold
          hover:scale-105
          transition
          "
          >

            Browse Courses

          </Link>


        </div>

      </div>

    );

  }



  return (

    <div className="
    bg-gray-100
    min-h-screen
    py-12
    ">


      <div className="
      container
      mx-auto
      px-4
      md:px-8
      ">


        <h1 className="
        text-3xl
        font-bold
        mb-8
        ">

          Shopping Cart ({getCartCount()} items)

        </h1>




        <div className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-8
        ">


          {/* CART ITEMS */}

          <div className="
          lg:col-span-2
          space-y-4
          ">


          {
            cartItems.map((item)=>(

              <div
              key={item.id}
              className="
              bg-white
              p-6
              rounded-2xl
              shadow
              border
              flex
              items-center
              gap-6
              "
              >


                <img
                src={item.image}
                alt={item.title || item.name}
                className="
                w-32
                h-24
                object-cover
                rounded-xl
                "
                />



                <div className="
                flex-1
                ">


                  <h3 className="
                  text-lg
                  font-bold
                  ">

                    {item.title || item.name}

                  </h3>


                  <p className="
                  text-gray-500
                  text-sm
                  mt-2
                  ">

                    By {item.instructor?.name || item.teacher}

                  </p>


                  <p className="
                  text-xl
                  font-bold
                  text-green-600
                  mt-3
                  ">

                    ${item.discountPrice || item.price}

                  </p>


                </div>




                <button

                onClick={()=>
                  dispatch(removeFromCart(item.id))
                }

                className="
                p-3
                text-red-500
                hover:bg-red-50
                rounded-lg
                transition
                "

                >

                  <FaTrash />

                </button>


              </div>


            ))
          }


          </div>





          {/* SUMMARY */}


          <div>

            <div className="
            bg-white
            p-8
            rounded-2xl
            shadow
            sticky
            top-20
            ">


              <h3 className="
              text-xl
              font-bold
              mb-6
              ">

                Order Summary

              </h3>



              <div className="
              space-y-4
              border-b
              pb-6
              ">


                <div className="
                flex
                justify-between
                ">

                  <span>
                    Subtotal
                  </span>


                  <span className="font-bold">
                    ${subtotal.toFixed(2)}
                  </span>


                </div>



                {
                  discount > 0 &&

                  <div className="
                  flex
                  justify-between
                  text-green-600
                  ">

                    <span>
                      Discount
                    </span>

                    <span>
                      -${discount.toFixed(2)}
                    </span>


                  </div>

                }



                <div className="
                flex
                justify-between
                ">

                  <span>
                    Tax
                  </span>


                  <span>
                    ${tax.toFixed(2)}
                  </span>


                </div>



              </div>





              <div className="
              flex
              justify-between
              mt-6
              mb-8
              ">


                <span className="
                font-bold
                text-lg
                ">

                  Total

                </span>



                <span className="
                text-3xl
                font-bold
                text-green-600
                ">

                  ${total.toFixed(2)}

                </span>



              </div>





              <button className="
              w-full
              py-4
              bg-black
              text-white
              rounded-xl
              font-bold
              flex
              justify-center
              items-center
              gap-3
              hover:scale-105
              transition
              ">

                Proceed Checkout

                <FaArrowRight />

              </button>




              <Link

              to="/courses"

              className="
              block
              text-center
              mt-4
              py-4
              bg-gray-100
              rounded-xl
              hover:bg-gray-200
              "

              >

                Back To Courses

              </Link>



            </div>


          </div>



        </div>


      </div>


    </div>

  );

};


export default Cart;