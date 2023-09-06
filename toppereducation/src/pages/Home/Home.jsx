import React from "react";
import "../Home/Home.scss";
import { Link } from "react-router-dom";
import BannerCard from "../../Components/BannerCard/BannerCard";

const Home = () => {
  return (
    <main>
      <section id="banner">
        <div className="banner-img">
          <img src="https://toppereducation.netlify.app/static/media/HeaderImg.aeaa24af6c22cfd49c69.png" alt="bannerimg" />
        </div>
        <div className="banner-text">
          <p>Our Education Academy</p>
          <h2>Build Skills With Experts Any Time, Anywhere.</h2>
          <h3>Flexible easy to access learning opportunities can bring a significant change in how individuals prefer to learn! The eCademy can offer you to enjoy the beauty of eLearning!</h3>
          <h4 className="join"><Link>Join for Free</Link></h4>
        </div>
      </section>
      <BannerCard/>
    </main>
  );
};

export default Home;
