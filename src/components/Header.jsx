import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav container ">
          <div className="wrapper_list">
            <img className="site-logo" src="./site-logo.svg" alt="" />
            <li className="wrapper_item">
              <span className="wraper_item_span">$</span> 10137.2
            </li>
            <li className="wrapper_item">
              <span className="wraper_item_span">P</span> 138.26
            </li>
          </div>
          <div className="wrapper">
            <div className="search_wrapper">
              <input
                className="wrapper_input"
                type="search"
                placeholder="Поиск"
              />
            </div>
            <img className="wrapper_img" src="./public/uz-ru.png" alt="" />
            <button className="wrapper_btn">Войти</button>
          </div>
        </nav>
      </header>
      <div className="container nav_link">
        <li className="nav_link_item">
          <NavLink to={"/"}>HOME</NavLink>
        </li>
        <li className="nav_link_item">
          <NavLink to={"/list"}>LIST</NavLink>
        </li>
        <li className="nav_link_item">
          <NavLink to={"/article"}>ARTICLE</NavLink>
        </li>
        <li className="nav_link_item">
          <NavLink to={"/contact"}>CONTACT</NavLink>
        </li>
        <li className="nav_link_item">Главное</li>
        <li className="nav_link_item">Экономика</li>
        <li className="nav_link_item">Общество</li>
        <li className="nav_link_item">Технологии</li>
        <li className="nav_link_item">Спорт</li>
        <li className="nav_link_item">Культура</li>
        <li className="nav_link_item">Происшеств</li>
        <li className="nav_link_item">Наука</li>
      </div>
      <div className="nav_discription container"></div>
    </>
  );
}

export default Header;
