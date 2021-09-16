import React from "react"
import "./category.css"
function Category({ icon, name, selected, id, onClick } = {}) {
  const select = id === selected ? "selected" : ""
  return (
    <article className={`category ${select}`} onClick={onClick}>
      <div className="category__container-img">
        <img className="category__img" src={icon} alt={name} />
      </div>
      <span className="category__name">{name}</span>
    </article>
  )
}

export default Category
