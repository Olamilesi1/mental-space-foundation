
import style from '../styles/Service.module.css'
import Choose from "../components/reusables/Choose";
import Qualities from '../components/reusables/Qualities';

function Services() {
    return (
        <div className={style.Yes}>
            <h1 className={style.servicesText}>Services</h1>

            <img src="./images/professional-services.png" alt="professional-services" />
        <div className={style.patient}>
            <div className={style.patientMeet}>
            <img src="./images/patient-meet.jpg" alt="patient-meet" className={style.serviceImg} />
            <p>We Offer Transformative Therapy and Mindfulness</p>
            <p>We support you on your path to wholeness by utilizing a combination of therapeutic approaches, mindfulness exercises, and kind guidance.</p>
            </div>

            <div className={style.patientAfrican}>
            <img src="./images/happy-african.jpg" alt="happy-african"  className={style.serviceImg}/>
            <p>We Transform Your Mental Health Journey</p>
            <p>At Be Mentally Whole, we specialize in providing holistic mental health support, inviting you to enter a haven of healing and wholeness. The guiding ideals of our consultancy are compassion, comprehension, and individualized attention.</p>
            </div>

            <div className={style.patientBlackWoman}>
            <img src="./images/happy-black-woman.jpg" alt="happy-black-woman" className={style.serviceImg} />
            <p>We Empower Your Mind, Body, and Spirit</p>
            <p>Our goal is to provide you with the tools you need to thrive in mind, body, and spirit—from overcoming obstacles in life to encouraging self-discovery and resilience.</p>
            </div>
        </div>
        
        <Choose text='Focusing on you, with the best personalized mental health care' src='./images/why-choose-us.png' alt='why-choose-us'/>
        <Qualities/>
        </div>

    )
}

export default Services
