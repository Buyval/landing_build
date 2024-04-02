import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function Footer() {
  function handleClick() {
    var modal = document.querySelector('.modal')
    var modalSec = document.querySelector('.modalSec')
    modal.classList.add('show')
    modalSec.style.display = 'grid'
  }
  return (
    <>
      <footer>
        <div className="foot_wrap">
          <div className="quick_links">
            <div className="ql">
              <img src="/L-page_assets/white_logo.png" className="white_logo" />
              <h3>Quick Links</h3>
              <Link to={"/About"}>About Us</Link>
              <Link to={"/Services"}>Services</Link>
              <Link to={"/Contact"}>Contact</Link>
            </div>
          </div>
          <div></div>
          <div className="socials">
            <p>Join us on</p>
            <div className="soc">
              <a href="https://www.facebook.com/buyval1">
                <img src="/L-page_assets/facb.svg" className="ico" alt="facebook" />
              </a>
              <a href="https://www.twitter.com/buyVallimited">
                <img src="/L-page_assets/frame_5.svg" className="ico" alt="facebook" />
              </a>
              <a href="https://www.youtube.com/@buyval">
                <img src="/L-page_assets/frame_6.svg" className="ico" alt="facebook" />
              </a>
              <a href="https://www.instagram.com/_buyval">
                <img src="/L-page_assets/insta.svg" className="ico" alt="facebook" />
              </a>
              <a href="https://www.linkedin.com/company/buyval-limited">
                <img src="/L-page_assets/linkdin.svg" className="ico" alt="facebook" />
              </a>
            </div>
            <a href="mailto:support@buyval.com" style={{color: "white", marginTop: "-1rem"}}>support@buyval.com</a>
          </div>
          <div className="downld">
            <h3>DOWNLOAD BUYVAL FREE APP</h3>
            <p>Get access to exclusive offers</p>
            <div className="dwnd">
              <button onClick={handleClick}>
                <img src="/L-page_assets/dwnld1.png" />
              </button>
              <button onClick={handleClick}>
                <img src="/L-page_assets/dwnld2.png" />
              </button>
            </div>
          </div>
        </div>
        <div className="cpr">
          <p className="resvd">All Right Reserved 2024, Buyval Integrated Business Limited</p>
          <p className="copyright">
            &copy;
            Developed by Klemweb
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
