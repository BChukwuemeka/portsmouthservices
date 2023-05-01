import './contact.css'
import Header from '../../components/Header';
import HeaderImage  from '../../images/header_bg_2.png'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import Form from '../../components/Form/Form';
import { FormInputRow } from '../../components/Form/FormStyles';




const Contact = () => {
    return (
        <>
              <Header title="Get In Touch" image={HeaderImage} > </Header>


            <section className="contact">
                           <FormInputRow>
                            <h2>Send Us A Message</h2>
                            </FormInputRow> 
            <Form inverse />
            <div className="container contact__container">
                <div className="contact__wrapper">
                    <a href="mailto:info@portsmouthcontainers.com" target="blank" rel="noreferrer">
                        <MdEmail/>
                    </a>
                    <a href="https://m.me/portsmouthcontainers" target="blank" rel="noreferrer">
                        <BsMessenger/>
                    </a>
                    <a href="https://wa.me/+2348066216112" target="blank" rel="noreferrer">
                        <IoLogoWhatsapp/>
                    </a>
                </div>
            </div>
        </section>
        </>
         );
}
 
export default Contact;