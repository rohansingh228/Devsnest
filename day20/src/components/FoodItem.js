import React from "react";
import Card from "./card";
import { useState } from "react";

const FoodItem = () => {
  let food = [
    { title: "Pizza", text: "you have consumed 56 cals today" },
    { title: "Burger", text: "you have consumed 69 cals today" },
    { title: "Coke", text: "you have consumed 500 cals today" },
    { title: "Browne", text: "you have consumed 180 cals today" },
    { title: "Fried Rice", text: "you have consumed 200 cals today" },
    { title: "Pani Puri", text: "you have consumed 10 cals today" },
  ];

  const [foodlist, setFoodItem] = useState(food);

  const delItem = (i) => {
    console.log(i);
    setFoodItem((prevFoodItem) => {
      return prevFoodItem.filter((el, idx) => {
        return idx !== i;
      });
    });
  };

  return (
    <div className="food-item">
      {foodlist.map((el, indx) => {
        return (
          <Card
            title={el.title}
            delfunc={delItem}
            text={el.text}
            key={indx}
            idx={indx}
          />
        );
      })}
    </div>
  );
};

export default FoodItem;
