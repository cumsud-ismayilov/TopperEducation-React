import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.scss";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoPinterestAlt,
  BiLogoTwitter,
} from "react-icons/bi";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footerbox1">
          <div className="col-xl-4">
            <div className="foot-line1">
              <div className="page-logo">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAAmCAMAAAALKXIrAAAAflBMVEUAAADvTFj////vTFjvTFj////////vTFjvTFj////////vTFj////vTFjvTFj////////////vTFjvTFjvTFjvTFj////vTFjvTFj////vTFj////////////////6w8f0gIn95ef2j5b6yc396+z6zM/yanT1lJv////vTFhg3agJAAAAKHRSTlMAgEBAv7+AIGAg7+8Qn98wz9+PUDAQYHCvn8+Pr3BQYIBwbJ+PcGBQojn4rwAABGZJREFUWMPdmImS2yAMhiFg4zuJz8RO0rsN7/+CFZcF66PdSWfaqWZ3weIHfUYycZb8D5YeQjvOI4cY7I7XBEWp9RToKtbWSwNJusUgmG/CueNnaJENGmfWce6d1FOd40LDeq5Tv1wvRgnOWhqVvtF9tEfmB00RDcMcHRpOLTbQ0LLjq2j9c23BN84C4+LcDTSclW6gjXUjdB/R+kiZ2R3Vm9SePd/YWSfCiU7GeXVxYdbZuHqLlkXGeidBu+7sWlUmiBaU0cEVd2YiPlJyvJug10CUarjMxdVVp+fcLFpErKHEzXruJpTvoGGOJ8tpFkwD0dH6MC65693dQyMpdqln70E7mw0I9nBCEeoxLiLsoBHsSs98tHEbDbcEH6VJl9if3TVT9wxsDNDkPlpvCylcfFlr52WtXcMnNArQipudBYZlz9+BFtw33myqRbsnA6ywhRbNz/U9SCh/Da1wCQ4xTstz7UoWaEtJgDa+Res20bBqthKKZBgXw/4KLSYhmnyLxnbRDvNp4aFmIVrUo9RYdjss9xwTmtnbeQ2N4P2FZ4mpFfeWgXHBo6fuoJHeKF9Fu5riCq4enmj90NpHI6fAj7UVouUtG4R6s7rfV9FSk6G4UP2bqSzyGppr+7doLESTDYmj01y4y6iTqyhQGTu+D+00vzyiJLKvK/tolMRexJWot2doPXkX2vLom3MR/xLtoXXnZa1hgaFlPXkVDddMQ7QmRKOF3ZVpE408znhQpOSPoBUZliGy+GhcPJQmPLsiZTq9CHeN1DthfNwRHbUrmNZHnvWB5I7dNbQ8SSN7dp9P5G/YFlrZ2W9K2Rd27MnfMkSrLRpvD7aETh+bpZ61ZM9oOOUVLaJxjVY1qTsUvtaOouVgidVzsmGMChgeV0YS3q5rdYsyGpRoGqKJYj5JP9fdvJCsfgONSgYLiPWRdW04wqVPNvm7VuHX8ewTHVDGzKdpd5E51S92xtVyVZfOzdQairyrpRwZKC6VHFsHIkcuc8hgDarOaV2rJVQfpjSXlUp09EC0kuH/CabvpfC3HwZZRy6ypJWHVuUJlaVzCy7LRIWpZT1UuWAyH6i8zGiyTvKcNJImeem0rtUSVknKElkzLgU5Pg8WrarbdHJgtx+XJKwMJWF6iRbRmBygRbdOjt0EIFDwILVoLj4Im444rWu1Q4t5zliiPyR7cuG8Htqiv83n+oeSuioLEypL+OOjNQTdHloNw1topIH0J3to5pGLIXXw0d9Pp6cHZnO5RMtzQQZYp5QtLEVbyFbHy9k92DBV1UFSk3U0RkU3ola1egKHzkUS+O1IQ1uFFtp1BQyf0AYSn0uu8jvmELhWl83sbm1JM7gG6nU0kVdc1k5rWipzWIABp6Qiz0d1AH0OuM7xx0styIoJCsYAkVJBE9UOrbpu4Jr47oTAD8jNX+aOKgYyIxBmELXQKlUCQ6plpDPj9BNyTR9qKP5/xrrh46f4FsXxt89lOQjyT5kYBshVTRn5t+wnKDxHeRo8vXUAAAAASUVORK5CYII="
                  alt="pagelogo"
                />
              </div>
              <h2>
                Axacus Consultancy is a one-stop shop offering accounting,
                financial and advisory services. Beneficial experienced finance
                professionals.
              </h2>
              <div className="social-media">
                <p>
                  <Link>
                    <BiLogoFacebook size="18px"  />
                  </Link>
                </p>
                <p>
                  <Link>
                    <BiLogoLinkedin size="18px"  />
                  </Link>
                </p>
                <p>
                  <Link>
                    <BiLogoPinterestAlt size="18px" />
                  </Link>
                </p>
                <p>
                  <Link>
                    <BiLogoTwitter size="18px"  />
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-2">
            <div className="foot-line2">
              <h3>Our Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="courseone">Course</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2">
            <div className="foot-line3">
              <h3>Services</h3>
              <ul>
                <li>
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/courseone">Course</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/trems">Trem & Condition</Link>
                </li>
                <li>
                  <Link to="/pravicy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="foot-line4">
              <h3>Contact Us</h3>
              <ul>
                <li>Address : 6701 Democracy Blvd,Suite 300, USA</li>
                <li>Call : +91-1234567890</li>
                <li>Fax : +91 -251 541 2548</li>
                <li>Email : info@example.com</li>
                <li>Website : infoexample.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row footerbox2">
          <div className="col-xl-12">
            <div className="copyright">
              <h4>Privacy Policy / Terms & Condition </h4>
              <h5>Copyright © 2021 . All Rights Reserved</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
