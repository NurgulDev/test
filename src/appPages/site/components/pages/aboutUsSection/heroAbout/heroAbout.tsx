import React from "react";
import style from "./heroAbout.module.scss";
import Image from "next/image";
import aboutImg1 from "../../../../../../assets/backgroundImages/aboutImg1.svg";
import aboutImg2 from "../../../../../../assets/backgroundImages/aboutImg2.svg";
import aboutImg3 from "../../../../../../assets/backgroundImages/aboutImg3.svg";
import aboutImg4 from "../../../../../../assets/backgroundImages/aboutImg4.svg";
import heroImage from "../../../../../../assets/backgroundImages/aboutUsHero.svg";

function HeroAbout() {
    return (
        <section className={style.HeroAbout}>
            <div className="container">
                <div className={style.content}>
                    <div className={style.hero}>
                        <h2 className={style.title}>
                            Мы являемся топливом для вашего бизнеса, готовы дать
                            вам образование и поднять ваш бренд до небес.
                        </h2>
                        <Image
                            className={style.heroImg}
                            src={heroImage}
                            alt="about us hero"
                        />
                    </div>
                    <div className={style.images}>
                        <Image
                            className={style.img}
                            src={aboutImg1}
                            alt="about us 1"
                        />
                        <Image
                            className={style.img}
                            src={aboutImg2}
                            alt="about us 2"
                        />
                        <Image
                            className={style.img}
                            src={aboutImg3}
                            alt="about us 3"
                        />
                        <Image
                            className={style.img}
                            src={aboutImg4}
                            alt="about us 4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroAbout;
