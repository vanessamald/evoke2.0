import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function Privacy() {
    // onclick navigate back to homepage
    const navigate = useNavigate();
    const navigateBack = () => {
        navigate(-1);
    }

    return (
        <div className='privacy-policy-container' id="privacypolicy"> 
            <BsFillArrowLeftCircleFill className='back-arrow-icon'style={{ marginBottom: '25px'}} onClick={navigateBack}/>
            <h3 className='privacy-policy-title'> Privacy Policy for Evoke Neurodiagnostics</h3>
            <div className='privacy-policy-content'>
    <h1>Evoke Neurodiagnostics LLC Privacy Policy</h1>
    <p><strong>Last Updated: January 1, 2025</strong></p>
    
    <p>This privacy policy (the “Privacy Policy”) explains how Evoke Neurodiagnostics LLC (“we”, “our” and “us”) collects, uses, stores, and discloses information about users (“users”, “you” and “your”) through our software, websites, forums, blogs, social media, web applications, and other services (collectively, the “Services”).</p>
    
    <h2>1. Collection of Information</h2>
    <h3>a. Information You Provide to Us</h3>
    <p>We collect information you provide directly to us, which may include:</p>
    <ul>
        <li>Contact information, such as email address.</li>
        <li>Feedback and correspondence, including comments, “likes”, surveys, and customer support interactions.</li>
        <li>Usage information about how you use the Services.</li>
        <li>Marketing preferences and engagement details.</li>
    </ul>
    
    <h3>b. Automatically Collected Information</h3>
    <ul>
        <li><strong>Log Information:</strong> Browser type, access times, and IP address.</li>
        <li><strong>Device Information:</strong> Hardware model, OS, unique device identifiers, and mobile network data.</li>
    </ul>
    
    <h3>c. Information from Other Sources</h3>
    <p>We may obtain information from third-party sources and combine it with data we collect.</p>
    
    <h3>d. Information We Will Never Collect</h3>
    <p>We will never ask for your account password. If someone claims to be from us and asks for it, do not share your password.</p>
    
    <h2>2. Use of Information</h2>
    <p>We use collected data to:</p>
    <ul>
        <li>Provide, maintain, and improve the Services.</li>
        <li>Send security alerts, support updates, and responses to inquiries.</li>
        <li>Communicate about products, promotions, and relevant news.</li>
        <li>Analyze trends, prevent fraud, and comply with legal obligations.</li>
    </ul>
    
    <h2>3. Sharing of Information</h2>
    <p>We do not sell your personal information. However, we may share information:</p>
    <ul>
        <li>With service providers for hosting, email, and database services.</li>
        <li>To comply with legal requests.</li>
        <li>To enforce our Terms of Service and protect our rights.</li>
        <li>With your consent.</li>
    </ul>
    
    <h2>4. Security</h2>
    <p>We take reasonable steps to protect your data but cannot guarantee absolute security.</p>
    
    <h2>5. Data Retention, Verification, and Deletion</h2>
    <p>You may request access to, correction of, or deletion of your personal information by contacting us.</p>
    
    <h2>6. Disclaimer About Sharing Personal Information Online</h2>
    <p>There is always a risk of data breaches when sharing personal information online.</p>
    
    <h2>7. Limitation on Liability</h2>
    <p>We are not liable for any direct or indirect damages related to personal information breaches.</p>
    
    <h2>8. Transfer of Information to Other Countries</h2>
    <p>Your data may be stored or processed outside the United States where privacy laws may differ.</p>
    
    <h2>9. Residents Outside The United States</h2>
    <p>If you are in the EEA, you have certain rights under GDPR, including the right to access, correct, or delete your personal data.</p>
    
    <h2>10. Residents of California</h2>
    <p>California residents may request details about how their data is shared under California law.</p>
    
    <h2>11. Your Choices</h2>
    <ul>
        <li>Update, correct, or delete account information.</li>
        <li>Opt out of promotional communications.</li>
        <li>Request removal from product research outreach.</li>
    </ul>
    
    <h2>12. Changes to this Privacy Policy</h2>
    <p>We may update this Privacy Policy. Continued use of our Services indicates your acceptance of any changes.</p>
    
    <h2>13. Policies for Children</h2>
    <p>We do not knowingly collect data from individuals under 18.</p>
    
    <h2>14. Contact Us</h2>
    <p>If you have any questions, please contact us at: <a href="mailto:info@evokediagnostics.com">info@evokediagnostics.com</a></p>
            </div>
        </div>
    )
}

export default Privacy;