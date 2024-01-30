import Appp from "./Accordions";
import Footer from "./Footer";
import Search from "./Search";

export default function Contact() {
  return (
    <>
      <section className="contact_sec">
        <Search />
        <div className="accordion_sec">
          <img
            src="/L-page_assets/annotation.png"
            className="annotation"
          />
          <div className="cov">
          <Appp />
          <img
            src="/L-page_assets/question.png"
            className="questions"
          />
          </div>
        </div>
        <div className="contact_div">
          <img
            src="/L-page_assets/smiling_woman.jpg"
            className="smiling_woman"
          />
          <div className="contact_details">
            <p className="txt">
              If you have inquiries or need assistance, do not hesitate to chat
              with us. We are available Monday to Sunday (8am to 8pm)
            </p>
            <div className="chat_btn">
              <p>CHAT WITH US</p>
              <img src="/L-page_assets/message_icon.svg" className="msg_ico" />
            </div>
            <p>
              You can also reach us on 018881106 from Monday to Sunday (8am to
              8pm)
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
