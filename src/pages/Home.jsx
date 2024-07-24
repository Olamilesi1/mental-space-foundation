import style from "../styles/Home.module.css";
import Button from "../components/reusables/Button";
import Choose from "../components/reusables/Choose";
import Qualities from "../components/reusables/Qualities";
import Calendy from "../components/Calendly";

function Home() {


  return (
    <>
      <div className={style.homeFirstTextDiv}>
        <h1>Mental Space Foundation Africa</h1>
        <p>
          Promoting mental health literacy in mental health care.
        </p>
        <Button
          text="Discover More"
          bgColor="rgb(255,255,255)"
          textColor="rgb(93,86,68)"
          className={style.firstBtn}
          url= "about-us"
        />
      </div>
      
      <img src="../images/shade.png" alt="shade" className={style.shade}/>

      <div className={style.homeSecondText} >
        <img src="./images/who-we-are.png" alt="who-we-are" className={style.whoAre} />
        <h1 className={style.secondh1}>"Mental health is a human right, not a privilege."</h1>
        <p>
          At be mentally whole, we specialize in providing a compound approach
          to mental health.
        </p>
        <p>
          Our organization is centered on providing mental health care through
          advocacy, education, community programs, empowerment, and support for
          individuals and functional sectors.
        </p>
        <p>
          We believe mental health should be a priority for all to function at
          their best. Hence, our work towards ensuring that dysfunctions are
          addressed so we can all be functional.
        </p>
        <button>Learn More</button>
      </div>
      <div className={style.homeThirdTextDiv}>
        <div className={style.homeThirdText1}>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          />
          <span class="material-symbols-outlined">neurology</span>
          {/* <button>Image Here</button> */}
          <h2>We Transform Your Mental Health Journey</h2>
          <button>Learn More</button>
        </div>

        <div className={style.homeThirdText2}>
          <span class="material-symbols-outlined">add</span>
          {/* <button>Image Here</button> */}
          <h2>We Offer Transformative Therapy and Mindfulness</h2>
          <button>Learn More</button>
        </div>

        <div className={style.homeThirdText3}>
          <span class="material-symbols-outlined">groups</span>
          {/* <button>Image Here</button> */}
          <h2>We Empower Your Mind, Body, and Spirit</h2>
          <button>Learn More</button>
        </div>
      </div>
      <div className={style.homeFourthText}>
        <div className={style.homeFourthDiv}>
        <h1>Experience Mental Transformation</h1>
        <p>
          Achieve deep mental healing and unlock your full potential with our
          professional mental health support.{" "}
        </p>
        <button>Book An Appointment With Us</button>
        </div>
      </div>


      {/* <div className={style.homeFifthText}>
        <img src="./images/why-choose-us.png" alt="why-choose-us" />
        <h2>Focusing on you, with the best personalized mental health care</h2>
      </div> */}

      <Choose
      text='Focusing on you, with the best personalized mental health care'
      src='./images/why-choose-us.png'
      alt='why-choose-us'
      />

      {/* <br /> <hr className={style.hr} /> <br />

      <div className={style.homeSixthTextDiv}>
        <div className={style.homeSixthText}>
          <div className={style.homeSixth}>

            <div className={style.setting}>
              <span class="material-symbols-outlined ">
                tools_installation_kit
              </span>
            </div>

            <div className={style.SixthText}>
              <h2>Personalized Approach</h2>
              <p>
                Tailored mental health plans for your unique journey to
                wellness.
              </p>
            </div>
          </div>

          <div className={style.homeSixth}>
            <div className={style.setting}>
              <span class="material-symbols-outlined ">person</span>
            </div>

            <div className={style.SixthText}>
              <h2>Experienced Professionals</h2>
              <p>
                Expert guidance from dedicated and compassionate mental health
                specialists.
              </p>
            </div>
          </div>

          <div className={style.homeSixth}>
            <div className={style.setting}>
              <span class="material-symbols-outlined ">room_service</span>
            </div>

            <div className={style.SixthText}>
              <h2>Comprehensive Services</h2>
              <p>
                Holistic mental health solutions for a balanced, healthy life.
              </p>
            </div>
          </div>
        </div>

        <div className={style.homeSixthText}>
          <div className={style.homeSixth}>
            <div className={style.setting}>
              <span class="material-symbols-outlined ">handyman</span>
            </div>

            <div className={style.SixthText}>
              <h2>Evidence-Based Practices</h2>
              <p>
                Proven methods ensuring effective and reliable mental health
                care.
              </p>
            </div>
          </div>

          <div className={style.homeSixth}>
            <div className={style.setting}>
              <span class="material-symbols-outlined ">trending_up</span>
            </div>

            <div className={style.SixthText}>
              <h2>Empowerment and Growth</h2>
              <p>
                Supportive environment fostering personal development and
                resilience.
              </p>
            </div>
          </div>

          <div className={style.homeSixth}>
            <div className={style.setting}>
              <span class="material-symbols-outlined ">groups_2</span>
            </div>

            <div className={style.SixthText}>
              <h2>Community Support</h2>
              <p>
                Building strong connections for collective healing and
                well-being.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <Qualities/>


      <div className={style.homeSeventhDiv}>
        <div className={style.firstSeventhDiv}>
          <div className={style.seventhImgText}>
            <img
              src="./images/professional-services.png"
              alt="professional services"
            />

            <div className={style.seventhDiv}>
              <h1>Start Living Your Best Life with Our Support.</h1>
              <p>
                Experience deep mental healing and personal growth with Be
                Mentally Whole's expert support. Begin your journey to a
                healthier, happier life.
              </p>
            </div>
          </div>

          <div className={style.table}>
            <div className={style.tableLeft}>
              <div className={style.points}>
                {" "}
                <span class="material-symbols-outlined">
                  chevron_right
                </span>{" "}
                <p>Personalized Approach</p>{" "}
              </div>
              <div className={style.points}>
                {" "}
                <span class="material-symbols-outlined">
                  chevron_right
                </span>{" "}
                <p>Personalized Approach</p>{" "}
              </div>
              <div className={style.points}>
                {" "}
                <span class="material-symbols-outlined">
                  chevron_right
                </span>{" "}
                <p>Personalized Approach</p>{" "}
              </div>
              <div className={style.points}>
                {" "}
                <span class="material-symbols-outlined">
                  chevron_right
                </span>{" "}
                <p>Personalized Approach</p>{" "}
              </div>
              <div className={style.points1}>
                {" "}
                <span class="material-symbols-outlined">
                  chevron_right
                </span>{" "}
                <p>Personalized Approach</p>{" "}
              </div>
            </div>

            <div className={style.tableRight}>
              <div className={style.setting}>
                <span class="material-symbols-outlined ">phone_in_talk</span>
              </div>
              <p>CLIENT SUPPORT</p>
              <p>+234 813 9098 470</p>
            </div>
          </div>
        </div>

        <div className={style.secondSeventhDiv}>
          <img alt="video" />
        </div>
      </div>

      <div className={style.homeEightDiv} id="whoweare">
        <h1 className={style.appointment}>Book an Appointment With Us</h1>

        <div className={style.homeEightDivText}>
          <div className={style.homeEightDivLeft}>
          <Calendy/>
          </div>

          <div className={style.homeEightDivRight}>
            <h1>Need More Help?</h1>
            <p>
              Reach out to us for personalized assistance and expert mental
              health support. We're here to guide you every step of the way.
            </p>

            <hr />

            <div className={style.homeReachOut}>
              <div className={style.setting}>
                <span class="material-symbols-outlined ">phone_in_talk</span>
              </div>
              <div className={style.numail}>
                <h3>SUPPORT</h3>
                <p>+234 813 9098 470</p>
              </div>
            </div>

            <div className={style.homeReachOut}>
              <div className={style.setting}>
                <span class="material-symbols-outlined ">mail</span>
              </div>
              <div className={style.numail}>
                <h3>EMAIL SUPPORT</h3>
                <p>contact@bementallywhole.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
