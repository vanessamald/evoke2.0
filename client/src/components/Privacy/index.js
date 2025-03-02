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
    
    <p>This privacy policy (the “Privacy Policy”) explains how Evoke Neurodiagnostics LLC (“we”, “our” and “us”) collects, uses, stores and discloses information about users (“users”, “you” and “your”) through our software (the “Software”), websites, forums, blog, social media, web applications and other products and services (collectively, the “Services”) or when you otherwise interact with us.</p>
    <p>Certain Evoke Neurodiagnostics LLC Services may use a different privacy policy to provide notice to you about how we use and disclose the Personal Information we collect in the context of that Service. To the extent that we post or reference a different privacy policy, that different privacy policy, not this Privacy Policy, will apply to your Personal Information collected in the context of that Service.</p>
    <p>We have a limited relationship with the Clients of our Customers. If we receive inquiries or requests from Clients about their Personal Information, we will honor those requests as required by applicable data privacy laws. We will also direct Clients to our Customers, the controller of their personal information.</p>
    <p>By using the Software or the Services, you accept the terms of this Privacy Policy and our terms of service (the “Terms of Service”), and consent to our collection, use, disclosure, and retention of your information as described in this Privacy Policy.  If you have not done so already, please also review our Terms of Service. The Terms of Service contain provisions that limit our liability to you and require you to resolve any dispute with us on an individual basis and not as part of any class or representative action. If you do not agree with any part of this Privacy Policy or our Terms of Service, then you may not use the Software or any of the Services.</p>

    <h2>1. Collection of Information</h2>
    <h3>a. Information You Provide to Us</h3>
    <p>We collect information you provide directly to us, which may include:</p>
    <ul>
        <li>Contact information, such as email address;</li>
        <li>Feedback and correspondence, such as comments and “likes” you provide to our content, information you provide in your responses to surveys, when you participate in market research activities, report a problem with the Services, receive customer support or otherwise correspond with us;</li>
        <li>Usage information, such as information about how you use the Services and interact with us; and</li>
        <li>Marketing information, such as your preferences for receiving marketing communications and details about how you engage with them.</li>
    </ul>
    
    <h3>b. Automatically Collected Information</h3>
    <p>When you access or use the Software or the Services, we automatically collect information about you, which may include, but is not limited to:</p>
    <ul>
        <li><strong>Log Information:</strong> We may collect log information about your use of the Software and the Services, including the type of browser you use, access times and your IP address.</li>
        <li><strong>Device Information:</strong>We may collect information about the computer or mobile device you use to access the Software and our Services, including the hardware model, operating system and version, unique device identifiers, and mobile network information.</li>
    </ul>
    
    <h3>c. Information from Other Sources</h3>
    <p>We may obtain information from other sources, including third parties, and combine that with information we collect through the Software and the Services.</p>
    
    <h3>d. Information We Will Never Collect</h3>
    <p>We will never ask you to share your account password. Never trust anyone that asks you to disclose your password. Do not be fooled if someone reaches out to you pretending to be from us.</p>
    
    <h2>2. Use of Information</h2>
    <p>We use the information we collect to enable you to access and use and otherwise provide, maintain, and improve the Software and our Services. We may also use the information we collect to:</p>
    <ol type='a'>
        <li>send you technical notices, updates, security alerts and support and administrative messages and to respond to your comments, questions and customer service requests;</li>
        <li>communicate with you about products, services, offers, and events offered by us and others, and provide news and information we think will be of interest to you, which may be provided by any means, including by e-mail, in-app notifications, push notifications and display advertising;</li>
        <li>personalize your experience when you use the Software or the Services;</li>
        <li>administer contests, promotions, surveys and other Service features;</li>
	    <li>monitor and analyze trends, usage and activities in connection with the Software and the Services;</li>
	    <li>comply with applicable laws, lawful requests and legal processes, including responding to court orders or requests from regulatory authorities;</li>
	    <li>generate aggregate or de-identified data and use such data for any lawful purpose, including research and analytics; and</li>
	    <li>detect, investigate and prevent fraudulent transactions and other illegal activities, enforce our agreements with users (including our Terms of Service) and protect our rights and property and others.</li>
    </ol>
    <h2>Referral Program:</h2>
    <p>SimplePractice has a referral program that allows our existing customers to refer our Services to others. If a customer refers someone to Evoke, we will let that person know that a referral was generated. For those that receive a referral to our Services, we may collect their contact information from their colleague in order to send you the referral content.</p>
    
    <h2>3. Sharing of Information</h2>
    <p>We do not share or sell the personal information that you provide us with other organizations without your express consent, except as described in this Privacy Policy. We disclose personal information to third parties under the following circumstances:</p>
    <ol type='a'>
        <li>With service providers for hosting, email, and database services.</li>
        <li>To comply with legal requests.</li>
        <li>To enforce our Terms of Service and protect our rights.</li>
        <li>With your consent.</li>
        <li>with vendors, consultants and other service providers who need access to such information to carry out work on our behalf, including hosting, email and database services;</li>
	    <li>in response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation or legal process;</li>
	    <li>if we believe your actions are inconsistent with our user agreements or policies (including our Terms of Service), or to protect our rights, property and our safety or that of others;</li>
	    <li>in connection with, or during negotiations of, any proposed or actual merger, sale of company assets, financing, securitization, insuring, acquisition of all or a portion of our business by another company, or bankruptcy transaction or proceeding;</li>
	    <li>between and among us and our current and future parents, affiliates, subsidiaries and other companies under common control and ownership; and</li>
	    <li>With your consent or at your direction.</li>
    </ol>
    
    <h2>4. Security</h2>
    <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction..</p>
    
    <h2>5. Data Retention, Verification, and Deletion</h2>
    <p>We store the information we collect about you for as long as is necessary for the purposes for which we originally collected it, or for other legitimate business purposes, including to meet our legal or other regulatory obligations, prevent fraud, resolve disputes, troubleshoot problems, assist with any investigation, enforce our Terms of Service, and other actions permitted by law. There is no single retention period applicable to the various types of personal information collected.</p>
    <p>You have the right to: </p>
    <ul>
        <li>verify what Personal Information we hold about you; </li>
        <li>ask for your Personal Information to be corrected or updated; and </li>
	    <li>withdraw your consent to the use by us of your Personal Information and have it deleted from our records. </li>
    </ul>
    <p>If you wish to inquire about and verify and / or correct Personal Information we hold about you, or if you wish to have all your Personal Information permanently deleted from our records, please contact us using the contact information below. Please note that deleting your Personal Information may make it impossible for you to use the Sites or the Services, or certain portions thereof. If you request deletion of your Personal Information, we reserve the right to retain some of your Personal Information for a reasonable time to the extent it is required to be held by us by law, rule or regulation in order to satisfy our legal obligations, or where we reasonably believe that we have a legitimate reason to do so.</p>



    <h2>6. Disclaimer About Sharing Personal Information Online</h2>
    <p>You acknowledge that when sharing personal information online, there is always a risk of data breaches, including data breaches in which third parties unlawfully access our systems or the systems of our third-party providers, which store personal information.</p>
    
    <h2>7. Limitation on Liability</h2>
    <p>While we take measures to protect personal information, you agree that in no event will we, our suppliers, partners, licensors, dealers, representatives, associates or affiliates and each of their respective employees, contractors, agents, advisors, representatives, shareholders, officers and directors (collectively, the “Evoke Parties”) be liable to you or any other person in any way in contract, tort (including negligence), civil liability or otherwise for any claims, damages, obligations, losses, liabilities, costs, debts or expenses (including but not limited to lawyer’s fees and disbursements), whether direct, indirect, special, economic, incidental, consequential, punitive or exemplary, including without limitation loss of revenue, data, anticipated profits or lost business, howsoever caused, including by way of negligence, arising from, related to or connect with the loss or theft of your personal information. You agree that if, notwithstanding the other provisions of this Agreement, a Evoke Party is found to be liable for any claims, proceedings, liabilities, obligations, damages, losses or costs, such Evoke Party’s liability shall in no event exceed the amount paid by you for the Software or the Services in the one (1) month immediately preceding the event giving rise to your claim, if any.</p>
    
    <h2>8. Transfer of Information to Other Countries</h2>
    <p>We are based in the United States. However, we may transfer personal information to outside agents or service providers (including our affiliates acting in this capacity) that perform services on our behalf, such as customer service and support, marketing and analytics, data hosting or processing services or similar services.  Some of these service providers may be located outside of the United States, including the Canada, and as a result your personal information may be processed in the United States or elsewhere outside of Canada, where local laws may permit foreign government and national security authorities to access personal information in certain circumstances.</p>
    
    <h2>9. Residents Outside The United States</h2>
    <p>We are committed to complying with this Privacy Policy and the data protection laws that apply to our collection and use of your Personal Information. We are located in the United States, where the laws may be different and, in some cases, less protective than the laws of other countries. By providing us with your Personal Information and using the Services, you acknowledge that your Personal Information will be transferred to and processed in the United States and other countries where we and our vendors operate.</p>
    <p>If you are a resident of the European Economic Area (“EEA”), you have certain rights and protections under the law regarding the processing of your personal data. Any reference to “personal information” in this Privacy Policy should be understood as referring to “personal data”, defined under the General Data Protection Regulation (“GDPR”) as “any information relating to an identified or identifiable natural person (“data subject”); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person”.</p>
    <ol type='a'>
        <li>Legal Basis for Processing</li>
        <p>If you are a resident of the EEA, when we process your personal data, we will only do so in the following situations:</p>
        <ol type='i'>
            <li>with your consent;</li>
            <li>to provide access to the Software or perform the Services you have requested from us or, upon your request, to take the steps necessary to provide you with the Software or such Services; or</li>
            <li>in the furtherance of our legitimate interests in maintaining business relationships and communicating with you as a business contact, about our activities, the Software and the Services and providing, securing and improving the Software and the Services.</li>
            <li>You have consented to the processing of your personal data for one or more specific purposes. We consider that our legitimate interests are in compliance with the GDPR and your legal rights and freedoms. You have the right to object to any of this processing and, if you want to, please contact us at the contact details indicated below.</li>
        </ol>
        <li>Data Subject Requests</li>
        <p>If you are a resident of the EEA, you have the right to access personal data we hold about you and to ask that your personal data be corrected, erased, or transferred. You may also have the right to object to, or request that we restrict certain processing. If you would like to exercise any of these rights, you can contact us as indicated below. Please note that the limitation or deletion of your personal data may mean we will be unable to provide you with the Software or the Services. You also have the right to receive your personal data in a machine-readable format and have the data transferred to another party responsible for data processing.</p>
        <li>Questions or Complaints</li>
        <p>If you are a resident of the EEA and have a concern about our processing of personal data that we are not able to resolve, you have the right to lodge a complaint with the data privacy authority where you reside. For contact details of your local Data Protection Authority, please see: http://ec.europa.eu/justice/data-protection/article-29/structure/data-protection-authorities/index_en.htm.</p>
    </ol>
   
    <h2>10. Residents of California</h2>
    <p>California Civil Code Section § 1798.83 permits users who are California residents to request certain information, including the categories of personal information disclosed to third parties for their marketing purposes and the names and addresses of those third parties, regarding our disclosure of personal information to third parties for their direct marketing purposes, if any. If you are a California resident and you have questions about our practices with respect to sharing information with third parties and affiliates for their direct marketing purposes, please contact us at info@evokediagnostics.com.</p>
    
    <h2>11. Your Choices</h2>
    <ol type='a'>
        <li>Account Information</li>
            <p>You may update, correct or delete information about you at any time by contacting us as indicated in the “Contact Us” section below.  Please note that we may retain cached or archived copies of information about you for a certain period of time. You can request to change contact choices, opt-out of our sharing with others, and update your personal information and preferences.</p>
        <li>Promotional Communications</li>
            <p>You may opt out of receiving promotional communications from us by following the instructions in those communications or by contacting us as indicated in the “Contact Us” section below. If you opt out, we may still send you non-promotional emails, such as those about your account or our ongoing business relations.</p>
        <li>Product Research Opt-out</li>
            <p>Occasionally, we may contact you regarding opportunities to participate in product research, surveys, or other product testing. We will provide you with clear and concise instructions, specific to the method we use to contact you, regarding how to opt-out of product research communications.</p>
    </ol>
    <h2>12. Changes to this Privacy Policy</h2>
    <p>
    We may change this Privacy Policy at any time. We encourage you to periodically review this page for the latest information on our privacy practices. If we make any changes, we will change the Last Updated date above.
    Any modifications to this Privacy Policy will be effective upon our posting of the new terms. In all cases, your continued use of the Software or the Services after the posting of any modified Privacy Policy indicates your acceptance of the terms of the modified Privacy Policy.
    </p>

    <h2>13. Policies for Children</h2>
    <p>Our products, the Software and the Services, are only directed to persons of the age of 18 or over. We do not knowingly collect any personal information from individuals under 18. If we become aware that we have unknowingly collected personal information from an individual under the age of 18, we will make commercially reasonable efforts to delete such personal information from our records. If you are concerned and are aware of a user under the age of 18 using the Software, the Services or our products, please contact us by contacting us as indicated in the “Contact Us” section below.</p>
    
    <h2>14. Contact Us</h2>
    <p>If you have any questions, please contact us at: <a href="mailto:info@evokediagnostics.com">info@evokediagnostics.com</a></p>
            </div>
        </div>
    )
}

export default Privacy;