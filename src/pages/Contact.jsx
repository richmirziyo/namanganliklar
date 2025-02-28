import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  return (
    <>
      <Header />
      <main className="main container">
        <div className="contact_section_wrapper">
          <div className="all_input ">
            <h2 className="all_input_heading">Напишите нам</h2>
            <form>
              <input className="name_number" type="text" placeholder="Имя" />
              <input
                className="name_number"
                type="number "
                placeholder="Номер телефона"
              />
            </form>
            <input
              className="input_emile"
              type="emile"
              placeholder="Электронная почта"
            />
            <input className="input_text" type="text" placeholder="Текст" />
          </div>
          <div className="emile_section">
            <h3 className="heading">Электронная почта</h3>
            <a className="mail" href="mailto:info@namanganliklar24.uz">
              info@namanganliklar24.uz
            </a>
            <div className="contact_discription"></div>
            <h3 className="heading">Номер телефона</h3>
            <a className="mail" href="tel:+998 88 522-54-76">
              +998 88 522-54-76
            </a>
            <div className="contact_discription"></div>
            <h3 className="heading">Адрес</h3>
            <address className="mail">Ташкент, площадь Мустакиллик, 6 </address>
          </div>
        </div>
        <button className="send_btn">Отправить</button>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
