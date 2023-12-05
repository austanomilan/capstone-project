import React from "react";
import recipes from "./recipes";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Menu = () => {
//   console.log(recipes[0]);
const handleOrder = (id) => {
    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Do you want to confirm order?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Yes, order it!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Orderd!',
            'Your order has been confirmed.',
            'success'
          )
        } 
      })

}
  return (
    <>
    <Helmet>
      <title>Little Lemon</title>
      <meta name="Author" content="Little Lemon"/>
      <meta name="description" content="Newly added dishes"/>
      <meta name="og:title" content="Little Lemon"/>
      <meta name="og:description" content="Eat and place your order for reservstion"/>
      <meta name="og:image" content="https://example.com/one-place-fishing-store.jpg"/>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Helmet>
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" className="menu-img" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Menu;
