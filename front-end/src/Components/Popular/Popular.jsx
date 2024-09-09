import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Items/Item";

export const Popular = () => {
  return (
    <div className="popular">
      <h1>HIGH DEMAND LAPTOPS FOR ULTIMATE PERFOMANCE</h1>
      <hr />

      <p className="popular-text">Experience cutting-edge performance</p>
      <p className="popular-text">with our top-selling,</p>
      <p className="popular-text">high-demand laptops today!</p>
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Popular;
