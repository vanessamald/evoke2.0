import React, {useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useInView } from 'framer-motion';
import { BsArrowRight } from "react-icons/bs";

function Providers(){
    const [show, setShow] = useState(false);
    const [fullscreen, setFullscreen] = useState(true);

    const ref = useRef(null)
    const isInView = useInView(ref)
    const transitions = {
        animationName: isInView ? 'slideUp' : 'none',
        animationDuration: '2s',
        animationTimingFunction: 'ease-in',
        display: 'block'
       }

    return (
        <div>
            <div id={'providers'} ref={ref} className='providers-container'>
                <h2 className='services-title' style={transitions}>Providers</h2>
                <p>
                At the primary care level, current testing lacks the sensitivity and specificity to make accurate patient assessments. Until recently, it has been difficult to objectively assess patients for cognitive impairment due to the lack of specificity.
                There is an increased need for physician to test neuro-function due to the aging population, the prevalence of stress and pain, and increased awareness of the impact of head injuries on cognition. Memory loss and cognitive symptoms can occur outside of normal age-associated memory loss. 
                </p>
                <button className='providers-button' onClick={() => setShow(true)}>More Information<BsArrowRight/></button>
            </div>
            <Modal
        show={show}
        onHide={() => setShow(false)}
        fullscreen={fullscreen}
        
      >
        <Modal.Header closeButton>
            <Modal.Title>Information for Providers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                When assessing a head injury, physician must be sure to accurately assess brain function to avoid legal repercussions. Without proper diagnosis, a head injury can have a severe negative impact on patient outcomes. 
                Patients that are cognitively impaired can present with symptoms of confusion, forgetfulness, “brain fog,” and functional impairment.
                </p>
                <p>
          BrainView focuses on multiple core cognitive functions to support:
            – proactive brain health
            – informed clinical decision-making
            – customized patient care
            Healthy cognitive function is essential to your patient’s overall quality of life. BrainView promotes brain health by analyzing the electrical activity of the brain, and scoring the brain’s cognitive performance in information processing, memory, attention and concentration.
            The BrainView System quantifies and qualifies electrical impulses and patterns in the brain. We identify how the brain performs. Scored areas include processing abilities, memory, concentration, and attention span. It is vital to understand how your brain performs so that you can live your best life. Prompt treatment is available to ensure that you have a healthy brain for years to come.
            Benefits of BrainView
            The ability to rapidly, inexpensively, and reliably measure the brain’s functional health is vital in identifying numerous medical conditions. Before the BrainView system, the only brain assessment technology available that used EEG was not portable, used complicated accompanying software and was not practical to use in a busy medical practice. BrainView was developed from necessity to create a wireless, automated, rapidly deploying brain function measurement and treatment system that was also non-intrusive and low-cost.
            Due to the test length of 25-45 minutes, the BrainView is ideal for primary care and specialty physicians caring for patients within their offices.
            BrainView is backed by over 30 years of globally celebrated, peer-reviewed scientific research.
            BrainView system combines electrophysiological biomarkers associated with numerous cognitive conditions. It details known clinical correlation based on over 600 scientific publications and defines electroencephalography-derived metrics. Recommended medical interventions are based on these clinical correlations.
            Practical Benefits:
            – Improves clinical outcomes through early, objective assessment
            – Detects declines in memory markers up to 15 years prior to the manifestation of symptoms
            – Detects head injuries that a CT or MRI may be unable to detect
            – A quick and easy functional assessment in the office
            – Uses qEEG, ERP, and eLoRETA imaging, EEG, and ERP as reliable measures for head injury
            – Empowers physicians to initiate the necessary treatment early on
            – Allows initiation of effective treatment options, altering the path of the disease state
            – Offers innovative diagnostic and treatment methods to patients
            – Also uses ANS/HRV, ECG biomarkers
            </p>
            <p>
            TECHNOLOGY BENEFITS
            qEEG testing is useful for improving care for cognitive conditions and mental health in patients who may be experiencing:
            •	Mild Cognitive Impairment
            •	Dementia
            •	Alzheimer’s Disease
            •	ADD & ADHD
            •	Traumatic Brain Injury
            •	Depression
            •	Anxiety
            •	Post-Traumatic Stress Disorder
            •	Insomnia or Sleep Apnea
            •	Dizziness
            •	Changes in Vision
            •	Changes in Hearing
            •	Fatigue

          BrainView helps clinicians to Identify:
            – Cognitive function and impairment
            – Biomarkers associated with cognitive impairment and memory loss
            – Autonomic nervous system function
            – Physiologic functions associated with sleep disorders, memory loss, anxiety disorders and attention difficulties

          BrainView helps clinicians to Assess:
            – The degree of cognitive impairment
            – Physiologic changes in cognitive function over time
            – Cognitive function response to clinical therapies
            - Objectively Manage Cognitive Function and Memory Loss Over Time
            BrainView provides physicians with highly-sensitive, objective data on brain function. This feature makes BrainView an excellent complimentary assessment tool to traditional subjective clinical questionnaires for long-term patient management. In essence, BrainView can detect subtle variations in brain function that other tests may miss.
            The system may be especially adept at illuminating patients’ responses to therapy in the beginning stages of the disease. Early detection leads to early intervention, addressing pathologies more effectively and optimizing patient outcomes. Specifically, physicians can obtain meaningful, objective data on patient response to:
            – Pharmacologic therapy
            – Nutritional supplementation
            – Behavioral therapy
            – Diet and exercise
            – Neurotherapy
          </p>
        </Modal.Body>
      </Modal>
        </div>
    )
}

export default Providers;