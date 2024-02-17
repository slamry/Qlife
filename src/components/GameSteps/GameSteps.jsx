import { Box, Typography } from "@mui/material";
import styles from "./GameSteps.module.css";

const GameSteps = () => {
  function calculateBezierPoints(
    screenWidth = window.innerWidth,
    screenHeight = window.innerHeight,
    startX,
    startY,
    control1X,
    control1Y,
    control2X,
    control2Y,
    endX,
    endY
  ) {
    const initialWidth = 1440; // Исходная ширина экрана
    const initialHeight = 900; // Исходная высота экрана

    const widthCoefficient = screenWidth / initialWidth; // Коэффициент изменения ширины
    const heightCoefficient = screenHeight / initialHeight; // Коэффициент изменения высоты

    const newStartX = startX * widthCoefficient;
    const newStartY = startY * heightCoefficient;
    const newControl1X = control1X * widthCoefficient;
    const newControl1Y = control1Y * heightCoefficient;
    const newControl2X = control2X * widthCoefficient;
    const newControl2Y = control2Y * heightCoefficient;
    const newEndX = endX * widthCoefficient;
    const newEndY = endY * heightCoefficient;

    const pathString = `M ${newStartX}, ${newStartY} C ${newControl1X}, ${newControl1Y} ${newControl2X}, ${newControl2Y}, ${newEndX}, ${newEndY}`;
    return pathString;
  }

  return (
    <Box className={styles.wrapp}>
      <Typography className={styles.title}>Как проходит игра</Typography>

      <Box
        className={styles.rect_wrapp}
        sx={{ pr: "45%", transform: "rotate(2deg)" }}
      >
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
        <svg id={styles.svg1}>
          <path
            d="M 740, 10 C 800, 0 900, 0, 902, 190"
            stroke="#a6c954"
            fill="transparent"
            strokeDasharray="10"
            strokeWidth="5"
          />
          <circle cx="740" cy="10" r="10" fill="#a6c954" />
        </svg>
      </Box>

      <Box
        className={styles.rect_wrapp}
        sx={{ pl: "55%", pt: "1%", transform: "rotate(357deg)" }}
      >
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
        <svg id={styles.svg2}>
          <path
            d="M 740, 60 C 500,40 431,57 395, 200"
            stroke="#a6c954"
            fill="transparent"
            strokeDasharray="10"
            strokeWidth="5"
          />
          <circle cx="900" cy="15" r="10" fill="#a6c954" />
          <circle cx="740" cy="60" r="10" fill="#a6c954" />
        </svg>
      </Box>

      <Box
        className={styles.rect_wrapp}
        sx={{ pr: "60%", pt: "1%", transform: "rotate(3deg)" }}
      >
        <Box className={styles.rect}>
          <Typography className={styles.content_t}>
            Итоговый набор этих фишек покажет, какая сфера жизни отстает у
            игрока, а какая у него «перекачана».
          </Typography>
        </Box>
        <img
          id={styles.apple}
          className={styles.image}
          src={require("./img/apple.png")}
          alt=""
        />
        <svg id={styles.svg3}>
          <path
            d="M 540, 80 C 650,40 770,40 833, 220"
            stroke="#a6c954"
            fill="transparent"
            strokeDasharray="10"
            strokeWidth="5"
          />

          <circle cx="400" cy="15" r="10" fill="#a6c954" />
          <circle cx="540" cy="80" r="10" fill="#a6c954" />
        </svg>
      </Box>

      <Box
        className={styles.rect_wrapp}
        sx={{ pl: "45%", pt: "1%", transform: "rotate(357deg)" }}
      >
        <Box className={styles.rect}>
          <Typography className={styles.content_t}>
            Победные фишки покажут, сколько проживет персонаж игрока, какое у
            него будет здоровье и сможет ли он уйти на пенсию раньше и быть
            финансово обеспеченным.
          </Typography>
        </Box>
        <img
          id={styles.mbag}
          className={styles.image}
          src={require("./img/mbag.png")}
          alt=""
        />
        <svg id={styles.svg4}>
          <path
            d="M 610, 80 C 500,60 400,100 398, 220"
            stroke="#a6c954"
            fill="transparent"
            strokeDasharray="10"
            strokeWidth="5"
          />

          <circle cx="830" cy="10" r="10" fill="#a6c954" />

          <circle cx="610" cy="80" r="10" fill="#a6c954" />
        </svg>
      </Box>

      <Box
        className={styles.rect_wrapp}
        sx={{ pr: "25%", pt: "1%", transform: "rotate(2deg)" }}
      >
        <Box className={styles.rect}>
          <Typography className={styles.content_t}>
            В конце игроки анализируют результаты своих действий за игру. Вместе
            с ведущим обсуждают, как можно было добиться лучшего результата и к
            чему может привести перекос в колесе баланса. А еще участники
            делятся реальными историями из своей жизни, которые можно применить
            на практике.
          </Typography>
        </Box>
        <svg id={styles.svg5}>
          <circle cx="378" cy="10" r="10" fill="#a6c954" />
        </svg>
      </Box>
    </Box>
  );
};

export default GameSteps;
