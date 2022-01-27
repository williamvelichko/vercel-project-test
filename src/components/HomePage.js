import React from "react";
import "./../styles/HomePage.css";

function HomePage() {
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
    </div>
  );
}

export default HomePage;
