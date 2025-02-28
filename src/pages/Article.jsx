import Footer from "../components/Footer";
import Header from "../components/Header";

function Article() {
  return (
    <>
      <Header />
      <main className="main container">
        <div className="left_right_wrapper">
          <div className="left_card">
            <div className="one_card__imgvp">
              <img src="./public/two_small4.png" alt="" />
              <p className="one_card__p">FBM.ru 22:23</p>
            </div>
            <h2 className="left_card_heading">
              Илон Маск принял участие во Всемирной сетевой конференции в Китае
            </h2>
            <img src="./public/articleimg.png" alt="" />
            <p className="left_card_paragraph">
              Илон Маск (Elon Musk, Руководитель фирмы Tesla и других проектов)
              уже второй раз за полторы недели обратился к китайским правящим
              кругам и гражданам. В видеоролике он уверил их в своей готовности
              инвестировать средства в развитие и расширять бизнес на территории
              этой страны. Особое внимание будет уделяться небезопасности
              обрабатываемых данных.{" "}
            </p>
            <p className="left_card_paragraph">
              Они будут храниться только в самом Китае и поэтому будут доступны
              правительству Поднебесной в любой момент.
            </p>
            <p className="left_card_paragraph">
              Новые заявления Илон Маск сделал во время видеообращения к
              аудитории мероприятия World Internet Conference, которое прошло в
              конце недели в Поднебесной. Компанию ему составили руководители
              Cisco Systems (Чак Роббинс), Intel (Пэт Гелсингер) и Qualcomm
              (Кристиано Амон), а интересы бизнеса Китайской Народной Республики
              представляли руководители Alibaba и Xiaomi.{" "}
            </p>
            <p className="left_card_paragraph">
              Открывал мероприятие Лю Хэ (Liu He, Вице-премьер Госсовета КНР),
              который привёл слова Си Цзиньпина (Xi Jinping) о стремлении
              Поднебесной работать со всеми державами над созданием прозрачной
              цифровой экономики.
            </p>
            <p className="left_card_paragraph">
              В ближайшее время Tesla собирается не только сделать шире объёмы
              производства автомобилей на электрической тяге в шанхайском
              филиале, но и разработать силами местной студии недорогую модель
              электрического автомобиля (стоимостью менее 25 000 долларов).
            </p>
            <p className="left_card_paragraph">
              {" "}
              Уже в настоящий момент собранные в Китайской Народной Республике
              электрокары Tesla Model Y и Model 3 поставляются на экспорт в
              Европу.
            </p>
            <div className="article_discription"></div>
          </div>
          <div className="right_card article_right_Card">
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
            <hr className="right_card_discription" />
            <h3 className="right_card_headingh">
              В Самаркандской области произошел пожар в торговом центре
            </h3>
            <p className="right_card_paragraph">UPL24 23:52</p>
            <div>
              <img
                className="olmos_img"
                src="./two_olmos_img.png"
                alt=""
                width={393}
                height={338}
              />{" "}
            </div>
          </div>
        </div>
        <div className="interesam">
          <h2 className="interesam_heading">По вашим интересам</h2>
          <div className="interesam_3card">
            <div className="interesem_card">
              <h3 className="interesem_card_heading">
                Стали известны ёмкости аккумуляторов всех моделей iPhone 13
              </h3>
              <p className="interesam_card_paragraph">
                Во время презентации iPhone 13 Apple придала большое значения...
              </p>
              <div className="one_card__imgvp">
                <img src="./public/4-card.png" alt="" />
                <p className="one_card__p">Digger.ru 14:25</p>
              </div>
            </div>
            <div className="interesem_card">
              <h3 className="interesem_card_heading">
                Nature: ученые смогли доказать природное происхождение
                коронавируса SARS-CoV-2
              </h3>
              <p className="interesam_card_paragraph">
                Во время презентации iPhone 13 Apple придала большое значение...
              </p>
              <div className="one_card__imgvp">
                <img src="./public/5-card.png" alt="" />
                <p className="one_card__p">Lenta.ru 10:54</p>
              </div>
            </div>
            <div className="interesem_card">
              <h3 className="interesem_card_heading">
                Китайская марка JAC повысила цены на лифтбек и пикап в <br />{" "}
                России
              </h3>
              <p className="interesam_card_paragraph">
                Две модели китайского бренда JAC из пяти, представленных на
                российском...
              </p>
              <div className="one_card__imgvp">
                <img src="./public/6-card.png" alt="" />
                <p className="one_card__p">Тарантас Ньюс 10:44</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Article;
