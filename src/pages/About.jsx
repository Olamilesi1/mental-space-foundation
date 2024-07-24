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

            <div className={style.third}>
                <div className={style.thirdLeft}>
                    <p>My mind was always preoccupied with vain thoughts of figuring out and fighting anxiety. And then, I was without boundaries. I didn’t know how to say NO or be firm in my decisions and opinions. The health of my life was poor. As all this continued, I began to understand how my mental health affected my growth, productivity, and advancement in life. I then realized that I had to heal. The broken pieces started to come together as a whole.</p> <br />
                    <p>Hence, the name “Be Mentally Whole!”</p>
                </div>

                <div className={style.thirdRight}>
                    <p>The concept of wholeness means to be sound, unbroken, and undivided. Therefore, to be mentally and emotionally whole is to attain a place of symphony, harmony, inner well-being, balance, and unbrokenness for a wholesome experience in life.</p> <br />
                    <p>Nonetheless, the journey into wholeness isn’t unipolar. It’s not linear. However, it is possible. This is why Be Mentally Whole was established: to perpetuate mental health care for wholeness and global sustainability.</p> <br />
                    <p>Come with me on this journey as our feet are dipped in the deep wells of becoming whole!</p>
                </div>
            </div>

        </div>


        </div>
    )
}

export default About
