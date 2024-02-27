import { Box, Typography, Button, Grid } from "@mui/material";
import s from "./JoinUs.module.css";
import useWindowSize from "../common/useWindowSize/useWindowSize";

const JoinUs = () => {
  // eslint-disable-next-line
  const { width, height } = useWindowSize();
  return (
    <Grid container className={s.wrapp}>
      <Grid item xs={width > 957 ? 6 : 12} className={s.content_item}>
        <Box className={s.rect_wrapp}>
          <Box className={s.rect}>
            <img src={require("./img/pluse.png")} alt="" className={s.pluse} />
            <Typography className={s.rect_t}>
              Хотите узнать, чего вам не хватает, чтобы жить в гармонии с собой
              и достигать целей?
            </Typography>
          </Box>
        </Box>
        <Box className={s.butt_wrapp}>
          <Button
            className={s.butt}
            onClick={() =>
              document
                .getElementById("form")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Записаться на игру
            <svg viewBox="-300 -1200 1400 1500" className={s.arrow}>
              <path
                d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"
                fill="#fff"
              />
              <circle
                cx="480"
                cy="-450"
                r="500"
                stroke="#fff"
                fill="transparent"
                strokeWidth="50"
              />
            </svg>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={width > 957 ? 6 : 12}>
        <Box className={s.game_wrapp}>
          <img src={require("./img/game.png")} alt="" className={s.game} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default JoinUs;
