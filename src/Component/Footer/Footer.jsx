import React from 'react'
import './Footer.css'
import { FiMapPin } from 'react-icons/fi'
import { MdCall, MdOutlineEmail } from 'react-icons/md'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { PiTelegramLogoDuotone } from 'react-icons/pi'
import { BiLogoFacebookCircle, BiLogoTelegram } from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
    const whatsappNumber = '8873860144';
    const whatsappMessage = 'Hello, I would like to inquire about...';

    const handleWhatsAppClick = () => {
        const isValidNumber = whatsappNumber.match(/^\d{10}$/); // Basic validation for 10-digit number
        if (isValidNumber) {
            window.open(`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        } else {
            alert("Couldn't send a message. Please check the phone number format.");
        }
    };
    return (
        <>
            <div className="footer_container">
                <div className="address_wrapper flex-wrap mb-3 d-flex align-items-center gap-3 justify-content-start justify-content-sm-center">
                    <p>Contact Us</p>
                    <div className="phy_address d-flex align-items-center gap-2">
                        <FiMapPin fontSize={30} />
                        <div>
                            <p>Wisconsin Ave, Suite 700</p>
                            <p>Chevy Chase, Deoband 875422 </p>
                        </div>
                    </div>
                    <div className="phy_address d-flex align-items-center gap-2">
                        <MdOutlineEmail fontSize={30} />
                        <a href="mailto:nigarishatbookstore@gmail.com">nigarishatbookstore@gmail.com</a>
                    </div>
                    <div className="phy_address d-flex align-items-center flex-wrap gap-2">
                        <MdCall fontSize={30} />
                        <a href="tel:+91-8791519574">+91-8791519574</a>
                        <span>&#47;</span>
                        <a href="tel:+91-8791519574">+91-8791xx0091</a>
                    </div>
                </div>
                <div className="address_wrapper d-flex align-items-center gap-3 flex-wrap justify-content-start justify-content-sm-center">
                    <p>Follow Us</p>
                    <div className='d-flex align-items-center gap-3 justify-content-center'>
                        <div onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}><FaWhatsapp fontSize={28} color='#25D366' /> </div>
                        <FaInstagram fontSize={26} color='#fe207c' />
                        <BiLogoTelegram fontSize={28} color='#24A1DE' />
                        <BiLogoFacebookCircle fontSize={28} color='#316FF6' />
                        <FaXTwitter fontSize={28} color='#000000' />
                    </div>
                </div>
            </div>
        </>
    )
}
