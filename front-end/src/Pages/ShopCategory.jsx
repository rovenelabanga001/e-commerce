import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import Item from "../Components/Items/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>
        </p>
        <div className="shopcategory-sort">
          Sort by
          <FontAwesomeIcon icon={faSortDown} />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
