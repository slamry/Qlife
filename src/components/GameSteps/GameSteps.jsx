import { Box, Typography } from "@mui/material";
import styles from "./GameSteps.module.css";
import useWindowSize from "../common/useWindowSize/useWindowSize";

const GameSteps = () => {
  // eslint-disable-next-line
  const { width, height } = useWindowSize();
  // alert(width);
  return (
    <Box className={styles.wrapp} id="gsteps">
      <Typography className={styles.title}>Как проходит игра</Typography>
      <Box className={styles.rect_wrapp} id={styles.rect1}>
        <Box className={styles.rect}>
          <Typography className={styles.content_t}>
            Участники разыгрывают карты «Жизненные возможности», связанные со
            сферами колеса баланса. Комбинация карт дает разный набор монет и
            победных фишек — иммунитета, капитала и долголетия.
          </Typography>
        </Box>
        <img
          className={styles.image}
          id={styles.hand}
          src={require("./img/hand.png")}
          alt=""
        />
      </Box>
      <svg
        id={styles.svg1}
        className={styles.svg}
        viewBox={
          width > 1236
            ? "70 -115 1000 1000"
            : width > 1126
            ? "-50 -200 1200 1000"
            : width > 983
            ? "-50 -300 1200 1000"
            : "140 -270 900 1000"
        }
      >
        <path
          d={"M 675, 10 C 800, 0 900, 0, 900, 130"}
          stroke="#a6c954"
          fill="transparent"
          strokeDasharray="10"
          strokeWidth="5"
        />
        <circle cx="675" cy="10" r="10" fill="#a6c954" />
        <circle cx="900" cy="130" r="10" fill="#a6c954" />
      </svg>
      <Box className={styles.rect_wrapp} id={styles.rect2}>
        <Box className={styles.rect}>
          <Typography className={styles.content_t}>
            Цель игры — соблюдать баланс этих фишек, но игра, как и жизнь, будет
            всячески мешать это сделать.
          </Typography>
        </Box>
        <img
          className={styles.image}
          id={styles.shoe}
          src={require("./img/shoe.png")}
          alt=""
        />
      </Box>
      <svg
        id={styles.svg2}
        className={styles.svg}
        viewBox={
          width > 1236
            ? "130 -220 1000 1000"
            : width > 1126
            ? "0 -380 1200 1000"
            : width > 983
            ? "120 -490 1200 1000"
            : "360 -400 900 1000"
        }
      >
        <path
          d={"M 720, 60 C 500,40 431,57 400, 210"}
          stroke="#a6c954"
          fill="transparent"
          strokeDasharray="10"
          strokeWidth="5"
        />
        <circle cx="720" cy="60" r="10" fill="#a6c954" />
        <circle cx="400" cy="210" r="10" fill="#a6c954" />
      </svg>
      <Box className={styles.rect_wrapp} id={styles.rect3}>
        <Box className={styles.rect}>
          <Typography className={styles.content_t}>
            Итоговый набор этих фишек покажет, какая сфера жизни отстает у
            игрока, а какая у него «перекачана».
          </Typography>
        </Box>
        <img
          id={styles.apple}
          className={styles.image}
          style={width <= 650 ? { display: "none" } : { display: "" }}
          src={require("./img/apple.png")}
          alt=""
        />
      </Box>
      <svg
        id={styles.svg3}
        className={styles.svg}
        viewBox={
          width > 1236
            ? "110 -390 1000 1000"
            : width > 1126
            ? "40 -630 1200 1000"
            : width > 983
            ? "40 -770 1200 1000"
            : "70 -600 900 1000"
        }
      >
        <path
          d={"M 520, 80 C 650,40 770,40 830, 210"}
          stroke="#a6c954"
          fill="transparent"
          strokeDasharray="10"
          strokeWidth="5"
        />
        <circle cx="520" cy="80" r="10" fill="#a6c954" />
        <circle cx="825" cy="210" r="10" fill="#a6c954" />
      </svg>
      <Box className={styles.rect_wrapp} id={styles.rect4}>
        <Box className={styles.rect}>
          <Typography className={styles.content_t}>
            Победные фишки покажут, сколько проживет персонаж игрока, какое у
            него будет здоровье и сможет ли он уйти на пенсию раньше и быть
            финансово обеспеченным.
          </Typography>
        </Box>
        <img
          id={styles.apple}
          className={styles.image}
          style={width > 650 ? { display: "none" } : { display: "" }}
          src={require("./img/apple.png")}
          alt=""
        />
        <img
          id={styles.mbag}
          className={styles.image}
          src={require("./img/mbag.png")}
          alt=""
        />
      </Box>
      <svg
        id={styles.svg4}
        className={styles.svg}
        viewBox={
          width > 1236
            ? "90 -570 1000 1000"
            : width > 1126
            ? "-20 -870 1200 1500"
            : width > 983
            ? "-20 -1100 1200 1500"
            : "220 -850 900 1500"
        }
      >
        <path
          d={"M 580, 80 C 500,60 400,100 398, 220"}
          stroke="#a6c954"
          fill="transparent"
          strokeDasharray="10"
          strokeWidth="5"
        />
        <circle cx="580" cy="80" r="10" fill="#a6c954" />
        <circle cx="398" cy="220" r="10" fill="#a6c954" />
      </svg>
      <Box className={styles.rect_wrapp} id={styles.rect5}>
        <Box className={styles.rect}>
          <Typography className={styles.content_t}>
            В конце игроки анализируют результаты своих действий за игру. Вместе
            с ведущим обсуждают, как можно было добиться лучшего результата и к
            чему может привести перекос в колесе баланса. А еще участники
            делятся реальными историями из своей жизни, которые можно применить
            на практике.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GameSteps;
