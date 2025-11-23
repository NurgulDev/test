import React from "react";
import style from "./HomeCourses.module.scss";
import cardImg1 from "../../../../../../assets/backgroundImages/cardImg1.svg";
import cardImg2 from "../../../../../../assets/backgroundImages/cardImg2.svg";
import cardImg3 from "../../../../../../assets/backgroundImages/cardImg3.svg";
import heart from "../../../../../../assets/icons/cardHeartButton.svg";
import cardTimeIcon1 from "../../../../../../assets/icons/timeIcon1.svg";
import cardTimeIcon2 from "../../../../../../assets/icons/timeIcon2.svg";
import cardTimeIcon3 from "../../../../../../assets/icons/timeIcon3.svg";
import Image from "next/image";

function HomeCourses() {
    return (
        <section className={style.homeCourses}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.titleBlock}>
                        <h2 className={style.title}>Доступные курсы</h2>
                        <h2 className={style.description}>
                            Мы предоставляем множество функций, которые вы
                            можете использовать. Постепенное накопление
                            информация{" "}
                        </h2>
                    </div>
                    <div className={style.coursesBlocks}>
                        <div className={style.card}>
                            <div className={style.image}>
                                <Image src={cardImg2} alt="course" />
                                <div className={style.overlay}>
                                    <h3 className={style.cardImgText}>
                                        Бесплатно
                                    </h3>
                                    <button className={style.likeButton}>
                                        <Image src={heart} alt="favorite" />
                                    </button>
                                </div>
                            </div>
                            <div className={style.info}>
                                <div className={style.titleText}>
                                    <h2 className={style.infoTitle}>
                                        Как ставить о оценивать задачи
                                    </h2>
                                    <h2 className={style.infoDesc}>
                                        Мы ориентируемся на эргономику и ты где
                                        работаешь. Это всего лишь нажатие
                                        клавиши.
                                    </h2>
                                </div>
                                <div className={style.time}>
                                    <div className={style.timeBlock}>
                                        <Image
                                            className={style.timeIcon1}
                                            src={cardTimeIcon3}
                                            alt="time"
                                        />
                                        <h2 className={style.timeInfo}>
                                            22ч 30мин
                                        </h2>
                                    </div>
                                    <div className={style.timeBlock}>
                                        <Image
                                            className={style.timeIcon2}
                                            src={cardTimeIcon2}
                                            alt="time"
                                        />
                                        <h2 className={style.timeInfo}>
                                            64 уроков
                                        </h2>
                                    </div>
                                    <div className={style.timeBlock}>
                                        <Image
                                            className={style.timeIcon3}
                                            src={cardTimeIcon1}
                                            alt="time"
                                        />
                                        <h2 className={style.timeInfo}>
                                            Прогресс{" "}
                                        </h2>
                                    </div>
                                </div>
                                <button className={style.button}>
                                    Узнать больше ⨠
                                </button>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.image}>
                                <Image src={cardImg3} alt="course" />
                                <div className={style.overlay}>
                                    <h3 className={style.cardImgText}>
                                        Бесплатно
                                    </h3>
                                    <button className={style.likeButton}>
                                        <Image src={heart} alt="favorite" />
                                    </button>
                                </div>
                            </div>
                            <div className={style.info}>
                                <div className={style.titleText}>
                                    <h2 className={style.infoTitle}>
                                        Как ставить о оценивать задачи
                                    </h2>
                                    <h2 className={style.infoDesc}>
                                        Мы ориентируемся на эргономику и ты где
                                        работаешь. Это всего лишь нажатие
                                        клавиши.
                                    </h2>
                                </div>
                                <div className={style.time}>
                                    <div className={style.timeBlock}>
                                        <Image
                                            className={style.timeIcon1}
                                            src={cardTimeIcon3}
                                            alt="time"
                                        />
                                        <h2 className={style.timeInfo}>
                                            22ч 30мин
                                        </h2>
                                    </div>
                                    <div className={style.timeBlock}>
                                        <Image
                                            className={style.timeIcon2}
                                            src={cardTimeIcon2}
                                            alt="time"
                                        />
                                        <h2 className={style.timeInfo}>
                                            64 уроков
                                        </h2>
                                    </div>
                                    <div className={style.timeBlock}>
                                        <Image
                                            className={style.timeIcon3}
                                            src={cardTimeIcon1}
                                            alt="time"
                                        />
                                        <h2 className={style.timeInfo}>
                                            Прогресс{" "}
                                        </h2>
                                    </div>
                                </div>
                                <button className={style.button}>
                                    Узнать больше ⨠
                                </button>
                            </div>
                        </div>
                        <div className={style.card}>
                            <div className={style.image}>
                                <Image src={cardImg1} alt="course" />
                                <div className={style.overlay}>
                                    <h3 className={style.cardImgText}>
                                        Бесплатно
                                    </h3>
                                    <button className={style.likeButton}>
                                        <Image src={heart} alt="favorite" />
                                    </button>
                                </div>
                            </div>
                            <div className={style.info}>
                                <div className={style.titleText}>
                                    <h2 className={style.infoTitle}>
                                        Как ставить о оценивать задачи
                                    </h2>
                                    <h2 className={style.infoDesc}>
                                        Мы ориентируемся на эргономику и ты где
                                        работаешь. Это всего лишь нажатие
                                        клавиши.
                                    </h2>
                                </div>
                                <div className={style.time}>
                                    <div className={style.timeBlock}>
                                        <Image
                                            className={style.timeIcon1}
                                            src={cardTimeIcon3}
                                            alt="time"
                                        />
                                        <h2 className={style.timeInfo}>
                                            22ч 30мин
                                        </h2>
                                    </div>
                                    <div className={style.timeBlock}>
                                        <Image
                                            className={style.timeIcon2}
                                            src={cardTimeIcon2}
                                            alt="time"
                                        />
                                        <h2 className={style.timeInfo}>
                                            64 уроков
                                        </h2>
                                    </div>
                                    <div className={style.timeBlock}>
                                        <Image
                                            className={style.timeIcon3}
                                            src={cardTimeIcon1}
                                            alt="time"
                                        />
                                        <h2 className={style.timeInfo}>
                                            Прогресс{" "}
                                        </h2>
                                    </div>
                                </div>
                                <button className={style.button}>
                                    Узнать больше ⨠
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeCourses;
