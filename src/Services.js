import { Link } from "react-router-dom";
import Footer from "./Footer";
import Search from "./Search";
import ImageSlider from "./swiper";

export default function Services() {
  // const images = [
  //   '/L-page_assets/grp_84.png',
  //   '/L-page_assets/grp_85.png',
  //   '/L-page_assets/group_83.png',
  // ];

  return (
    <>
      <section className="services">
        <Search />
        <h3 className="headingTitle">Our Services</h3>
        <div className="servSec">
          <div className="bgb"></div>
          <div className="cont">
            <p className="hed">
              {" "}
              Welcome to BuyVal, Where Buyers & Sellers connect seamlessly
            </p>
            <p className="cnt">
              {" "}
              At BuyVal, our mission is simple: make you a buyer, find you a
              seller. Dive into a world of effortless transactions, quality
              products, and a seamless shopping experience that connects buyers
              with sellers in perfect harmony.
              At BuyVal, our mission is simple: make you a buyer, find you a
              seller. Dive into a world of effortless transactions, quality
              products, and a seamless shopping experience that connects buyers
              with sellers in perfect harmony.
            </p>
          </div>
        </div>
        <div className="discover_bv">
          <h3 className="heading">
            Discover BuyVal Services/ What BuyVal Offers
          </h3>
          <div className="card-wrapper">
            <div className="card">
              <img src="/L-page_assets/milky_way.png" alt="" />
              <h3>Vast Product Universe</h3>
              <p>
                Explore a diverse range of products from trusted sellers.
                Whether you're into trendy fashion, auto-mobiles, electronics,
                Gadget & Accessories, Jewellery or unique handcrafted items,
                BuyVal has it all.
              </p>
              <div className="line"></div>
            </div>
            <div className="card">
              <img src="/L-page_assets/success.png" alt="" />
              <h3>Effortless Buyer Navigation</h3>
              <p>
                Navigate our user-friendly platform with ease. Advanced filters
                and intuitive search options ensure you find what you're looking
                for in no time.
              </p>
              <div className="line"></div>
            </div>
            <div className="card">
              <img src="/L-page_assets/security_logo.png" alt="" />
              <h3>Secure Transaction Always</h3>
              <p>
                Rest easy knowing that your transactions are secure. BuyVal
                employs top-notch security measures to protect your personal and
                financial information.
              </p>
              <div className="line"></div>
            </div>
            <div className="card">
              <img src="/L-page_assets/cloud_hosting.png" alt="" />
              <h3>Dedicated Buyer Support</h3>
              <p>
                Need assistance? Our support team is here for you. Reach out via
                email, chat, or phone, and let us make your shopping experience
                exceptional.
              </p>
              <div className="line"></div>
            </div>
            <div className="card">
              <img src="/L-page_assets/currency_img.png" alt="" />
              <h3>Hassle-Free Returns / Refunds</h3>
              <p>
                Enjoy stress-free shopping with our transparent return and
                refund policies. If you're not satisfied, we've got you covered.
              </p>
              <div className="line"></div>
            </div>
            <div className="card">
              <img src="/L-page_assets/retain.png" alt="" />
              <h3>Buyer Loyalty Support</h3>
              <p>
                Join our loyalty programs for exclusive discounts and special
                offers. Unlock perks that enhance your shopping experience.
              </p>
              <div className="line"></div>
            </div>
            <div className="card">
              <img src="/L-page_assets/seller_disc.png" alt="" />
              <h3>Seller Discovery</h3>
              <p>
                Sellers, this is your platform too! Showcase your products to a
                vast audience of eager buyers. Connect with shoppers who
                appreciate quality and uniqueness.
              </p>
              <div className="line"></div>
            </div>
            <div className="card">
              <img src="/L-page_assets/mobile.png" alt="" />
              <h3>Mobile Shopping Anywhere</h3>
              <p>
                Shop on the go with our mobile-responsive app. BuyVal ensures a
                seamless and enjoyable shopping experience on all device.
              </p>
              <div className="line"></div>
            </div>
            <div className="card">
              <img src="/L-page_assets/ethical.png" alt="" />
              <h3>Ethical and Sustainable Shopping</h3>
              <p>
                Need assistance? Our support team is here for you. Reach out via
                email, chat, or phone, and let us make your shopping experience
                exceptional.
              </p>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="blob">
          <p>
            Ready to embark on your buying journey? Let BuyVal be your guide.
            Your perfect seller is just a click away. Shop Now and Experience
            the BuyVal Difference!
          </p>
        </div>

        <div className="sliderDiv">
          <div className="headings">
            <img src="/L-page_assets/globe.png" />
            <div className="line"></div>
          </div>
          <h3>Meet the team</h3>
          <p>
            Welcome to BuyVal where we make you a seller and find you a buyer.
            Behind every seamless transaction and delightful shopping experience
            there is a group of individual committed to making your journey
            extraordinary. Get to know the faces behind the scenes:
          </p>
          <div className="sliderWrapper">
            <div className="image">
              <div className="over">
                <a href="https://web.facebook.com/profile.php?id=100078763066429">
                <img src="/L-page_assets/facb.svg" className="ico" alt="facebook" />
                </a>
                <a href="https://instagram.com/brainhood14">
                  <img src="/L-page_assets/insta.svg" className="ico" alt="facebook" />
                </a>
                <a href="https://www.linkedin.com/in/gboyega-ategbe-423503238/">
                  <img src="/L-page_assets/linkdin.svg" className="ico" alt="facebook" />
                </a>
                <a href="https://x.com/brainhoodzfx">
                  <img src="/L-page_assets/frame_5.svg" className="ico" alt="facebook" />
                </a>
              </div>
              <img src="/L-page_assets/founder.jpg" alt="" />
              <div className="foot">
                <p className="name">Ategbe  Gboyega V.</p>
                <p className="pos">Founder/CEO of Buyval Nigeria</p>
              </div>
            </div>
            <div className="image">
              <div className="over">
              <a href="https://web.facebook.com/abiodunadetoye.clement.7">
                <img src="/L-page_assets/facb.svg" className="ico" alt="facebook" />
                </a>
                <a>
                  <img src="/L-page_assets/insta.svg" className="ico" alt="facebook" />
                </a>
                <a href="https://www.linkedin.com/in/adetoye-abiodun-110087202/">
                  <img src="/L-page_assets/linkdin.svg" className="ico" alt="facebook" />
                </a>
                <a href="https://x.com/AdetoyeKlemweb">
                  <img src="/L-page_assets/frame_5.svg" className="ico" alt="facebook" />
                </a>
              </div>
              <img src="/L-page_assets/founder1.png" alt="" />
              <div className="foot">
                <p className="name">Adetoye Abiodun</p>
                <p className="pos">CTO of Buyval Nigeria</p>
              </div>
            </div>
          </div>
          {/* <button className="view">
            <Link to={"/Team"}>View All</Link>
          </button> */}
        </div>
      </section>
      <Footer />
    </>
  );
}
