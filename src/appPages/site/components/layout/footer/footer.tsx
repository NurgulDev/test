import React from "react";
import style from "./Footer.module.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../../../../assets/image/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footerHero}>
        <div className={style.textFooter}>
          <Typography variant="h1" color="initial">
            Присоединяйся к нам
          </Typography>
          <Typography variant="h6" color="initial">
            Мы предоставляем множество функций, которые вы можете <br />
            использовать. Постепенное накоплениеинформация
          </Typography>
        </div>
        <div className={style.emailFooter}>
          <input type="text" placeholder="Твой Email" />
          <Button variant="contained"> Подписка</Button>
        </div>
        <div className={style.logoFooter}>
          <div className={style.block1}>
            <Image src={logo} alt="logo" />
            <Typography variant="h2">
              (Название)— это частная виртуальная сеть <br /> с уникальными
              функциями и высоким <br /> уровнем безопасности.
            </Typography>
            <div className={style.blockCircle}>
              <div className={style.circle}></div>
              <div className={style.circle}></div>
              <div className={style.circle}></div>
            </div>
            <Typography variant="h5">©2020LaslesVPN</Typography>
          </div>
          <div className={style.block2}>
            <h3>Продукт</h3>
            <p>Download </p>
            <p>Pricing </p>
            <p>Locations</p>
            <p>Server</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>
          <div className={style.block2}>
            <h3>Engage</h3>
            <p>LaslesVPN ? </p>
            <p>FAQ </p>
            <p>Tutorials</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className={style.block2}>
            <h3>Earn MOney</h3>
            <p>LaslesVPN ? </p>
            <p>FAQ </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
