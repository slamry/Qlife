import { Box, Typography } from "@mui/material";
import styles from "./GameSteps.module.css";
import useWindowSize from "../common/useWindowSize/useWindowSize";

const GameSteps = () => {
  // eslint-disable-next-line
  const { width, height } = useWindowSize();

  return (
    <Box className={styles.wrapp} id="gsteps">
      <Typography className={styles.title}>Как проходит игра</Typography>
      {/* {width > 956 ? <Box>
        
      </Box> : <Box></Box>} */}

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
        <svg id={styles.svg1} className={styles.svg}>
          <path
            d={
              width > 1152
                ? "M 675, 10 C 800, 0 900, 0, 900, 130" // не трогать
                : "M 575, 10 C 600, 0 700, 0, 700, 130"
            }
            stroke="#a6c954"
            fill="transparent"
            strokeDasharray="10"
            strokeWidth="5"
          />
          {width > 1152 ? (
            <circle cx="675" cy="10" r="10" fill="#a6c954" /> // не трогать
          ) : (
            <circle cx="575" cy="10" r="10" fill="#a6c954" />
          )}
        </svg>
      </Box>

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
        <svg id={styles.svg2} className={styles.svg}>
          <path
            d={
              width > 1152
                ? "M 720, 60 C 500,40 431,57 400, 200" // не трогать
                : "M 510, 70 C 450,70 300,80 300, 220"
            }
            stroke="#a6c954"
            fill="transparent"
            strokeDasharray="10"
            strokeWidth="5"
          />
          {width > 1152 ? (
            <circle cx="900" cy="15" r="10" fill="#a6c954" /> // не трогать
          ) : (
            <circle cx="510" cy="70" r="10" fill="#a6c954" />
          )}
          {width > 1152 ? (
            <circle cx="720" cy="60" r="10" fill="#a6c954" /> // не трогать
          ) : (
            <circle cx="695" cy="20" r="10" fill="#a6c954" />
          )}
        </svg>
      </Box>

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
        <svg id={styles.svg3} className={styles.svg}>
          <path
            d={
              width > 1152
                ? "M 520, 80 C 650,40 770,40 830, 210" // не трогать
                : "M 470, 60 C 600,40 650,40 700, 210"
            }
            stroke="#a6c954"
            fill="transparent"
            strokeDasharray="10"
            strokeWidth="5"
          />
          {width > 1152 ? (
            <circle cx="400" cy="15" r="10" fill="#a6c954" /> // не трогать
          ) : (
            <circle cx="305" cy="15" r="10" fill="#a6c954" />
          )}
          {width > 1152 ? (
            <circle cx="520" cy="80" r="10" fill="#a6c954" /> // не трогать
          ) : (
            <circle cx="470" cy="60" r="10" fill="#a6c954" />
          )}
        </svg>
      </Box>

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
        <svg id={styles.svg4} className={styles.svg}>
          <path
            d={
              width > 1152
                ? "M 580, 80 C 500,60 400,100 398, 220" // не трогать
                : "M 400, 80 C 250,100 280,180 300, 220"
            }
            stroke="#a6c954"
            fill="transparent"
            strokeDasharray="10"
            strokeWidth="5"
          />
          {width > 1152 ? (
            <circle cx="825" cy="10" r="10" fill="#a6c954" /> // не трогать
          ) : (
            <circle cx="697" cy="10" r="10" fill="#a6c954" />
          )}
          {width > 1152 ? (
            <circle cx="580" cy="80" r="10" fill="#a6c954" /> // не трогать
          ) : (
            <circle cx="410" cy="80" r="10" fill="#a6c954" />
          )}
        </svg>
      </Box>

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
        <svg id={styles.svg5} className={styles.svg}>
          {width > 1152 ? (
            <circle cx="378" cy="10" r="10" fill="#a6c954" /> // не трогать
          ) : (
            <circle cx="280" cy="10" r="10" fill="#a6c954" />
          )}
        </svg>
      </Box>
    </Box>
  );
};

export default GameSteps;
