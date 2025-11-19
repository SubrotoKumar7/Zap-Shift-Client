import React from 'react';

const Faq = () => {
    return (
        <div className='py-25'>
            <div className='mb-10 text-center'>
                <h1 className='text-[40px] font-extrabold text-secondary mb-6'>Frequently Asked Question (FAQ)</h1>
                <p className='font-medium'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                    </div>
                    
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Is it suitable for all ages and body types?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                    </div>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">Does it really help with back pain and posture improvement?</div>
                    <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
                    
                </div>
            </div>
        </div>
    );
};

export default Faq;