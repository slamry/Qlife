import {
  Grid,
  Typography,
  Input,
  FormControl,
  FormHelperText,
  Button,
  Box,
} from "@mui/material";
import s from "./Form.module.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(value) {
    console.log(value);
  }

  return (
    <Grid container className={s.wrapp}>
      <Grid item xs={6} className={s.content_wrapp}>
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
      <Grid item xs={6} className={s.form_wrapp}>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form_} id="form">
          <Typography className={s.f_title}>
            Оставьте заявку, и мы вышлем дату, а также место проведения игры в
            вашем городе
          </Typography>
          <FormControl className={s.form_control}>
            <Input
              inputProps={{ maxLength: 100, minLength: 3 }}
              placeholder="Фамилия Имя Отчество"
              className={s.input}
              {...register("user_name", {
                required: "Обязательно для заполнения",
              })}
            />
            <FormHelperText error={!!errors.user_name}>
              {errors.user_name?.message}
            </FormHelperText>
          </FormControl>
          <FormControl className={s.form_control}>
            <Input
              inputProps={{ maxLength: 100, minLength: 3 }}
              placeholder="Номер телефона"
              className={s.input}
              {...register("user_pnumber", {
                required: "Обязательно для заполнения",
                pattern: {
                  value: /^\+\d{1,3}-\d{2}-\d{7}$/,
                  message:
                    "Введите корректный номер телефона в формате +XXX-XX-XXXXXXX",
                },
              })}
            />
            <FormHelperText error={!!errors.user_pnumber}>
              {errors.user_pnumber?.message}
            </FormHelperText>
          </FormControl>
          <FormControl className={s.form_control}>
            <Input
              inputProps={{ maxLength: 100, minLength: 3 }}
              placeholder="Город"
              className={s.input}
              {...register("user_city", {
                required: "Обязательно для заполнения",
              })}
            />
            <FormHelperText error={!!errors.user_city}>
              {errors.user_city?.message}
            </FormHelperText>
          </FormControl>
          <FormControl className={s.form_control}>
            <Input
              inputProps={{ maxLength: 100, minLength: 3 }}
              placeholder="Электронная почта"
              className={s.input}
              {...register("user_email", {
                required: "Обязательно для заполнения",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Введите корректный адрес электронной почты",
                },
              })}
            />
            <FormHelperText error={!!errors.user_email}>
              {errors.user_email?.message}
            </FormHelperText>
          </FormControl>
          <Box className={s.butt_wrapp}>
            <Button className={s.butt} type="submit">
              Записаться на игру
            </Button>
          </Box>
        </form>
        <img className={s.cubes} alt="" src={require("./img/cubes.png")} />
      </Grid>
    </Grid>
  );
};

export default Form;
