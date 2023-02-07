import React from 'react';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";


function Privacy() {
    return (
        <div className='privacy-policy-container'>
            <h3 className='privacy-policy-title'> Privacy Policy for Evoke Neurodiagnostics</h3>
            <div className='privacy-policy-content'>
           <p>
            Effective Date: 2/1/2023
            <p>At Evoke Neurodiagnostics we are committed to protecting the privacy of our users and customers. This Privacy Policy describes the types of personal information we collect, how we use it, and with whom we share it. By using our website and services, you consent to the data practices described in this policy.</p>
            
            </p>
            <p>Information We Collect:</p>
            <ul>
                <li>Personal Information: We collect personal information such as name, email, address, and payment information when you create an account, place an order, or subscribe to our mailing list.</li>
                <li>Log Data: We collect information about your use of our website, such as IP address, browser type, and pages visited.</li>
                <li>Cookies: We use cookies and other technologies to enhance your experience and to collect information about your use of our website.</li>
            </ul>
            <p>Use of Information:</p>
            <ul>
                <li>Providing Services: We use your personal information to provide and improve our services, process payments, and communicate with you.</li>
                <li>Marketing: We may use your personal information to send you promotional materials and updates about our products and services.</li>
                <li>Research: We may use your personal information for internal research and analysis.</li>
            </ul>
            <p>Sharing of Information:</p>
            <ul>
                <li>Service Providers: We may share your personal information with third-party service providers for the purpose of providing and improving our services.</li>
                <li>Legal Compliance: We may disclose your personal information if required by law or if we believe that it is necessary to protect our rights and/or comply with a judicial proceeding, court order, or legal process.</li>
                <li>Data Security: We use reasonable security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet, or method of electronic storage, is 100% secure.</li>
                <li>Access to Personal Information: You have the right to access, update, and delete your personal information at any time. Please contact us if you need to exercise these rights.</li>
            </ul>
            <p>Changes to Privacy Policy: We may update this Privacy Policy from time to time to reflect changes in our practices or services. We will notify you of any material changes by posting the updated policy on our website.</p>
            <p>Contact Us: If you have any questions or concerns about our privacy policy, please contact us at hello@evokediagnostics.com</p>
            </div>
            <a href='/'>
                <BsFillArrowLeftCircleFill className='back-arrow-icon'/>
            </a>
           
        </div>
    )
}

export default Privacy;