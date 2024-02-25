import {
  Box,
  Grid,
  Typography,
  // Input,
  // FormControl,
  // FormHelperText,
  // Button,
} from "@mui/material";
import s from "./Form.module.css";
import useWindowSize from "../common/useWindowSize/useWindowSize";

// import { useForm } from "react-hook-form";

const Form = () => {
  // eslint-disable-next-line
  const { width, height } = useWindowSize();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // async function onSubmit(value) {
  //   
  //   }
  // }

  return (
    <Grid container className={s.wrapp}>
      {width > 957 ? (
        <Grid item xs={4.5} className={s.content_wrapp}>
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
      ) : (
        <Grid item xs={12} className={s.content_wrapp}>
          <Box className={s.text_wrapp}>
            <Typography className={s.title}>
              Хватит существовать без плана!
            </Typography>
            <Typography className={s.content}>
              Хотите узнать, чего вам не хватает, чтобы жить в гармонии с собой
              и достигать целей?
            </Typography>
          </Box>
          <img className={s.apple} alt="" src={require("./img/apple.png")} />
        </Grid>
      )}
      {width > 957 ? (
        <Grid item xs={7.5} className={s.form_wrapp} id="form">
          <iframe
            scrolling="no"
            title="form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd0RleaOAAZuypfgV654ozcNhUzNvY3w7v2cyFrAp8QHrtmXQ/viewform?embedded=true"
            frameBorder="0"
            className={s.form}
          >
            Загрузка…
          </iframe>
          <img className={s.cubes} alt="" src={require("./img/cubes.png")} />
        </Grid>
      ) : (
        <Grid item xs={12} className={s.form_wrapp} id="form">
          <iframe
            scrolling="no"
            title="form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd0RleaOAAZuypfgV654ozcNhUzNvY3w7v2cyFrAp8QHrtmXQ/viewform?embedded=true"
            frameBorder="0"
            className={s.form}
          >
            Загрузка…
          </iframe>
          <img className={s.cubes} alt="" src={require("./img/cubes.png")} />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img className={s.game} alt="" src={require("./img/game.png")} />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default Form;
