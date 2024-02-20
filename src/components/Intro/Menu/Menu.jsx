import { Box, Link } from "@mui/material";
import s from "./Menu.module.css";

const Menu = ({ isMenuVisible, closeMenu }) => {
  function handleOnClick(id) {
    closeMenu();
    document.getElementById(`${id}`).scrollIntoView();
  }
  return (
    <Box>
      {console.log(isMenuVisible)}
      {isMenuVisible ? (
        <Box className={s.modal} onClick={closeMenu}>
          <Box
            className={s.menu_wrapp_visible}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Box className={s.close_butt} onClick={closeMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="-10 -10 40 40"
              >
                <path
                  d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
                  fill="white"
                  fill-rule="evenodd"
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
      ) : (
        <Box
          className={s.menu_wrapp}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
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
      )}
    </Box>
  );
};

export default Menu;
