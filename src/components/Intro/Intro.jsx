import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "./Intro.module.css";
import Menu from "./Menu/Menu";
import { useState } from "react";

const Intro = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <Box>
      <Menu
        isMenuVisible={isMenuVisible}
        closeMenu={() => {
          setIsMenuVisible(false);
          document.body.style.overflow = "";
        }}
        visibleStyle={{ right: "0px" }}
        hiddenStyle={{ right: "-500px" }}
      />
      <Grid container className={styles.container}>
        <Grid item xs={6}>
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
          <img className={styles.game} alt="" src={require("./img/game.png")} />
          <img
            className={styles.text_circle}
            alt=""
            src={require("./img/text.png")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
