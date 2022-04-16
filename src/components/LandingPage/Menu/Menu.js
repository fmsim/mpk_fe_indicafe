import React from "react"
import Typed from "react-typed"

// images
import image1 from "../../../assets/addl-images/breakfast-thali.jpeg"
import image2 from "../../../assets/addl-images/italian-cobmo-meal.jpeg"
import image3 from "../../../assets/addl-images/enchilladas.jpeg"

import "./Menu.css"

const Menu = () => {
  const renderMenu = () => {
    return (
      <section>
        <Typed className="typed-text" strings={["Our Daily Specials", "Burger Bonanza", "Sumptuous Salads", "Southern Delicacies"]} typeSpeed={40} backSpeed={60} loop />
        <div className="container">
          <a href="/browse">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <div className="card" style={{ width: "192px" }}>
                <img src={image1} className="card-img-top" alt="Dish 1" />
                <div className="card-body">
                  <h5 className="card-title">South Indian Breakfast Thali</h5>
                  <p className="card-text">Assorment of delicious soft idli, crunchy dosa served with green chutney and sambar.</p>
                </div>
              </div>

              <div className="card" style={{ width: "192px" }}>
                <img src={image2} className="card-img-top" alt="Dish 2" />
                <div className="card-body">
                  <h5 className="card-title">Italian Combo Meal</h5>
                  <p className="card-text">Assortment of delicious pizza with multiple topppings, and spaghetti.</p>
                </div>
              </div>

              <div className="card" style={{ width: "192px" }}>
                <img src={image3} className="card-img-top" alt="Dish 3" />
                <div className="card-body">
                  <h5 className="card-title">Mexican Combo Meal</h5>
                  <p className="card-text">Assortment of crunchy dorito served with salsa sausce and mayonnaise.</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    )
  }
  return <>{renderMenu()}</>
}

export default Menu
