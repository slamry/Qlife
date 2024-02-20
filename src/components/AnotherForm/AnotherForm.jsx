import { Grid, Typography, Box } from "@mui/material";
import s from "./AnotherForm.module.css";

const AnotherForm = () => {
  return (
    <Box>
      <Grid container className={s.wrapp}>
        <Grid item xs={7} className={s.form_wrapp} id="form">
          <Box className={s.colored}>
            <iframe
              title="form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSd0RleaOAAZuypfgV654ozcNhUzNvY3w7v2cyFrAp8QHrtmXQ/viewform?embedded=true"
              frameBorder="0"
              style={{
                width: "600px",
                height: "1000px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Загрузка…
            </iframe>
          </Box>
          <img className={s.cubes} alt="" src={require("./img/cubes.png")} />
        </Grid>
        <Grid item xs={5} className={s.content_wrapp}>
          <Typography className={s.title}>
            Хватит существовать без плана!
          </Typography>
          <Typography className={s.content}>
            Хотите узнать, чего вам не хватает, чтобы жить в гармонии с собой и
            достигать целей?
          </Typography>
          <img className={s.game} alt="" src={require("./img/game.png")} />
          <img className={s.apple} alt="" src={require("./img/apple.png")} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AnotherForm;
