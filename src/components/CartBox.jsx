import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slice/cartSlice";

const CartBox = ({ isVisibleCart, handleClick }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  const box = useRef();
  useEffect(() => {
    if (isVisibleCart) {
      gsap.fromTo(
        box.current,
        { x: "100%" },
        { x: "0", duration: "1", ease: "power3.out" }
      );
      document.body.classList.add("no-scroll");
    } else {
      gsap.to(box.current, {
        x: "100%",
        duration: "0.5",
        ease: "power3.in",
      });
      document.body.classList.remove("no-scroll");
    }
  });

  const total = cartItems.reduce(
    (total, item) => (total += Number(item.price)),
    0
  );
  return (
    <div
      ref={box}
      className={`fixed ${isVisibleCart ? "block" : "hidden"}
   sm:w-96 w-full h-screen top-0 bg-white right-0 z-50 capitalize`}
    >
      <div className="text-black bg-white text-2xl w-full sticky top-0 z-50 flex justify-between p-4 border-b-2">
        <h1 className="font-bold">Cart</h1>
        <button
          onClick={handleClick}
          className="hover:bg-dark_white p-2 rounded-full w-12 flex items-center justify-center"
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
      <div className="flex flex-col py-4 px-2 overflow-y-auto h-96">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => {
            const { title, price, image } = item;
            return (
              <li key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={title}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <p>{title}</p>
                  <p>${price}</p>
                </div>
                <button onClick={() => dispatch(removeFromCart(index))}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            );
          })
        ) : (
          <p className="text-center mt-20 text-black">empty cart</p>
        )}
      </div>
      <div className="ml-5 mt-6">
        <p>
          total:$
          {total.toFixed(2)}
        </p>
      </div>
      <div className="fixed bottom-0 w-full px-10 py-3">
        <button className="bg-red py-3 text-white font-bold w-full rounded-3xl hover:bg-dark_red">
          Check out
        </button>
      </div>
    </div>
  );
};

export default CartBox;
