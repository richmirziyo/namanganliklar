import Footer from "../components/Footer";
import Header from "../components/Header";

function List() {
  return (
    <>
      <Header />
      <main className="main container">
        <img src="./public/uylar.png" alt="" width={1500} />
        <h2 className="listPage_heading">Интересное</h2>
        <div className="left_right_wrapper">
          <div className="left_card">
            <div className="two_items">
              <img src="./public/list1.png" alt="" />
              <div>
                <h2 className="two_items_heading">
                  Отопление Ташкента на 30 лет переходит в управление
                  французской Veolia
                </h2>
                <p className="two_items_paragraph">
                  Система теплоснабжения Ташкента на 30 лет будет передана в
                  управление французской компании Veolia для модернизации и
                  реконструкции, сообщает 22 сентября пресс-служба...
                </p>
                <div className="one_card__imgvp">
                  <img src="./public/1-card.png" alt="" />
                  <p className="one_card__p">ИА Красная Весна 15:26</p>
                </div>
              </div>
            </div>
            <div className="two_items qwert">
              <img src="./public/list2.png" alt="" />
              <div>
                <h2 className="two_items_heading">
                  Пользователи жалуются на новую проблему iPhone 13, связанную с
                  камерой
                </h2>
                <p className="two_items_paragraph">
                  Пользователи смартфона Apple iPhone 13 продолжают сообщать о
                  новых проблемах, с которыми они сталкиваются при использовании
                  флагмана, поступившего в продажу только позавчера...
                </p>
                <div className="one_card__imgvp">
                  <img src="./public/list_2.png" alt="" />
                  <p className="one_card__p">Пепелац Ньюс 07:35</p>
                </div>
              </div>
            </div>
            <div className="two_items qwert">
              <img src="../public/list3.png" alt="" />
              <div>
                <h2 className="two_items_heading">
                  Halo Infinite сравнили на Xbox One, Xbox One X, Xbox Series S
                  и Xbox Series X
                </h2>
                <p className="two_items_paragraph">
                  Ютубер с канала ElAnalistaDeBits сравнил Halo Infinite на
                  консолях Xbox One, Xbox One X, Xbox Series S и Xbox Series X.
                  Графика впечатляет на всех платформах. Также отмечается...
                </p>
                <div className="one_card__imgvp">
                  <img src="./public/list_3.png" alt="" />
                  <p className="one_card__p">Клуб DNS 15:33</p>
                </div>
              </div>
            </div>
            <div className="two_items qwert">
              <img src="../public/list4.png" alt="" />
              <div>
                <h2 className="two_items_heading">
                  В Узбекистане показали тюнинговые варианты моделей Lacetti,
                  Cobalt, Nexia и Spark
                </h2>
                <p className="two_items_paragraph">
                  «В сети наши потребители обсуждали тему сильного преобладания
                  белого цвета в модельном ряду UzAuto Motors. Почему вы не
                  делаете двухцветные автомобили? Этот вопрос был...
                </p>
                <div className="one_card__imgvp">
                  <img src="../public/list_4.png" alt="" />
                  <p className="one_card__p">Sputnik Узбекистан 18:43</p>
                </div>
              </div>
            </div>
            <div className="two_items qwert">
              <img src="../public/list5.png" alt="" />
              <div>
                <h2 className="two_items_heading">
                  Время автономной работы iPhone 13 Pro Max стало рекордным для
                  смартфонов Apple
                </h2>
                <p className="two_items_paragraph">
                  Линейка смартфонов iPhone 13 от Apple была презентована на
                  прошлой неделе. Прием предзаказов на устройство стартовал 22
                  сентября, а 24 сентября новинка появилась в магазинах.
                </p>
                <div className="one_card__imgvp">
                  <img src="../public/list_5.png" alt="" />
                  <p className="one_card__p">iReactor 12:25</p>
                </div>
              </div>
            </div>
            <div className="two_items qwert">
              <img src="../public/list6.png" alt="" />
              <div>
                <h2 className="two_items_heading">
                  Криптобиржа Huobi закрыла регистрацию пользователей из Китая
                </h2>
                <p className="two_items_paragraph">
                  Крупнейшая в Китае биржа для торговли биткоинами Huobi
                  приостановила регистрацию пользователей из КНР. Ранее местный
                  Центробанк назвал нелегальными все транзакции...
                </p>
                <div className="one_card__imgvp">
                  <img src="../public/list_6.png" alt="" />
                  <p className="one_card__p">Компания 11:35</p>
                </div>
              </div>
            </div>
            <div className="two_items qwert">
              <img src="../public/list7.png" alt="" />
              <div>
                <h2 className="two_items_heading">
                  В Узбекистане пройдет международный конкурс молодых
                  кинематографистов «Кино за 5 дней»
                </h2>
                <p className="two_items_paragraph">
                  В Узбекистане 22 сентября стартовал конкурс молодых
                  кинематографистов «Кино за пять дней». Мероприятие проходит в
                  рамках Ташкентского Международного...
                </p>
                <div className="one_card__imgvp">
                  <img src="../public/list_7.png" alt="" />
                  <p className="one_card__p">Фергана 15:44</p>
                </div>
              </div>
            </div>
            <div className="two_items qwert">
              <img src="../public/list8.png" alt="" />
              <div>
                <h2 className="two_items_heading">
                  Илон Маск принял участие во Всемирной сетевой конференции в
                  Китае
                </h2>
                <p className="two_items_paragraph">
                  Илон Маск (Elon Musk, Руководитель фирмы Tesla и других
                  проектов) уже второй раз за полторы недели обратился к
                  китайским правящим кругам и гражданам.
                </p>
                <div className="one_card__imgvp">
                  <img src="../public/two_small4.png" alt="" />
                  <p className="one_card__p">FBM.ru 22:23</p>
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
              Узбекистан утвердил соглашение о содействии занятости в странах
              СНГ
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
              <img className="olmos_img" src="../public/listOlmos.png" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default List;
