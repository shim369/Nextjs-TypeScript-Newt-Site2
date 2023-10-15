"use client";
import React, { useState } from 'react';
import Head from 'next/head';

export default function Page() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const handleToggleQuestion = (index: number) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter((q) => q !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };

  return (
    <>
    <Head>
      <title>FAQ</title>
    </Head>
    <section id="faq">
      <div className={'under-inner'}>
        <h2>FAQ</h2>
      </div>
      <div className={'container-inner'}>
      <p className={'under-read'}>I are here to answer your questions. If you have any inquiries, <br />please don&apos;t hesitate to contact us.</p>
        <div className={'qa-list'}>
          {faqData.map((faq, index) => (
            <dl className={'qa'} key={index}>
              <dt onClick={() => handleToggleQuestion(index)} className={openQuestions.includes(index) ? 'open' : ''}>
                {faq.question}
              </dt>
              <dd style={{ display: openQuestions.includes(index) ? 'block' : 'none' }}>
                {faq.answer}
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

const faqData = [
  {
    question: 'How is the service fee determined?',
    answer: "The fee varies based on the project's scope, requirements, and the technologies used. The base plan starts at ¥300,000, but a specific estimate will be provided after I have the details of your project.",
  },
  {
    question: 'Do you offer post-development support?',
    answer: 'Yes, I provide post-development support with maintenance plans. The basic maintenance fee is ¥20,000 per month.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'I utilize a variety of technologies, primarily including HTML, CSS/SASS, Astro, JavaScript, Next.js, Nuxt.js, Python, and Django. For content management systems (CMS), I use MicroCMS, Newt, and WordPress.',
  },
  {
    question: 'What design tools do you use?',
    answer: "For design, I use the Figma platform along with Adobe's toolset, which includes Photoshop and Illustrator.",
  },
  {
    question: 'What is the estimated delivery time?',
    answer: "The delivery time depends on the project's size and requirements, but for the base plan, I typically estimate a delivery time of 4 to 6 weeks.",
  },
  {
    question: 'What happens if there are changes in requirements during the project?',
    answer: 'If there are changes in requirements during the project, there may be additional charges. I will explain the changes and their impact and provide a new estimate accordingly.',
  },
  {
    question: 'Do you provide content creation services?',
    answer: 'Yes, I offer content creation services. The base fee for content creation starts at ¥30,000.',
  },
];