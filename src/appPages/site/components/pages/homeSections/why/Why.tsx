import React from "react";
import style from "./Why.module.scss";
import WhyIcon1 from "../../../../../../assets/icons/MainWhyIcon1.svg";
import WhyIcon2 from "../../../../../../assets/icons/MainWhyIcon2.svg";
import WhyIcon3 from "../../../../../../assets/icons/MainWhyIcon3.svg";
import Image from "next/image";

function Why() {
    return (
        <section className={style.why}>
            <div className={style.content}>
                <div className={style.block1}>
                    <div className={style.texts}>
                        <h2 className={style.title}>Почему (название кур.)</h2>
                        <h2 className={style.description}>
                            Мы предоставляем множество функций, которые вы
                            можете использовать. Постепенное
                            накоплениеинформация
                        </h2>
                    </div>
                    <div className={style.texts}>
                        {" "}
                        <h2 className={style.titleNumber}>100+</h2>
                        <h2 className={style.description}>
                            Мы предоставляем множество функций, которые вы
                            можете использовать. Постепенное
                            накоплениеинформация
                        </h2>
                    </div>
                    <div className={style.texts}>
                        {" "}
                        <h2 className={style.titleNumber}>80+</h2>
                        <h2 className={style.description}>
                            Мы предоставляем множество функций, которые вы
                            можете использовать. Постепенное
                            накоплениеинформация
                        </h2>
                    </div>
                </div>
                <div className={style.block2}>
                    <div className={style.block2blocks}>
                        <Image src={WhyIcon1} alt="WhyIcon1" />
                        <div className={style.info}>
                            <h2 className={style.infoTitle}>Личное обучение</h2>
                            <h2 className={style.infoDesc}>
                                Постепенное накоплениеинформация об атомном
                                имелкомасштабное поведение...
                            </h2>
                        </div>
                    </div>
                    <div className={style.block2blocks}>
                        <Image src={WhyIcon2} alt="WhyIcon2" />
                        <div className={style.info}>
                            <h2 className={style.infoTitle}>
                                Интерактивные уроки
                            </h2>
                            <h2 className={style.infoDesc}>
                                Постепенное накоплениеинформация об атомном
                                имелкомасштабное поведение...
                            </h2>
                        </div>
                    </div>
                    <div className={style.block2blocks}>
                        <Image src={WhyIcon3} alt="WhyIcon3" />
                        <div className={style.info}>
                            <h2 className={style.infoTitle}>
                                24/7 Поддержка учеников
                            </h2>
                            <h2 className={style.infoDesc}>
                                Постепенное накоплениеинформация об атомном
                                имелкомасштабное поведение...
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Why;
