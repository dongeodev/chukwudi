import React from "react"
import "./category.css"
function Category({
  img = "https://image.flaticon.com/icons/svg/701/701965.svg",
  category = "Barbecue",
  selected,
  id,
} = {}) {
  const select = id === selected ? "selected" : ""
  return (
    <article className={`category ${select}`}>
      <div className="category__container-img">
        <img className="category__img" src={img} alt={category} />
      </div>
      <span className="category__name">{category}</span>
    </article>
  )
}

export default Category
