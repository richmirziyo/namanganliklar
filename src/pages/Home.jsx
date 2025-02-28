import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <main className="main container">
        <img className="main_img" width={1310} src="../optimize.png" alt="" />
        <section className="one">
          <div className="one__card">
            <h3 className="one_card__heading">
              Кандидат на пост канцлера ФРГ Шольц назвал условия коалиционного
              соглашения
            </h3>
            <p className="one_card__paragraph">
              Лидер Социал-демократической партии Германии (СДПГ) и кандидат на
              должность...
            </p>
            <img src="../germany.png" alt="" width={359} height={165} />
            <div className="one_card__imgvp">
              <img src="../1-card.png" alt="" />
              <p className="one_card__p">ИА Красная Весна 15:55</p>
            </div>
          </div>
          <div className="one__card">
            <h3 className="one_card__heading">
              Ученые доказали экспериментальным путем пользу покровных культур
            </h3>
            <p className="one_card__paragraph">
              Новое исследование ученых университета Иллинойса объединяет
              полевые данные...
            </p>
            <img src="../card2.png" alt="" width={360} height={165} />
            <div className="one_card__imgvp">
              <img src="../2-card.png" alt="" />
              <p className="one_card__p">Газета.Ru 12:54</p>
            </div>
          </div>
          <div className="one__card">
            <h3 className="one_card__heading">
              Baidu запустила публичный сервис роботакси Apollo Go в<br />
              Шанхае
            </h3>
            <p className="one_card__paragraph">
              Автопарк Baidu состоит из модифицированных электромобилей EV...
            </p>
            <img src="../card3.png" alt="" width={359} height={165} />
            <div className="one_card__imgvp">
              <img src="../3-card.png" alt="" />
              <p className="one_card__p">Хайтек+ 13:44</p>
            </div>
          </div>
        </section>
        {/* 2 */}
        <section className="one one_copy">
          <div className="one__card">
            <h3 className="one_card__heading">
              Стали известны ёмкости аккумуляторов всех моделей iPhone 13
            </h3>
            <p className="one_card__paragraph">
              Во время презентации iPhone 13 Apple придала большое значения...
            </p>
            <img src="../card4.png" alt="" width={359} height={165} />
            <div className="one_card__imgvp">
              <img src="../4-card.png" alt="" />
              <p className="one_card__p">Digger.ru 14:25</p>
            </div>
          </div>
          <div className="one__card">
            <h3 className="one_card__heading">
              Nature: ученые смогли доказать природное происхождение
              коронавируса SARS-CoV-2
            </h3>
            <p className="one_card__paragraph">
              Во время презентации iPhone 13 Apple придала большое значения...
            </p>
            <img src="../card5.png" alt="" width={360} height={165} />
            <div className="one_card__imgvp">
              <img src="../5-card.png" alt="" />
              <p className="one_card__p">Lenta.ru 10:54</p>
            </div>
          </div>
          <div className="one__card">
            <h3 className="one_card__heading">
              Китайская марка JAC повысила цены на лифтбек и пикап в<br />
              России
            </h3>
            <p className="one_card__paragraph">
              Две модели китайского бренда JAC из пяти, представленных на
              российском...
            </p>
            <img src="../card6.png" alt="" width={359} height={165} />
            <div className="one_card__imgvp">
              <img src="../6-card.png" alt="" />
              <p className="one_card__p">Тарантас Ньюс 10:44</p>
            </div>
          </div>
        </section>
        <div className="container modal_wrappper">
          <div className="modal_wrapper">
            <h2 className="modal_wrapper_heading">
              Хотите быть в курсе свежих новостей? Включите уведомления!
            </h2>
            <button className="modal_wrapper_btn">Включит </button>
          </div>
        </div>
        <section className="two">
          <div className="two_div">
            <h2 className="two_div_heading">В мире</h2>
            <div className="left_right_wrapper">
              <div className="left_card">
                <div className="two_items">
                  <img src="../two1.png" alt="" />
                  <div>
                    <h2 className="two_items_heading">
                      Китайский Чунцин запустил чартерный рейс для студентов до
                      Британии
                    </h2>
                    <p className="two_items_paragraph">
                      Чартерный рейс с 244 китайскими студентами вылетел из
                      города центрального подчинения Чунцина на юго-западе Китая
                      в британский Манчестер...
                    </p>
                    <div className="one_card__imgvp">
                      <img src="../1-card.png" alt="" />
                      <p className="one_card__p">ИА Красная Весна 15:55</p>
                    </div>
                  </div>
                </div>
                <div className="two_items qwert">
                  <img src="../two2.png" alt="" />
                  <div>
                    <h2 className="two_items_heading">
                      В Германии выпустят ограниченную партию плюшевых мишек в
                      образе Меркель
                    </h2>
                    <p className="two_items_paragraph">
                      БЕРЛИН, 19 сентября. / ТАСС/. Знаменитая фабрика по
                      производству плюшевых игрушек в городе Кобург (федеральная
                      земля Бавария) изготовила уникального...
                    </p>
                    <div className="one_card__imgvp">
                      <img src="../two_small2.png" alt="" />
                      <p className="one_card__p">ТАСС 11:35</p>
                    </div>
                  </div>
                </div>
                <div className="two_items qwert">
                  <img src="../two3.png" alt="" />
                  <div>
                    <h2 className="two_items_heading">
                      Акции КНР утратили доверие инвесторов. Что делать с
                      бумагами прямо сейчас
                    </h2>
                    <p className="two_items_paragraph">
                      За последние месяцы инвесторы в китайский рынок пережили
                      настоящее потрясение — из-за ужесточения регулирования
                      технологического сектора и критики некоторых...
                    </p>
                    <div className="one_card__imgvp">
                      <img src="../two_small3.png" alt="" />
                      <p className="one_card__p">РБК Инвестиции 09:35</p>
                    </div>
                  </div>
                </div>
                <div className="two_items qwert">
                  <img src="../two4.png" alt="" />
                  <div>
                    <h2 className="two_items_heading">
                      Китай раскритиковал заключенный Австралией, США и
                      Великобританией антикитайский союз AUKUS
                    </h2>
                    <p className="two_items_paragraph">
                      Не только Франция, которая лишилась многомиллиардного
                      контракта с Австралий, осталась недовольна созданием
                      трехстороннего оборонного альянса AUKUS, пишет
                      Anna-News.info
                    </p>
                    <div className="one_card__imgvp">
                      <img src="../two_small4.png" alt="" />
                      <p className="one_card__p">Solenka.info 19:43</p>
                    </div>
                  </div>
                </div>
                <button className="two_btn">Показать ещё </button>
              </div>
              <div className="right_card">
                <h2 className="right_card_heading">Главное</h2>
                <h3 className="right_card_headingh">
                  В Фергане создадут узбекско-пакистанский университет
                </h3>
                <p className="right_card_paragraph">Sputnik Узбекистан 14:09</p>
                <hr className="right_card_discription" />
                <h3 className="right_card_headingh">
                  Узбекистан утвердил соглашение о содействии занятости в
                  странах СНГ
                </h3>
                <p className="right_card_paragraph">ИА Красная Весна 10:19</p>
                <hr className="right_card_discription" />
                <h3 className="right_card_headingh">
                  В Узбекистане увеличиваются очереди за автомобилями UzAuto
                </h3>
                <p className="right_card_paragraph">
                  Северная газета (Армянск) 13:50
                </p>
                <hr className="right_card_discription" />
                <h3 className="right_card_headingh">
                  Минтуризма опровергло приостановку выплат за шаги
                </h3>
                <p className="right_card_paragraph">Sputnik Узбекистан 14:32</p>
                <div>
                  <img
                    className="olmos_img"
                    src="../two_olmos_img.png"
                    alt=""
                    width={393}
                    height={338}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
