import { Grid, Typography, Box } from "@mui/material";
import s from "./AboutUs.module.css";
import useWindowSize from "../common/useWindowSize/useWindowSize";

const AboutUs = () => {
  // eslint-disable-next-line
  const { width, height } = useWindowSize();
  return (
    <Grid container className={s.grid_c}>
      <Grid item xs={width > 957 ? 6 : 12}>
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
        {width > 957 ? (
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
        ) : null}
      </Grid>
      {width > 957 ? (
        <Grid item xs={1} className={s.mbag_wrapp}>
          <img src={require("./img/mbag.png")} alt="" className={s.mbag} />
        </Grid>
      ) : null}
      <Grid item xs={width > 957 ? 5 : 12} className={s.grid_images}>
        <img src={require("./img/liliya.png")} alt="" className={s.liliya} />
        <Box className={s.text_wrapp}>
          <Typography className={s.text}>
            Приходите к нам на игру, чтобы провести время весело и с пользой!
          </Typography>
        </Box>
        {width > 957 ? null : (
          <Box sx={{display:'flex', flexWrap:'nowrap'}}>
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
            <Box className={s.mbag_wrapp}>
              <img src={require("./img/mbag.png")} alt="" className={s.mbag} />
            </Box>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default AboutUs;
