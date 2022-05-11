import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Pedro's Pizza started with one store back in 1972 in the Adelaide suburb of Daw Park.

          As the popularity of this store grew more and more it soon became an icon in the city.
          It was only a matter of time before the name "Pedro's" was seen in other suburbs as well.Now the "Pedro's Pizza" brand can be seen in many stores throughout NSW and SA, with more stores coming across the nation.

          Our Stores at Epping, Lalor Park, Morphett Vale, Quakers Hill & Somerton Park are open for Pickup and Delivery.We love to party all the time at Pedro’s. Grab a Frozen Margarita and a slice of Pizza and watch the party unfold. We’re pretty laid back here. No Table Service, No Worries, order ya food at the bar, maybe grab an Ice Cold Beer & a shot of Tequila and we’ll give you a shout when your Pizza is done.

We’re open 7 days a week.
        </p>
      </div>
    </div>
  );
}

export default About;