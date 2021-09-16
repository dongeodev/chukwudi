import React from "react"
import "./category.css"
function Category({ icon, name, selected, id } = {}) {
  const select = id === selected ? "selected" : ""
  return (
    <article className={`category ${select}`}>
      <div className="category__container-img">
        <img className="category__img" src={icon} alt={name} />
      </div>
      <span className="category__name">{name}</span>
    </article>
  )
}

export default Category
