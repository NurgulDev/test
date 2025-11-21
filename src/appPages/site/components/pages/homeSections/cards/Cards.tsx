import React from "react";
import style from "./Cards.module.scss";
import Image from "next/image";
import cardImg1 from "../../../../../../assets/icons/mainCardIcon1.svg";
import cardImg2 from "../../../../../../assets/icons/mainCardIcon2.svg";
import cardImg3 from "../../../../../../assets/icons/mainCardIcon3.svg";

function Cards() {
    return (
        <section className={style.cards}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.card}>
                        <Image src={cardImg1} alt="Card Image 1" />
                        <h2 className={style.cardTitle}>Пожизненный доступ</h2>
                        <hr className={style.hr} />
                        <h2 className={style.cardDescription}>
                            Постепенное накопление информация об атомном и
                            мелкомасштабное поведение...
                        </h2>
                    </div>
                    <div className={style.card}>
                        <Image src={cardImg2} alt="Card Image 2" />
                        <h2 className={style.cardTitle}>
                            Сертифицированный преподаватель
                        </h2>
                        <hr className={style.hr} />
                        <h2 className={style.cardDescription}>
                            Постепенное накопление информация об атомном и
                            мелкомасштабное поведение...
                        </h2>
                    </div>
                    <div className={style.card}>
                        <Image src={cardImg3} alt="Card Image 3" />
                        <h2 className={style.cardTitle}>Обучающие курсы</h2>
                        <hr className={style.hr} />
                        <h2 className={style.cardDescription}>
                            Постепенное накопление информация об атомном и
                            мелкомасштабное поведение...
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cards;
