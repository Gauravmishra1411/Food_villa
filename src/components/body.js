import Restaurant from "./Restaurant";
import RestaurantCard from "./RestaurantCard";
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
    const searchText="gaurav";
    return (
        <>  
        <div className="search">
            <input
            type="text"
            className="searchinput"
            value={searchText}
            />
        </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
        })}
      </div>
      </>
    );
  };
  export default Body;
