import React from "react";
import style from "./Main.module.scss";
import mainImg from "../../../../../../assets/backgroundImages/mainImg.svg";
import Image from "next/image";

export default function Main() {
    return (
        <section className={style.Main}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.infoBlock}>
                        <div className={style.texts}>
                            <h2 className={style.title}>
                                Надо много учиться, чтобы знать хоть немного.
                            </h2>
                            <h2 className={style.description}>
                                Обеспечьте сеть для всех ваших потребностей
                                легко и весело, используя наши курсы.Откройте
                                для себя интересные функции от нас.{" "}
                            </h2>
                        </div>
                        <button className={style.button}>Начать</button>
                    </div>
                    <Image
                        src={mainImg}
                        alt="Main Image"
                        className={style.mainImage}
                    />
                </div>
            </div>
        </section>
    );
}
