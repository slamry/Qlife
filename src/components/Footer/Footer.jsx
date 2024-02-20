import { Box, Link, Typography } from "@mui/material";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <Box className={s.wrapp} id="contacts">
      <Box>
        <Typography className={s.rights}>
          2024, Все права <br /> защищены
        </Typography>
      </Box>
      <Box>
        <Link href="https://t.me/+375296710970">
          <img alt="" src={require("./img/tg.png")} className={s.logos} />
        </Link>
        <Link href="https://vk.com/id357926171">
          <img alt="" src={require("./img/vk.png")} className={s.logos} />
        </Link>
        <Link href="https://wa.me/qr/N4ZHU5HHCE5WH1">
          <img alt="" src={require("./img/wa.png")} className={s.logos} />
        </Link>
        <Link href="https://www.instagram.com/liliyasauchanka/?hl=ru">
          <img alt="" src={require("./img/inst.png")} className={s.logos} />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
