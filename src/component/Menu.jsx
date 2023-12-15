import React from "react";
import DishesCard from "../layout/DishesCard";
import menu4 from "../asset/menu4.jpg";
import menu2 from "../asset/menu2.jpg";
import menu3 from "../asset/menu3.jpg";
import menu5 from "../asset/menu5.jpg";
import menu6 from "../asset/menu6.jpg";
import menu7 from "../asset/menu7.jpg";
import menu8 from "../asset/menu8.jpg";
import menu9 from "../asset/menu9.jpg"
import menu1 from "../asset/menu1.jpg"


const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 mt-20 pt-24 pb-10">
        Today's Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu2} title="Delicious Dish" price="Rs.450" />
        <DishesCard img={menu3} title="Delicious Dish" price="Rs.399" />
        <DishesCard img={menu4} title="Delicious Dish" price="Rs.300" />
        <DishesCard img={menu5} title="Delicious Dish" price="Rs.335" />
        <DishesCard img={menu6} title="Delicious Dish" price="Rs.445" />
        <DishesCard img={menu7} title="Delicious Dish" price="Rs.555" />
        <DishesCard img={menu8} title="Delicious Dish" price="Rs.500" />
        <DishesCard img={menu1} title="Delicious Dish" price="Rs.450" />
        <DishesCard img={menu9} title="Delicious Dish" price="Rs.299" />

      </div>
    </div>
  );
};

export default Menu;