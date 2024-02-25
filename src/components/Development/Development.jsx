import { Box, Grid, Typography } from "@mui/material";
import s from "./Development.module.css";
import useWindowSize from "../common/useWindowSize/useWindowSize";

const Development = () => {
  // eslint-disable-next-line
  const { width, height } = useWindowSize();
  return (
    <Box className={s.wrapp}>
      <Grid container className={s.grid}>
        <Grid item className={s.backr}>
          <Typography className={s.title} id="aboutus">
            Наша игра уже в нескольких странах и мы активно развиваем ее по
            всему миру!
          </Typography>
        </Grid>
        <Grid item className={s.cards_wrapp}>
          <Box id={s.card1_box}>
            <Box className={s.card_wrapp} id={s.card1}>
              <Box className={s.image}>
                <svg
                  viewBox={
                    width > 540 ? "-80 -1000 1100 1200" : "-200 -1000 1300 1200"
                  }
                >
                  <circle
                    cx="480"
                    cy="-450"
                    r="500"
                    stroke="#a6c954"
                    fill="transparent"
                    strokeWidth="50"
                  />
                  <path
                    fill="#a6c954"
                    d="M140-153.846v-520h160v-160h360v320h160v360H540v-160H420v160H140Zm40-40h120v-120H180v120Zm0-160h120v-120H180v120Zm0-160h120v-120H180v120Zm160 160h120v-120H340v120Zm0-160h120v-120H340v120Zm0-160h120v-120H340v120Zm160 320h120v-120H500v120Zm0-160h120v-120H500v120Zm0-160h120v-120H500v120Zm160 480h120v-120H660v120Zm0-160h120v-120H660v120Z"
                  />
                </svg>
              </Box>
              <Typography className={s.card_t}>Более 130 городов</Typography>
            </Box>
          </Box>

          {/* перестройка! карточка2 появится чуть ниже */}
          {width > 380 ? (
            <Box id={s.card2_box}>
              <Box className={s.card_wrapp} id={s.card2}>
                <Box className={s.image}>
                  <svg
                    viewBox={
                      width > 540
                        ? "-80 -1000 1100 1200"
                        : "-200 -1000 1300 1200"
                    }
                  >
                    <circle
                      cx="480"
                      cy="-400"
                      r="510"
                      stroke="#a6c954"
                      fill="transparent"
                      strokeWidth="50"
                    />
                    <path
                      fill="#a6c954"
                      d="M40-256.923v-34.539q0-36.846 39.384-61.154 39.385-24.307 101.385-24.307 9.154 0 19.616.884 10.461.885 22.23 2.885-9.384 16.385-13.692 33.615-4.308 17.231-4.308 34.539v48.077H40Zm240 0v-45q0-24.181 14.038-44.206 14.039-20.025 41.423-34.64 27.385-14.616 63.808-21.924Q435.692-410 479.692-410q44.847 0 81.27 7.307 36.423 7.308 63.807 21.924 27.385 14.615 41.308 34.64Q680-326.104 680-301.923v45H280Zm475.385 0v-47.847q0-19.139-4.193-36.069-4.192-16.93-12.577-32.315 12.539-2 22.5-2.885 9.962-.884 18.885-.884 62 0 101 24.192t39 61.269v34.539H755.385Zm-434.231-40h317.923v-8.462q-2.308-28.461-46.654-46.538Q548.077-370 480-370t-112.423 18.077q-44.346 18.077-46.423 46.538v8.462ZM180.565-414.616q-23.565 0-40.142-16.721t-16.577-40.202q0-23.231 16.721-39.692 16.721-16.462 40.202-16.462 23.231 0 40.077 16.462 16.846 16.461 16.846 39.922 0 22.77-16.424 39.732-16.424 16.961-40.703 16.961Zm599.435 0q-23 0-39.962-16.961-16.961-16.962-16.961-39.732 0-23.461 16.961-39.922 16.962-16.462 40.111-16.462 23.851 0 40.313 16.462 16.461 16.461 16.461 39.692 0 23.481-16.365 40.202-16.365 16.721-40.558 16.721ZM480.271-440q-36.425 0-62.194-25.577-25.77-25.577-25.77-62.116 0-37.269 25.577-62.481 25.577-25.211 62.116-25.211 37.269 0 62.481 25.133 25.212 25.134 25.212 62.288 0 36.425-25.134 62.194Q517.425-440 480.271-440Zm.114-40q19.692 0 33.5-14.193 13.807-14.192 13.807-33.884 0-19.693-13.711-33.5-13.712-13.808-33.981-13.808-19.308 0-33.5 13.712-14.192 13.711-14.192 33.98 0 19.308 14.192 33.5Q460.692-480 480.385-480Zm-.154 183.077ZM480-527.693Z"
                    />
                  </svg>
                </Box>
                <Typography className={s.card_t}>Более 2400 человек</Typography>
              </Box>
            </Box>
          ) : null}

          {/* карточка3 исчезнет в моб версии и появится ниже */}
          {width > 957 ? (
            <Box id={s.card3_box}>
              <Box className={s.card_wrapp} id={s.card3}>
                <Box className={s.image}>
                  <svg viewBox="-80 -1000 1100 1200">
                    <circle
                      cx="480"
                      cy="-450"
                      r="510"
                      stroke="#a6c954"
                      fill="transparent"
                      strokeWidth="50"
                    />
                    <path
                      fill="#a6c954"
                      d="M189-180q-53.077 0-89.808-36.846Q62.462-253.692 62-307.319q0-7.912.615-15.373.616-7.462 2.616-15.693l84-336q12.263-47.134 49.928-76.374Q236.824-780 285-780h390q48.176 0 85.841 29.241 37.665 29.24 49.928 76.374l84 336q2 8.231 3.116 16.193Q899-314.231 899-306.319q0 53.627-37.346 89.973T771.052-180q-36.667 0-67.283-19.308-30.615-19.307-47.077-51.923L627.923-310q-7.308-15-21.923-22.5-14.615-7.5-31-7.5H385q-16.186 0-30.901 7.308-14.714 7.307-22.022 22.692l-28.769 58.769q-15.693 33.385-46.834 52.308Q225.332-180 189-180Zm3.208-40q24.177 0 44.677-13.077t30.807-34.692l28-57.77q12.629-25.58 37.046-40.021Q357.154-380 385-380h190q28.314 0 52.465 15.308 24.15 15.307 37.843 39.923l28 57q10.307 21.615 30.807 34.692Q744.615-220 769.327-220q36.417 0 62.43-24.654Q857.769-269.308 858-305q0-2.077-2.769-23.615l-84-335q-8.539-33.154-35.308-54.77Q709.154-740 675-740H285q-34.977 0-61.835 21.615-26.857 21.616-34.396 54.77l-84 335Q103.539-324.154 102-306q0 36.485 26.654 61.242Q155.308-220 192.208-220ZM540-529.231q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm80-80q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm0 160q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm80-80q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm-360.036 56.923q7.651 0 12.69-5.012 5.038-5.013 5.038-12.68v-52.308H410q7.667 0 12.68-5.002 5.012-5.003 5.012-12.654t-5.012-12.69q-5.013-5.038-12.68-5.038h-52.308V-630q0-7.667-5.002-12.68-5.003-5.012-12.654-5.012t-12.69 5.012q-5.038 5.013-5.038 12.68v52.308H270q-7.667 0-12.68 5.002-5.012 5.003-5.012 12.654t5.012 12.69q5.013 5.038 12.68 5.038h52.308V-490q0 7.667 5.002 12.68 5.003 5.012 12.654 5.012ZM480-480Z"
                    />
                  </svg>
                </Box>
                <Typography className={s.card_t}>
                  Более 300 игр в месяц
                </Typography>
              </Box>
            </Box>
          ) : null}

          {/* линия1 */}
          <svg
            className={s.lines}
            viewBox={
              width > 1264
                ? "-15 0 1300 600"
                : width > 1183
                ? "-40 0 1400 600"
                : width > 957
                ? "-70 0 1500 600"
                : width > 380
                ? "0 0 650 600"
                : width > 368
                ? "-100 -140 650 1000"
                : width > 350
                ? "-120 -130 650 1000"
                : width > 336
                ? "-140 -130 650 1000"
                : "-160 -130 650 1000"
            }
          >
            <path
              d={
                width > 380
                  ? "M 200, 30 C 300, 0 320, 0, 400, 30"
                  : width > 336
                  ? "M 210, 30 C 250, 30 380, 0, 400, 250"
                  : "M 210, 30 C 250, 30 380, 0, 400, 300"
              }
              stroke="#a6c954"
              fill="transparent"
              strokeDasharray="10"
              strokeWidth="5"
            />
            {width > 380 ? (
              <circle cx="200" cy="30" r="10" fill="#a6c954" />
            ) : (
              <circle cx="210" cy="30" r="10" fill="#a6c954" />
            )}
            {width > 380 ? (
              <circle cx="400" cy="30" r="10" fill="#a6c954" />
            ) : width > 336 ? (
              <circle cx="400" cy="250" r="10" fill="#a6c954" />
            ) : (
              <circle cx="400" cy="300" r="10" fill="#a6c954" />
            )}
          </svg>

          {/* линия для мобильной версии */}
          {width > 957 ? (
            <svg
              className={s.lines}
              viewBox={
                width > 1264
                  ? "-45 20 1300 600"
                  : width > 1183
                  ? "-70 -20 1350 600"
                  : width > 1139
                  ? "-95 -85 1400 600"
                  : width > 1087
                  ? "-200 -95 1600 600"
                  : width > 1008
                  ? "-200 -150 1600 600"
                  : "-200 -180 1600 600"
              }
            >
              <path
                d="M 600, 200 C 670, 230 700, 230, 790, 200"
                stroke="#a6c954"
                fill="transparent"
                strokeDasharray="10"
                strokeWidth="5"
              />
              <circle cx="600" cy="200" r="10" fill="#a6c954" />{" "}
              <circle cx="790" cy="200" r="10" fill="#a6c954" />
            </svg>
          ) : (
            <svg
              className={s.lines}
              viewBox={
                width >= 956
                  ? "0 0 650 600"
                  : width > 873
                  ? "0 0 650 600"
                  : width > 828
                  ? "-5 -15 650 600"
                  : width > 770
                  ? "-10 -25 650 600"
                  : width > 719
                  ? "-15 -40 650 600"
                  : width > 686
                  ? "-15 -60 650 600"
                  : width >= 635
                  ? "-20 -70 650 600"
                  : width > 600
                  ? "0 -100 650 600"
                  : width > 555
                  ? "0 -120 650 600"
                  : width > 502
                  ? "0 -145 650 600"
                  : width > 485
                  ? "0 -160 650 600"
                  : width > 480
                  ? "-7 -175 650 600"
                  : width > 450
                  ? "-7 -120 650 600"
                  : width > 437
                  ? "-7 -145 650 600"
                  : width > 410
                  ? "-7 -130 650 600"
                  : width > 388
                  ? "-7 -150 650 600"
                  : width > 380
                  ? "-15 -170 650 600"
                  : width > 368
                  ? "250 -330 650 1000"
                  : width > 350
                  ? "265 -320 650 1000"
                  : width > 336
                  ? "280 -320 650 1000"
                  : "290 -310 650 1000"
              }
            >
              <path
                d={
                  width > 380
                    ? "M 530, 200 C 540, 300 500, 340, 410, 350"
                    : width > 336
                    ? "M 580, 200 C 350, 220 390, 380, 380, 425"
                    : "M 580, 270 C 450, 300 390, 380, 380, 540"
                }
                stroke="#a6c954"
                fill="transparent"
                strokeDasharray="10"
                strokeWidth="5"
              />
              {width > 380 ? (
                <circle cx="530" cy="200" r="10" fill="#a6c954" />
              ) : width > 336 ? (
                <circle cx="580" cy="200" r="10" fill="#a6c954" />
              ) : (
                <circle cx="570" cy="270" r="10" fill="#a6c954" />
              )}
              {width > 380 ? (
                <circle cx="410" cy="350" r="10" fill="#a6c954" />
              ) : width > 336 ? (
                <circle cx="380" cy="425" r="10" fill="#a6c954" />
              ) : (
                <circle cx="380" cy="540" r="10" fill="#a6c954" />
              )}
            </svg>
          )}
        </Grid>

        {/* появление карточки2 в моб версии */}
        {width > 380 ? null : (
          <Grid item className={s.card2_grid_wr}>
            <Box id={s.card2_box}>
              <Box className={s.card_wrapp} id={s.card2}>
                <Box className={s.image}>
                  <svg
                    viewBox={
                      width > 540
                        ? "-80 -1000 1100 1200"
                        : "-200 -1000 1300 1200"
                    }
                  >
                    <circle
                      cx="480"
                      cy="-400"
                      r="510"
                      stroke="#a6c954"
                      fill="transparent"
                      strokeWidth="50"
                    />
                    <path
                      fill="#a6c954"
                      d="M40-256.923v-34.539q0-36.846 39.384-61.154 39.385-24.307 101.385-24.307 9.154 0 19.616.884 10.461.885 22.23 2.885-9.384 16.385-13.692 33.615-4.308 17.231-4.308 34.539v48.077H40Zm240 0v-45q0-24.181 14.038-44.206 14.039-20.025 41.423-34.64 27.385-14.616 63.808-21.924Q435.692-410 479.692-410q44.847 0 81.27 7.307 36.423 7.308 63.807 21.924 27.385 14.615 41.308 34.64Q680-326.104 680-301.923v45H280Zm475.385 0v-47.847q0-19.139-4.193-36.069-4.192-16.93-12.577-32.315 12.539-2 22.5-2.885 9.962-.884 18.885-.884 62 0 101 24.192t39 61.269v34.539H755.385Zm-434.231-40h317.923v-8.462q-2.308-28.461-46.654-46.538Q548.077-370 480-370t-112.423 18.077q-44.346 18.077-46.423 46.538v8.462ZM180.565-414.616q-23.565 0-40.142-16.721t-16.577-40.202q0-23.231 16.721-39.692 16.721-16.462 40.202-16.462 23.231 0 40.077 16.462 16.846 16.461 16.846 39.922 0 22.77-16.424 39.732-16.424 16.961-40.703 16.961Zm599.435 0q-23 0-39.962-16.961-16.961-16.962-16.961-39.732 0-23.461 16.961-39.922 16.962-16.462 40.111-16.462 23.851 0 40.313 16.462 16.461 16.461 16.461 39.692 0 23.481-16.365 40.202-16.365 16.721-40.558 16.721ZM480.271-440q-36.425 0-62.194-25.577-25.77-25.577-25.77-62.116 0-37.269 25.577-62.481 25.577-25.211 62.116-25.211 37.269 0 62.481 25.133 25.212 25.134 25.212 62.288 0 36.425-25.134 62.194Q517.425-440 480.271-440Zm.114-40q19.692 0 33.5-14.193 13.807-14.192 13.807-33.884 0-19.693-13.711-33.5-13.712-13.808-33.981-13.808-19.308 0-33.5 13.712-14.192 13.711-14.192 33.98 0 19.308 14.192 33.5Q460.692-480 480.385-480Zm-.154 183.077ZM480-527.693Z"
                    />
                  </svg>
                </Box>
                <Typography className={s.card_t}>Более 2400 человек</Typography>
              </Box>
            </Box>
          </Grid>
        )}
        {/* карточка3 для мобильной версии */}
        {width > 957 ? null : (
          <Grid item className={s.card3_grid_wr}>
            <Box id={s.card3_box}>
              <Box className={s.card_wrapp} id={s.card3}>
                <Box className={s.image}>
                  <svg
                    viewBox={
                      width > 540
                        ? "-80 -1000 1100 1200"
                        : "-200 -1000 1300 1200"
                    }
                  >
                    <circle
                      cx="480"
                      cy="-450"
                      r="510"
                      stroke="#a6c954"
                      fill="transparent"
                      strokeWidth="50"
                    />
                    <path
                      fill="#a6c954"
                      d="M189-180q-53.077 0-89.808-36.846Q62.462-253.692 62-307.319q0-7.912.615-15.373.616-7.462 2.616-15.693l84-336q12.263-47.134 49.928-76.374Q236.824-780 285-780h390q48.176 0 85.841 29.241 37.665 29.24 49.928 76.374l84 336q2 8.231 3.116 16.193Q899-314.231 899-306.319q0 53.627-37.346 89.973T771.052-180q-36.667 0-67.283-19.308-30.615-19.307-47.077-51.923L627.923-310q-7.308-15-21.923-22.5-14.615-7.5-31-7.5H385q-16.186 0-30.901 7.308-14.714 7.307-22.022 22.692l-28.769 58.769q-15.693 33.385-46.834 52.308Q225.332-180 189-180Zm3.208-40q24.177 0 44.677-13.077t30.807-34.692l28-57.77q12.629-25.58 37.046-40.021Q357.154-380 385-380h190q28.314 0 52.465 15.308 24.15 15.307 37.843 39.923l28 57q10.307 21.615 30.807 34.692Q744.615-220 769.327-220q36.417 0 62.43-24.654Q857.769-269.308 858-305q0-2.077-2.769-23.615l-84-335q-8.539-33.154-35.308-54.77Q709.154-740 675-740H285q-34.977 0-61.835 21.615-26.857 21.616-34.396 54.77l-84 335Q103.539-324.154 102-306q0 36.485 26.654 61.242Q155.308-220 192.208-220ZM540-529.231q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm80-80q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm0 160q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm80-80q12.385 0 21.577-9.192 9.192-9.192 9.192-21.577 0-12.385-9.192-21.577-9.192-9.192-21.577-9.192-12.385 0-21.577 9.192-9.192 9.192-9.192 21.577 0 12.385 9.192 21.577 9.192 9.192 21.577 9.192Zm-360.036 56.923q7.651 0 12.69-5.012 5.038-5.013 5.038-12.68v-52.308H410q7.667 0 12.68-5.002 5.012-5.003 5.012-12.654t-5.012-12.69q-5.013-5.038-12.68-5.038h-52.308V-630q0-7.667-5.002-12.68-5.003-5.012-12.654-5.012t-12.69 5.012q-5.038 5.013-5.038 12.68v52.308H270q-7.667 0-12.68 5.002-5.012 5.003-5.012 12.654t5.012 12.69q5.013 5.038 12.68 5.038h52.308V-490q0 7.667 5.002 12.68 5.003 5.012 12.654 5.012ZM480-480Z"
                    />
                  </svg>
                </Box>
                <Typography className={s.card_t}>
                  Более 300 игр в месяц
                </Typography>
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Development;
