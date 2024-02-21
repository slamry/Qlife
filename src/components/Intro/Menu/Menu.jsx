import { Box, Link } from "@mui/material";
import s from "./Menu.module.css";

const Menu = ({ isMenuVisible, closeMenu, visibleStyle, hiddenStyle }) => {
  function handleOnClick(id) {
    closeMenu();
    document.getElementById(`${id}`).scrollIntoView();
  }

  isMenuVisible
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");

  return (
    <Box>
      <Box
        className={s.modal}
        onClick={closeMenu}
        style={isMenuVisible ? { display: "block" } : { display: "none" }}
      ></Box>
      <Box
        className={s.menu_wrapp}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={isMenuVisible ? visibleStyle : hiddenStyle}
      >
        <Box className={s.close_butt} onClick={closeMenu}>
          <svg viewBox="-10 -10 40 40">
            <path
              d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
              fill="white"
              fillRule="evenodd"
            />
          </svg>
        </Box>
        <Link
          href="#info"
          className={s.link}
          onClick={() => handleOnClick("info")}
        >
          О игре
        </Link>
        <Link
          href="#gsteps"
          className={s.link}
          onClick={() => handleOnClick("gsteps")}
        >
          Как проходит игра
        </Link>
        <Link
          href="#form"
          className={s.link}
          onClick={() => handleOnClick("form")}
        >
          Оставить заявку
        </Link>
        <Link
          href="#aboutus"
          className={s.link}
          onClick={() => handleOnClick("aboutus")}
        >
          О создателе
        </Link>
        <Link
          href="#contacts"
          className={s.link}
          onClick={() => handleOnClick("contacts")}
        >
          Контакты
        </Link>
      </Box>
    </Box>
  );
};

export default Menu;
