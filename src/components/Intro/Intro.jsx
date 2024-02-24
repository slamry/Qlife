import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "./Intro.module.css";
import Menu from "./Menu/Menu";
import { useState } from "react";
import useWindowSize from "../common/useWindowSize/useWindowSize";

const Intro = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  // eslint-disable-next-line
  const { width, height } = useWindowSize();

  return (
    <Box position={"relative"}>
      <Menu
        isMenuVisible={isMenuVisible}
        closeMenu={() => {
          setIsMenuVisible(false);
          document.body.style.overflow = "";
        }}
        visibleStyle={{ right: "0%" }}
        hiddenStyle={{ right: "-100%" }}
      />
      {width > 957 ? (
        <Grid container className={styles.container}>
          <Grid item xs={6}>
            <Typography color={"white"} fontSize={"7px"}>
              {window.innerWidth}
            </Typography>
            <Typography color="primary" className={styles.learn}>
              Узнай новое о себе за веселой игрой
            </Typography>
            <Typography className={styles.ql}>Quality life</Typography>
            <Typography className={styles.become}>
              стань новой версией себя!
            </Typography>
            <Box className={styles.transf_wrapp}>
              <Typography className={styles.transf_game}>
                Трансформационная игра, которая покажет, каким сферам жизни
                уделить внимание, чтобы достичь жизненного баланса
              </Typography>
            </Box>
            <Box>
              <Button
                className={styles.butt}
                onClick={() =>
                  document
                    .getElementById("form")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Записаться на игру
                <img
                  className={styles.arrow}
                  src={require("./img/arrow.png")}
                  alt=""
                />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6} position={"relative"}>
            <Box
              className={styles.menu_butt}
              onClick={() => setIsMenuVisible(true)}
            >
              <svg viewBox="0 0 17 17">
                <g>
                  <rect fill="#fff" height="1" width="11" x="3" y="7.5" />
                  <rect fill="#fff" height="1" width="11" x="3" y="4.5" />
                  <rect fill="#fff" height="1" width="11" x="3" y="10.5" />
                </g>
              </svg>
            </Box>
            <Box className={styles.game_wrapp}>
              <img
                className={styles.game}
                alt=""
                src={require("./img/game.png")}
              />
            </Box>
            <img
              className={styles.text_circle}
              alt=""
              src={require("./img/text.png")}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid container className={styles.container}>
          <Grid item xs={12}>
            <Typography color={"white"} fontSize={"7px"}>
              {window.innerWidth}
            </Typography>
            <Typography color="primary" className={styles.learn}>
              Узнай новое о себе за веселой игрой
            </Typography>
            <Box
              className={styles.menu_butt}
              onClick={() => setIsMenuVisible(true)}
            >
              <svg viewBox="0 0 17 17">
                <g>
                  <rect fill="#fff" height="1" width="11" x="3" y="7.5" />
                  <rect fill="#fff" height="1" width="11" x="3" y="4.5" />
                  <rect fill="#fff" height="1" width="11" x="3" y="10.5" />
                </g>
              </svg>
            </Box>
            <Typography className={styles.ql}>Quality life</Typography>
            <Typography className={styles.become}>
              стань новой версией себя!
            </Typography>
            <Box className={styles.game_wrapp}>
              <img
                className={styles.game}
                alt=""
                src={require("./img/game.png")}
              />
            </Box>
            <img
              className={styles.text_circle}
              alt=""
              src={require("./img/text.png")}
            />
            <Box className={styles.transf_wrapp}>
              <Typography className={styles.transf_game}>
                Трансформационная игра, которая покажет, каким сферам жизни
                уделить внимание, чтобы достичь жизненного баланса
              </Typography>
            </Box>
            <Box>
              <Button
                className={styles.butt}
                onClick={() =>
                  document
                    .getElementById("form")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Записаться на игру
                <img
                  className={styles.arrow}
                  src={require("./img/arrow.png")}
                  alt=""
                />
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Intro;
