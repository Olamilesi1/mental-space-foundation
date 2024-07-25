import style from '../styles/About.module.css'

function About() {
    return (
        <div>
            <h1 className={style.aboutUs}>Welcome to About us Page</h1>
            
            <div className={style.firstText}>

            <div className={style.whoLeft}>
                <img src='./images/who-we-are.png' alt='who-we-are'/>
                <div className={style.wholeft}>
               <p>Be Mentally Whole, founded in 2023 by Nimi, a passionate mental health advocate and revolutionist, aims to empower individuals to achieve mental wholeness for flourishing communities. Nimi brings a wealth of experience and understanding, recognizing the critical importance of mental health from the individual level to the broader societal structure.</p>

               <p>Our mission is to prioritize mental health for healthy living and functional sectors. We strive to see individuals healed from the trauma and deformities that hinder their optimal functioning, helping them become whole and operate according to their design. We believe that by fostering mental health, we can contribute to the development of resilient family structures and a thriving global community.</p>
                </div>
           
            </div>

            <div className={style.whoRight}>
                <div className={style.whoright}>
                    <p className={style.vision}>Vision</p>
                    <p>Empowering and raising mentally & emotionally whole individuals for flourishing communities.</p>
                </div>

                <p>Mission statement (Objectives)</p>
                <p> 1. To spread and create awareness of the importance of mental health for healthy living and sustainability across the nations targeting the SDG3</p>
                <p> 2. To equip individuals with knowledge and resources to attain mental wholeness</p>
                <p> 3. To reshape the narrative and approach towards trauma & mental health in the global community (rural and urban communities)</p>
                <p>4. To promote better workplace experience and culture that supports employee wellbeing to ensure optimal output and productivity</p>
                <p> 5. To advocate for holistic living, mentally and emotionally.</p>
            </div>

            </div>

        <div className={style.secondText}>
            <p className={style.founderText}>About The Founder</p> <br /> <br />

            <div className={style.founder}>
                <div className={style.founderLeft}>
                    <p>"The functional state of your soul and mind determines the functional state of your life!"</p> <br />
                    <p>I am Nimi, a mental health advocate and revolutionist with a burning desire to see individuals healed from deformities from trauma, be whole, and function optimally according to their design.</p> <br />
                    <p>Through experience and understanding, I know the critical importance of mental health to the global community, right from the individual to developing family structures and then the society at large.</p> <br />
                    <p>And it’s no coincidence that I have records of lived experience. In the last few months of 2019, I began to see how much my life had been affected by the effects of my past and deficiencies in the things I was exposed to. I became aware of behaviors and attitudes that I displayed out of the roots they had in my past experiences.</p> <br />
                    <p>Unconsciously, I practiced people-pleasing and hyper-vigilance. I realized that I was insecure in my mind, had FOMO, and feared rejection and people leaving me. I suffered from being too attached to people’s opinions and feelings. It was a hassle as the comeback of these characters fell back on my mind.</p> <br />
                </div>

                <div className={style.founderRight}>
                <img src='./images/about-sitting.jpg' alt='about-sitting' className={style.founderImg}/>
                </div>
            </div>

<h3 className={style.meet}>MEET THE TEAM</h3>
            <div className={style.third}>
                <div className={style.thirdDiv}>
                    <img src="./images/Mteam4.jpg" className={style.thirdImag} alt="Mteam1" />
                    <div className={style.thirdTextDiv}>
                    <p className={style.thirdText}>RUTH OLUSANYA</p>
                    <p className={style.thirdText}>CAPACITY LEAD</p>
                    </div>
                </div>

                <div className={style.thirdDiv}>
                    <img src="./images/Mteam2.png" className={style.thirdImag} alt="Mteam1" />
                    <p className={style.thirdText}>RUTH OLUSANYA</p>
                    <p className={style.thirdText}>CAPACITY LEAD</p>
                </div>

                <div className={style.thirdDiv}>
                    <img src="./images/Mteam3.jpg" className={style.thirdImag} alt="Mteam1" />
                    <p className={style.thirdText}>RUTH OLUSANYA</p>
                    <p className={style.thirdText}>CAPACITY LEAD</p>
                </div>

                <div className={style.thirdDiv}>
                    <img src="./images/Mteam1.jpg" className={style.thirdImag} alt="Mteam1" />
                    <p className={style.thirdText}>RUTH OLUSANYA</p>
                    <p className={style.thirdText}>CAPACITY LEAD</p>
                </div>

                <div className={style.thirdDiv}>
                    <img src="./images/Mteam5.jpg" className={style.thirdImag} alt="Mteam1" />
                    <p className={style.thirdText}>RUTH OLUSANYA</p>
                    <p className={style.thirdText}>CAPACITY LEAD</p>
                </div>
                
                <div className={style.thirdDiv}>
                    <img src="./images/Mteam6.jpg" className={style.thirdImag} alt="Mteam1" />
                    <p className={style.thirdText}>RUTH OLUSANYA</p>
                    <p className={style.thirdText}>CAPACITY LEAD</p>
                </div>
            </div>

        </div>


        </div>
    )
}

export default About
