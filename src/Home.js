import { useState } from "react";
import Search from "./Search";
import Footer from "./Footer";
import Join from "./Button";
export default function Home() {
  let [curImg, setCurImg] = useState(0);
  let images = ["/L-page_assets/adchar.png", "/L-page_assets/adchar2.png"];
  setInterval(() => {
    setCurImg((curImg += 1));
    if (curImg > 1) {
      setCurImg(0);
    }
  }, 2000);
  function handleClick() {
    var modal = document.querySelector('.modal')
    var modalSec = document.querySelector('.modalSec')
    modal.classList.add('show')
    modalSec.style.display = 'grid'
  }
  return (
    <>
      <section className="homePage">
        <Search />
        <div className="home_sec">
          <div className="intro">
            <h2>Make me a Seller, <span style={{ color: "red" }}>Find me</span> a buyer</h2>
            <p className="introCont">
              To empower and support sellers in establishing their online
              presence and, at the same time, to offer effective tools and
              features that help buyers discover and purchase products or
              services that meet their needs. We are committed to serving both
              sellers and buyers in a comprehensive and mutually beneficial way.
            </p>
            <div className="get">
              <div className="get_wrp">
                <Join />
                <div className="download">
                  <button onClick={handleClick}>
                    <img src="/L-page_assets/dwnld1.png" />
                  </button>
                  <button onClick={handleClick}>
                    <img src="/L-page_assets/dwnld2.png" />
                  </button>
                </div>
              </div>
              <img src={images[curImg]} className="char" />
            </div>
          </div>
          <div className="images">
            <img src={images[curImg]} className="adChar" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
