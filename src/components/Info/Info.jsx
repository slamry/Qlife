import { Box, Grid, Typography } from "@mui/material";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <Box className={styles.wrapp}>
      <Grid container>
        <Grid item xs={6}>
          <Typography className={styles.ql}>Quality life</Typography>
          <Typography className={styles.text_under_ql}>
            Охватывает все сферы жизни. Во время трансформационной игры вы
            погружаетесь в “параллельную” реальность, в которой проживаете жизнь
            со стороны
          </Typography>
        </Grid>
        <Grid item xs={6} className={styles.images}>
          <img className={styles.mbag} src={require("./img/mbag.png")} alt="" />
          <img className={styles.star} src={require("./img/star.png")} alt="" />
        </Grid>
      </Grid>
      <Grid container className={styles.cards_wrapp}>
        <Grid item className={styles.card1} xs={4}>
          <Typography className={styles.title}>
            Игра помогает понять:
          </Typography>
          <Typography className={styles.content}>
            какие сферы жизни тянут вас вниз
          </Typography>
        </Grid>
        <Grid item className={styles.card2} xs={4}>
          <Typography className={styles.title}>
            Игра помогает понять:
          </Typography>
          <Typography className={styles.content}>
            какие психологические установки мешают развитию
          </Typography>
        </Grid>
        <Grid item className={styles.card3} xs={4}>
          <Typography className={styles.title}>
            Игра помогает понять:
          </Typography>
          <Typography className={styles.content}>
            как изменить свое отношение к жизни и начать играть по своим
            правилам
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
