import { Box, Grid, Typography } from "@mui/material";
import styles from "./Info.module.css";
import useWindowSize from "../common/useWindowSize/useWindowSize";

const Info = () => {
  // eslint-disable-next-line
  const { width, height } = useWindowSize();

  return (
    <Box className={styles.wrapp} id="info">
      {width > 957 ? (
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <Typography className={styles.ql}>Quality life</Typography>
              <Typography className={styles.text_under_ql}>
                Охватывает все сферы жизни. Во время трансформационной игры вы
                погружаетесь в “параллельную” реальность, в которой проживаете
                жизнь со стороны
              </Typography>
            </Grid>
            <Grid item xs={6} className={styles.images}>
              <img
                className={styles.mbag}
                src={require("./img/mbag.png")}
                alt=""
              />
              <img
                className={styles.star}
                src={require("./img/star.png")}
                alt=""
              />
            </Grid>
          </Grid>

          <Grid container className={styles.cards_wrapp}>
            <Grid item className={styles.card1} xs={4}>
              <Box className={styles.text_wrapp}>
                <Typography className={styles.title}>
                  Игра помогает понять:
                </Typography>
                <Typography className={styles.content}>
                  какие сферы жизни тянут вас вниз
                </Typography>
              </Box>
            </Grid>
            <Grid item className={styles.card2} xs={4}>
              <Box className={styles.text_wrapp}>
                <Typography className={styles.title}>
                  Игра помогает понять:
                </Typography>
                <Typography className={styles.content}>
                  какие психологические установки мешают развитию
                </Typography>
              </Box>
            </Grid>
            <Grid item className={styles.card3} xs={4}>
              <Box className={styles.text_wrapp}>
                <Typography className={styles.title}>
                  Игра помогает понять:
                </Typography>
                <Typography className={styles.content}>
                  как изменить свое отношение к жизни и начать играть по своим
                  правилам
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box position={"relative"}>
            <img
              className={styles.back_star}
              src={require("./img/star.png")}
              alt=""
            />
            <Grid container className={styles.gamerules_wrapp}>
              <Grid item>
                <img
                  className={styles.hand}
                  src={require("./img/hand.png")}
                  alt=""
                />
              </Grid>
              <Grid item padding={"0% 0% 7% 60%"}>
                <Box className={styles.gr_text_wrapp}>
                  <Typography className={styles.gr_text}>
                    Во время игры хорошо видны психологические триггеры, которые
                    мешают вам развиваться в реальности
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className={styles.results_wrapp}>
            <Typography className={styles.results_text}>
              <img
                className={styles.marker}
                src={require("./img/marker.png")}
                alt=""
              />
              После игры 95% участников чувствуют ясность сознания и откидывают
              все ненужное. Quality life помогает понять важность баланса в
              вашей жизни. В процессе игры вы наладите контакт с людьми, которые
              уже достигли успеха в разных сферах и готовы поделиться опытом.
            </Typography>
            <Typography className={styles.results_text}>
              <img
                className={styles.marker}
                src={require("./img/marker.png")}
                alt=""
              />
              Другими словами, всего за час вы проживаете альтернативную жизнь
              “от” и “до”: взаимодействуете с другими игроками и принимаете
              решения о карьере, семье, здоровье, финан сах и благополучии.
              Также, в игре происходят поворотные события, круто влияющие на
              вашу жизнь. Все как в реальности, только на игровом поле.
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box>
          <Grid container>
            <Grid item xs={12}>
              <Typography className={styles.ql}>Quality life</Typography>
              <Typography className={styles.text_under_ql}>
                Охватывает все сферы жизни. Во время трансформационной игры вы
                погружаетесь в “параллельную” реальность, в которой проживаете
                жизнь со стороны
              </Typography>
            </Grid>
          </Grid>

          <Grid container className={styles.cards_wrapp}>
            <Grid item sx={{ flexDirection: "row", display: "flex" }}>
              <Box className={styles.card1}>
                <Box className={styles.text_wrapp}>
                  <Typography className={styles.title}>
                    Игра помогает понять:
                  </Typography>
                  <Typography className={styles.content}>
                    какие сферы жизни тянут вас вниз
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.images}>
                <img
                  className={styles.mbag}
                  src={require("./img/mbag.png")}
                  alt=""
                />
                <img
                  className={styles.star}
                  src={require("./img/star.png")}
                  alt=""
                />
              </Box>
            </Grid>
            <Grid
              item
              sx={{ flexDirection: "row", display: "flex", paddingTop: "7%" }}
            >
              <Box className={styles.images}>
                <img
                  className={styles.hand}
                  src={require("./img/hand.png")}
                  alt=""
                />
              </Box>
              <Box className={styles.card2}>
                <Box className={styles.text_wrapp}>
                  <Typography className={styles.title}>
                    Игра помогает понять:
                  </Typography>
                  <Typography className={styles.content}>
                    какие психологические установки мешают развитию
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              sx={{ flexDirection: "row", display: "flex", paddingTop: "7%" }}
            >
              <Box className={styles.card3}>
                <Box className={styles.text_wrapp}>
                  <Typography className={styles.title}>
                    Игра помогает понять:
                  </Typography>
                  <Typography className={styles.content}>
                    как изменить свое отношение к жизни и начать играть по своим
                    правилам
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.images}></Box>
            </Grid>
          </Grid>
          <Box position={"relative"}>
            <img
              className={styles.back_star}
              src={require("./img/star.png")}
              alt=""
            />
            <Grid container className={styles.gamerules_wrapp}>
              <Grid item></Grid>
              <Grid item className={styles.item__gr_text_wrapp}>
                <Box className={styles.gr_text_wrapp}>
                  <Typography className={styles.gr_text}>
                    Во время игры хорошо видны психологические триггеры, которые
                    мешают вам развиваться в реальности
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className={styles.results_wrapp}>
            <Typography className={styles.results_text}>
              <img
                className={styles.marker}
                src={require("./img/marker.png")}
                alt=""
              />
              После игры 95% участников чувствуют ясность сознания и откидывают
              все ненужное. Quality life помогает понять важность баланса в
              вашей жизни. В процессе игры вы наладите контакт с людьми, которые
              уже достигли успеха в разных сферах и готовы поделиться опытом.
            </Typography>
            <Typography className={styles.results_text}>
              <img
                className={styles.marker}
                src={require("./img/marker.png")}
                alt=""
              />
              Другими словами, всего за час вы проживаете альтернативную жизнь
              “от” и “до”: взаимодействуете с другими игроками и принимаете
              решения о карьере, семье, здоровье, финан сах и благополучии.
              Также, в игре происходят поворотные события, круто влияющие на
              вашу жизнь. Все как в реальности, только на игровом поле.
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Info;
