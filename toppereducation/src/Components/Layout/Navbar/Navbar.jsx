import React from "react";
import "../Navbar/Navbar.scss";
import { Link } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav id="desktop-nav">
      <div className="container">
        <div className="row ">
          <div className="col-xl-2 ">
            <div className="site-logo">
              <Link to="/">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAAmCAMAAAALKXIrAAAAe1BMVEUAAADvTFgEBwfvTFjvTFgEBwcEBwfvTFjvTFgEBwfvTFgEBwcEBwfvTFjvTFgEBwcEBwcEBwfvTFjvTFjvTFjvTFgEBwfvTFjvTFgGBwfvTFgEBwcEBwcEBwcEBwcuExWrOEBSHiKsOEGDLDJLHB/IQUuRMDgEBwfvTFh/0X2uAAAAJ3RSTlMAgEBAv7+AIGAg7+8Qn98wz9+PUDAQYHCvj8+fr3BQcIBgcGifYFCKuJplAAAEYklEQVRYw92Xh5KbMBCGJQsQHdMNLpduvf8TZtVYyZRJxplJJv8kJ1j/0n7WLjqO/A9KTr4qYnWKQHe8J2hKTCTHUL61XuJZkj0GzlxxG46evkKTNMpMoB6s1XHVUa5gndB5WK8XoQVnrUWFK3qM9sjcpAmiYZrKouHUfAcNlVXvog3PrQVfgjnmxbk7aDgr2UGbm5ara0QbQim9O/Jqknv2fFGtCmFNZx282rwwq9ahwaBlodZgLajrwa6VRYxoXhudbHNnOuMjIdW9XhZEU6LgMptXdZ2aczNoITFCi531PCxocICGNZ4Mp14w8UyViWFecle7e4RGErykjn4HrdYb4O3hhCb0Y15EOEAjeCkcuWjzPhpuCT5Kk2qxP7truu8ZaPbQxDHaYBrJX3zda/W6167+Exp6aPnNzAJh2we/juZ/b/yyiTIdnwzP0x5auDzXd6+gwXtouS2wj3Fen2tXskJbWzy0+RWt30XDrtkrKJJhXjftMVpEfDTxisYO0U7LaeGgZj5aOKBVK7ud1nuOBc3M13kPjeD3888S3Sv2LQPzQkRNPUAjg3a+i3b1To9J3T0c0/ahdYxGzl4ce8tHSzs2cvlmdb9voiW6QlEur2+6s8h7aHYcXtGYjyZaEoXnpXHXWSfbUeDSqn4P7by8PKIlNK8rx2iURE7Gjay3p6+B/A4aKnIsiY0co5nXnnrda9huqGwg76LhmomP1vpoNDe7Mu2ikUeNB0VC/ghanmEbIouLFvCH9PhnVyilyotw11C+E0bVgalSIW/aEDoaPMsdL7fQ0jgJzdldn8nf0B5a0Zu/lLJvrBrI3xKiNQYt6E6mhc6f2rWfdeRI1J/yjhfRAoVWtok9FKbGUnQBKDb+gOyIUQ4fz17Mzo+3vXq0iqnXoomPxvPlJP3a9MtCovwFNCoYLMC3oAXd9urRKhAu2eTuWol/jmcfdFwt3V9EStWLnQ51gexLG2ZyDUneN0LMDByXUsydnS/mQKRQwQZcvfXaUbFSdZjSVJSy0OED0Qq2gD2n7wX3vnXBWE8uoqClg1amMRWFDfNAFLFM04hmLFPORDpScVnQRBOnKWkFjdPCetVo0VgpKItFwwLBSfU8GbSy6ZLJgt1+XOKXgoCYWqJDNCZGGDGsimM2AQgkD1gNms0PxrYn1mtHFVDmIGUsVr8kB3IJgmbs8uG2nOufC9pv9ooo4IeL1hIMO2gNfLyHRloof3yEph+5CEoHv/qH6fx0wAq+08ZpyskI6xSig6VoB9Xqg2IJjyZNWfZQ1HgbjVHez+iVo5oQwMVFEPjfk5Z2Es3XdQMMn9AWCp+KQNZ3TiFbI2/bJdyZlmZwD9TbaDwtA9FYrx6pSGEBBpyC8jSd5QH0xeOqo0+XhpMNcQpi8jSinMZyHDt538I9ccMxgX9g1z+ZPqr0pTZw/SF6YZSuGD6CEXy9/px+INf0tYHm/2fUj58+olsYRR9fimLk5J8SH0eoVUMZ+bf0E8CYQFz9kAN5AAAAAElFTkSuQmCC"
                  alt="sitelogo"
                />
              </Link>
            </div>
          </div>
          <div className="col-xl-6 ">
            <div className="site-middle">
              <ul className="nav-ul">
                <li className="home-li">
                  <Link className="page-link" to="/">Home</Link>
                </li>
                <li className="page-li">
                  <Link className="page-link" to="/pageone">Pages<BiCaretDown size="16px" />
                   <ul className="page-hover">
                    <li className="about-li"><Link to="/aboutus">About Us</Link></li>
                    <li className="about-li"><Link to="/gallery">Gallery</Link></li>
                    <li className="about-li"><Link to="/faq">FAQ</Link></li>
                    <li className="about-li"><Link to="/trems">Trems & Condition</Link></li>
                    <li className="about-li"><Link to="/pravicy">Pravicy Policy</Link></li>
                   </ul>
                  </Link>
                </li>
                <li className="courses-li">
                  <Link className="page-link" to="/courses">Courses<BiCaretDown size="16px"/>
                  <ul className="course-hover">
                    <li className="single-li"><Link to="/courseone">Course</Link></li>
                    <li className="single-li"><Link to="/singlecourse">Single Course</Link></li>
                  </ul>
                  </Link>
                </li>
                <li className="events-li">
                  <Link className="page-link" to="/events">Events</Link>
                </li>
                <li className="contact-li">
                  <Link className="page-link" to="/contact">Contact</Link>
                </li>
                <li className="blog-li">
                  <Link className="page-link" to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 g-3">
             <div className="nav-button">
             <p className="login-and-register"><Link><FaRegUser/>Login/Register</Link></p>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
