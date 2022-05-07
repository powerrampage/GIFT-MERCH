import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import { isMobile } from "react-device-detect";
import "../../assets/styles/layout/header.scss"
// ICONS
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as SearchBaseIcon } from "../../assets/icons/search-base.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/times-circle.svg";
// IMAGES
import preferenceLogo from "../../assets/images/header/preference.png";
import heroImage1 from "../../assets/images/header/hero/01.png";
import heroImage2 from "../../assets/images/header/hero/02.png";

export const Header = () => {
  // BURGER
  const header = useRef<HTMLElement>(null)
  const [isMenuActive, setMenuActive] = useState(false);
  const handleBurger = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    setMenuActive(!isMenuActive);
    document.body.classList.toggle('active')
    e.stopPropagation();
  }
  const handleHeaderNavigation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  if (isMenuActive) {
    document.body.addEventListener("click", () => {
      setMenuActive(false);
      document.body.classList.remove('active')
    })
  }

  // SEARCH ICON
  const [searchBarActive, setSearchBarActive] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);
  function handleSearch() {
    setSearchBarActive(!searchBarActive);
    if (searchBarActive) {
      if (searchInput && searchInput.current) searchInput.current.focus();
    }
  }

  // SUBMENU
  const [isSubmenuActive, setSubmenuActive] = useState(false);
  const [isSubmenuInsideActive, setSubmenuInsideActive] = useState(false);
  const handleSubmenu = (e: React.MouseEvent<HTMLLIElement>) => {
    if (isMobile) {
      e.stopPropagation();
      setSubmenuActive(!isSubmenuActive);
    }
  };
  if (isMobile) {
    window.onclick = function () {
      setSubmenuActive(false);
    };
  }
  const handleSubmenuInside = (e: React.MouseEvent<HTMLLIElement>) => {
    if (isMobile) {
      setSubmenuInsideActive(!isSubmenuInsideActive);
      e.stopPropagation();
    }
  };

  const [headerScroll, setHeaderScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setHeaderScroll(window.pageYOffset > 50)
    );
  }, []);
  const headerAddBg: React.CSSProperties = {
    background: isMenuActive ? "#A79EA7" : "",
  };
  return (
    <header className="header" ref={header} style={headerAddBg}>
      <div className="header__content">
        <div
          className={`header__top top-header${headerScroll ? " sticky" : ""}`}
        >
          <div className="top-header__container">
            <div className="top-header__inner">
              <Link to="/" className="header__logo logo">
                GIFTS & MERCH
              </Link>

              <form
                className={`header__form search-header${searchBarActive ? " active" : ""
                  }`}
                action="#"
                method="get"
              >
                <button
                  className="search-header__btn"
                  type="submit"
                  aria-label="Search Button"
                >
                  <SearchIcon />
                </button>
                <input
                  onFocus={(e) => e.persist()}
                  ref={searchInput}
                  className="search-header__input"
                  type="search"
                  name="header-search"
                  placeholder="Поиск"
                  aria-label="Search"
                />
                <button
                  type="reset"
                  onClick={() => handleSearch()}
                  className={`search-header__back${searchBarActive ? " active" : ""
                    }`}
                >
                  <CloseIcon />
                </button>
              </form>

              <button
                className="header__searchIcon"
                onClick={() => handleSearch()}
              >
                <SearchBaseIcon />
              </button>
              <a
                data-da=".navigation-header,992,2"
                href="tel:998914105839"
                className="header__tel"
              >
                <Button title="+380 630 130 103" />
              </a>
              <Link to="/" className="header__user">
                <UserIcon />
              </Link>
              <div className="header__lang lang">
                <NavLink to="/" className="lang__item">
                  RU
                </NavLink>
                <span>/</span>
                <NavLink to="/eng" className="lang__item">
                  ENG
                </NavLink>
              </div>
              <div
                tabIndex={0}
                aria-pressed="false"
                role="button"
                className="header__burger burger"
                onClick={(e) => handleBurger(e)}
              >
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={(e) => handleHeaderNavigation(e)}
          className={`header__navigation navigation-header${isMenuActive ? " active" : ""
            }`}
        >
          {isMenuActive ? <button onClick={handleBurger} type="button" style={{ position: "absolute", top: "1rem", right: "1rem" }}><CloseIcon width={30} height={30} /></button> : null}
          <div className="navigation-header__container">
            <div className="navigation-header__inner">
              <nav className="header__menu menu-header">
                <ul className="menu-header__list">
                  <li>
                    <NavLink to="/a" className="menu-header__link">
                      Наборы
                    </NavLink>
                  </li>
                  <li
                    className="menu-header__toSub"
                    onClick={(e) => handleSubmenu(e)}
                  >
                    <NavLink to="/goods" className="menu-header__link">
                      Все товары
                    </NavLink>
                    <ul
                      className={`menu-header__submenu submenu${isSubmenuActive ? " active" : ""
                        }`}
                    >
                      <li>
                        <NavLink to="/" className="submenu__link">
                          Одежда
                        </NavLink>
                      </li>
                      <li
                        className="menu-header__toSub2"
                        onClick={(e) => handleSubmenuInside(e)}
                      >
                        <div className="submenu__link">Сумки и аксессуары</div>
                        <ul
                          onClick={() => setSubmenuActive(!isSubmenuActive)}
                          className={`submenu__inside inside-submenu${isSubmenuActive && isSubmenuInsideActive
                            ? " active"
                            : ""
                            }`}
                        >
                          <li>
                            <NavLink to="/" className="submenu__link">
                              -Рюкзак
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="submenu__link">
                              -Сумка/Экосумка
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="submenu__link">
                              -Бананка
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="submenu__link">
                              -Шапка
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="submenu__link">
                              -Кепка
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="submenu__link">
                              -Маска для сна
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="submenu__link">
                              -Защитная маска
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="submenu__link">
                              -Значки/Пины
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="submenu__link">
                              -Брелки
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/" className="submenu__link">
                              -Обложка на паспорт/тревелкейс/кардхолдер
                            </NavLink>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <NavLink to="/" className="submenu__link">
                          Для офиса
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className="submenu__link">
                          Посуда
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className="submenu__link">
                          Отдых
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className="submenu__link">
                          Вкусности
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/" className="submenu__link">
                          Электроника
                        </NavLink>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NavLink to="/sewing" className="menu-header__link">
                      Пошив
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/production" className="menu-header__link">
                      Производство
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/information" className="menu-header__link">
                      Информация
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <h1 className="navigation-header__title">
                Шопперы со скидкой - 25%
              </h1>
            </div>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <section className="header__hero hero-header">
                <div className="hero-header__container">
                  <div className="hero-header__inner">
                    <div className="hero-header__left">
                      <h1 className="hero-header__title">
                        Свежее дыхание в корпоративной жизни
                      </h1>
                      <p className="hero-header__text">
                        Ми вдосконалили процес замовлення продукції для того,
                        щоб Ви і Ваша компанія сконцентрувались на основних
                        задачах і досягали поставлених цілей.
                      </p>
                      <div className="header__preferences preferences-header">
                        <div className="preferences-header__item">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={preferenceLogo}
                            width="109"
                            height="94"
                            alt="Высокое качество ONLY"
                          />
                          <p>
                            Высокое качество <strong>ONLY</strong>
                          </p>
                        </div>
                        <div className="preferences-header__item">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={preferenceLogo}
                            width="109"
                            height="94"
                            alt="Высокое качество ONLY"
                          />
                          <p>
                            Поддержка менеджера <strong>24/7</strong>
                          </p>
                        </div>
                        <div className="preferences-header__item">
                          <img
                            loading="lazy"
                            decoding="async"
                            src={preferenceLogo}
                            width="109"
                            height="94"
                            alt="Высокое качество ONLY"
                          />
                          <p>
                            Выполнение заказа{" "}
                            <strong>в {"turbo".toUpperCase()}-режиме</strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="hero-header__right">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={heroImage1}
                        width="785"
                        height="610"
                        alt="heroImage"
                      />
                    </div>
                  </div>
                </div>
              </section>
            }
          ></Route>
          <Route path="sewing/*"
            element={
              <section className="header__hero hero-header hero-header_sec">
                <div className="hero-header__container">
                  <div className="hero-header__inner">
                    <div className="hero-header__left hero-header__left_sec">
                      <h1 className="hero-header__title">
                        Современный мерч создает современные бренды
                      </h1>
                      <p className="hero-header__text">
                        Почему? Потому что это ощутимо и это волнует. Это вовлекает, повышает осведомленность и вызывает эмоции. Наша команда всегда погружается в концепт заказа для того, чтобы предложить вам лучшее решение, при этом оптимизировать затраты. У нас широкий ассортимент  готовых моделей, так же изготовим любую продукцию по Вашему дизайну.
                      </p>
                    </div>
                    <div className="hero-header__right">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={heroImage2}
                        width="500"
                        height="300"
                        alt="heroImage"
                      />
                    </div>
                  </div>
                </div>
              </section>
            }
          ></Route>
        </Routes>
      </div>
    </header>
  );
};
