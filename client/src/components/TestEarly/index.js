import React from "react";
import useThemeStorage from '../themeStorage';

function TestEarly() {
    const [ theme ] = useThemeStorage();
    
    return (
        <div className={theme} style={{width: '100%', height: '100%'}}>
            <div className='test-early-container'>
                <div className='warning-signs-title-container'>
                    <h3 className='warning-signs-title heading-xl text-center' style={{color: 'blue'}}>Reasons to Test Early</h3>
                    <h3 className='warning-signs-title heading-xl text-center' >for Cognitive Decline</h3>
                </div>
                <div className='motion-div-container'>
                    <div className='motion-div-p'>
                        <p>To identify early signs of cognitive decline</p>
                    </div>
                    <div className='motion-div-p'>
                        <p>To facilitate early diagnosis and treatment of potential causes</p>
                    </div>
                    <div className='motion-div-p'>
                        <p>To track changes over time</p>
                    </div>
                    <div className='motion-div-p'>
                        <p>To provide personalized interventions to maintain or improve cognitive function</p>
                    </div>
                    <div className='motion-div-p'>
                        <p>To provide reassurance and support to patients and their families</p>
                    </div>
                    <div className='motion-div-p'>
                        <p>To inform advanced care planning and decision-making</p>
                    </div>
                    <div className='motion-div-p'>
                        <p>To promote healthy lifestyle choices and habits that support brain health.</p>
                    </div>
                    <div className='motion-div-p'>
                        <p>To determine appropriate medical or support interventions.</p>
                    </div>
                    </div>
                </div>
            </div>   
        )}

export default TestEarly;