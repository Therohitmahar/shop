import React from "react";
import "./shop.scss"
import { FcCheckmark } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

function Subscription() {
  function handleSub() {
    alert("We'll Direct You To Payment Page");
  }
  const price = [
    {
      id: 1,
      name: "Free Trial",
      price: "0",
      desc: "Beautifully simple project planning, 14 days of free trial.",
      list: [
        {
          para: "Demo Content Install",
          icon: <FcCheckmark />
        },
        {
          para: "Theme Updates",
          icon: <FcCheckmark />
        },
        {
          para: "Support And Updates",
          icon: <AiOutlineClose />
        },
        {
          para: "Access All Themes",
          icon: <AiOutlineClose />
        },
        {
          para: "All Themes For Life",
          icon: <AiOutlineClose />
        },
        {
          para: "30 Days Money Back",
          icon: <AiOutlineClose />
        }
      ]
    },
    {
      id: 2,
      name: "Premium",
      price: "2600",
      desc: "Declutter your mind and save time with Premium.",
      list: [
        {
          para: "Demo Content Install",
          icon: <FcCheckmark />
        },
        {
          para: "Theme Updates",
          icon: <FcCheckmark />
        },
        {
          para: "Support And Updates",
          icon: <FcCheckmark />
        },
        {
          para: "Access All Themes",
          icon: <FcCheckmark />
        },
        {
          para: "All Themes For Life",
          icon: <AiOutlineClose />
        },
        {
          para: "30 Days Money Back",
          icon: <AiOutlineClose />
        }
      ]
    },
    {
      id: 3,
      name: "Unlimited Access ",
      price: "4900",
      desc: "Declutter your mind and save time with Premium.",
      list: [
        {
          para: "Demo Content Install",
          icon: <FcCheckmark />
        },
        {
          para: "Theme Updates",
          icon: <FcCheckmark />
        },
        {
          para: "Support And Updates",
          icon: <FcCheckmark />
        },
        {
          para: "Access All Themes",
          icon: <FcCheckmark />
        },
        {
          para: "All Themes For Life",
          icon: <FcCheckmark />
        },
        {
          para: "30 Days Money Back",
          icon: <FcCheckmark />
        }
      ]
    }
  ];

  return (
    <>
      <section className="price">
        <div className="heading">
          <h2>Choose Your Plan</h2>
          <p>Take the plan according to your perfect Project!!</p>
        </div>
        <div className="content">
          {price.map((item) => (
            <div className="box">
              <h3>{item.name}</h3>
              <h1>
                <span>₹</span>
                {item.price}
                <label htmlFor="">/User Per Month</label>
              </h1>
              <p>{item.desc}</p>
              <button className="button" onClick={handleSub}>
                GET STARTED
              </button>
              <ul>
                {item.list.map((lists) => (
                  <li className="Sub-list">
                    <i>{lists.icon}</i>
                    <span>{lists.para}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Subscription;
