// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";
import FoodFireLogo from "../Images/Food Fire Logo.png";
import Header from "./Header";
import Restaurant from "./Restaurant";
import Body from "./body";
import Footer from "./Footer";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Title component for display logo
const Title = () => (
  <a href="/">
    <img className="logo" src={FoodFireLogo} alt="Food Fire Logo" />
  </a>
);


// RestaurantList is JSON Data for displaying cards
 





// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />  
      <Body />
      <Footer />
    </React.Fragment>
  );
}; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
export default App;