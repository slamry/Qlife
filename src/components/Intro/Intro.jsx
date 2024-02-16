import { Box, Button, Grid, Typography } from "@mui/material";
import styles from "./Intro.module.css";

const Intro = () => {
  return (
    <Box>
      <Box>{/* menu button!!! */}</Box>
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
            <Button className={styles.butt}>
              Записаться на игру{" "}
              <img
                className={styles.arrow}
                src={require("./img/arrow.png")}
                alt=""
              />{" "}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img className={styles.game} alt="" src={require("./img/game.png")} />
          <img className={styles.text_circle} alt="" src={require("./img/text.png")} />          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Intro;
