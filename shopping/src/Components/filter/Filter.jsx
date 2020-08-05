import React, { useEffect } from "react";
import "./style.css";
import { filterProduct } from "../../action/productaction";
import { useDispatch, useSelector } from "react-redux";

const Filter = (props) => {
  const { size, sort, handleSort } = props;

  const products = useSelector((state) => state.products.items);
  const filter = useSelector((state) => state.products.filterproducts);
  const dispatch = useDispatch();

  const handleFilter = async (e) => {
    const size = e.target.value;
    return await dispatch(filterProduct(products, size));
  };

  return (
    <div className="filter">
      <div className="filtercount">
        {" "}
        {filter ? `Product ${filter.length} ` : ""}{" "}
      </div>
      <form className="filerfeature">
        <div className="filtersort">
          <label htmlFor="sort"> Sort </label>
          <select value={sort} onChange={handleSort}>
            <option>Lastest</option>
            <option value="slowest">Slowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filterone">
          <label htmlFor="filter"> Filter </label>
          <select value={size} onChange={handleFilter}>
            <option value="ALL">ALL</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filter;
