import React from "react";
import "../BannerCard/BannerCard.scss";
import { useEffect, useState } from "react";
const BannerCard = () => {
  const [banner, setBanner] = useState([]);
  const BASE_URL = "http://localhost:3002/";
  useEffect(() => {
    fetch(`${BASE_URL}homebanneritem`)
      .then((response) => response.json())
      .then((data) => {
        setBanner(data);
      });
  }, []);
  return (
    <section id="bannercard">
      <div className="container">
        <div className="row">
          {banner.length > 0 &&
            banner.map((element, index) => (
              <div key={index} className="col-xl-4">
                <div className="cards">
                  <div className="card-img">
                    <img className="change-img" src={element.image} alt="Bannerimg" />
                  </div>
                  <div className="card-tittle">
                    <h2>{element.tittle}</h2>
                    <h3>{element.desc}</h3>
                    <h4 className="startnow">{element.start}</h4>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
