import { Grid, Typography, Box } from "@mui/material";
import s from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <Grid container className={s.grid_c}>
      <Grid item xs={5.5}>
        <Typography className={s.hi_text}>
          “Всем привет! Меня зовут Лилия Савченко”
        </Typography>
        <Typography className={s.desc}>
          Несколько десятков лет я провожу в компании единомышленников, которые
          находят себя
        </Typography>
        <Typography className={s.content}>
          Во время работы появился запрос — создать пространство, в котором
          можно показать развитие качественной жизни, чтобы каждый со стороны
          увидел важность баланса.
          <br />
          Так родилась идея создания трансформационной игры. Ее цель которой -
          показать людям их склонности, триггеры и установки, которые мешают
          дойти до цели, нарушая баланс жизненных сфер.
        </Typography>
        <Typography className={s.under_content}>
          Если вы хотите жить качественной жизнью, научитесь равномерно
          заполнять все ее сферы. В этом вам поможет игра Quality life!
        </Typography>
        <Box className={s.rect}>
          <Typography className={s.yougot}>Вы получите:</Typography>
          <Typography className={s.point}>
            <img
              src={require("./img/marker.png")}
              alt=""
              className={s.marker}
            />
            Новое окружение
          </Typography>
          <Typography className={s.point}>
            <img
              src={require("./img/marker.png")}
              alt=""
              className={s.marker}
            />
            Интересные знакомства
          </Typography>
          <Typography className={s.point}>
            <img
              src={require("./img/marker.png")}
              alt=""
              className={s.marker}
            />
            Диагностику баланса сфер своей жизни в легкой игровой форме
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6.5} className={s.grid_images}>
        <img src={require("./img/mbag.png")} alt="" className={s.mbag} />
        <Box className={s.text_wrapp}>
          <Typography className={s.text}>
            Приходите к нам на игру, чтобы провести время весело и с пользой!
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
