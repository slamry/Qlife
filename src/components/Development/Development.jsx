import { Box, Grid, Typography } from "@mui/material";
import s from "./Development.module.css";

const Development = () => {
  return (
    <Box className={s.wrapp}>
      <Grid container className={s.grid}>
        <Grid item className={s.backr}>
          <Typography className={s.title}>
            Наша игра уже в нескольких странах и мы активно развиваем ее по
            всему миру!
          </Typography>
        </Grid>
        <Grid item className={s.cards_wrapp}>
          <Box
            className={s.card_wrapp}
            sx={{ transform: "rotate(5deg)", mr: "200px" }}
          >
            <img src={require("./img/city.png")} alt="" className={s.image} />
            <Typography className={s.card_t}>Более 130 городов</Typography>
          </Box>
          <Box
            className={s.card_wrapp}
            sx={{ transform: "rotate(-5deg)", mr: "200px" }}
          >
            <img src={require("./img/ppl.png")} alt="" className={s.image} />
            <Typography className={s.card_t}>Более 2400 человек</Typography>
          </Box>
          <Box className={s.card_wrapp} sx={{ transform: "rotate(5deg)" }}>
            <img src={require("./img/game.png")} alt="" className={s.image} />
            <Typography className={s.card_t}>Более 300 игр в месяц</Typography>
          </Box>
          <svg>
            <path
              d="M 200, 30 C 300, 0 320, 0, 400, 30"
              stroke="#a6c954"
              fill="transparent"
              strokeDasharray="10"
              strokeWidth="5"
            />
            <circle cx="200" cy="30" r="10" fill="#a6c954" />
            <circle cx="400" cy="30" r="10" fill="#a6c954" />
          </svg>
          <svg>
            <path
              d="M 600, 200 C 670, 230 700, 230, 790, 200"
              stroke="#a6c954"
              fill="transparent"
              strokeDasharray="10"
              strokeWidth="5"
            />
            <circle cx="600" cy="200" r="10" fill="#a6c954" />
            <circle cx="790" cy="200" r="10" fill="#a6c954" />
          </svg>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Development;
