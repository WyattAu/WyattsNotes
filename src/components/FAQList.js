import Details from '@theme/Details';
import React from 'react';

export default function FAQList({ faqs }) {
  return (
    <Details summary="All FAQs" className="faq-group">
      <div className="faq-group-content">
        {faqs.map((faq, index) => (
          <Details key={index} summary={faq.question} className="faq-item">
            <p>{faq.answer}</p>
          </Details>
        ))}
      </div>
    </Details>
  );
}
