import React from "react";
import "./../styles/HomePage.css";
import { useHistory } from "react-router-dom";

function HomePage() {
  const { push } = useHistory;

  const handleClick = () => {
    push("/");
  };

  return (
    <div>
      <div className="homePage">
        <div className="description">
          <h2>BBC YOUTH</h2>
          <h4>Welcome To Bible Babtist Church Youth</h4>
        </div>
      </div>
      <div className="upcomingEvents">
        <h2>Up Coming Events</h2>
        <li>
          <h5>October 18 - "Leaders that inspire us" Presentation</h5>
          <h5>November 22 - "Remember to give thanks" Youth Dinner</h5>
          <h5>December 13 - "For Unto Us a Child Is Born" Christmas Evening</h5>
        </li>
        <h3>Donations Accepted By CashApp - $DavidBalatskiy</h3>
      </div>

      <div className="galleryBlog">
        <div className="galleryInfo">
          <h2>Gallery Blog</h2>
          <p>Click here to look at our youth trips and events!</p>
          <button onClick={handleClick}>Gallery Blog</button>
        </div>
        <img
          src="https://media.istockphoto.com/photos/group-of-people-holding-hands-praying-worship-believe-picture-id847575018?b=1&k=20&m=847575018&s=170667a&w=0&h=X6Tz7mZiR0PK3b58dP8hZ23s1bB-o0VRtCo3898drJk="
          alt=""
        />
      </div>
    </div>
  );
}

export default HomePage;
