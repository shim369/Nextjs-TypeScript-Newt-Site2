import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import { Faq } from './Faq';

describe('FAQ', () => {
  test('renders and toggles visibility for all FAQs', () => {
    render(<Faq />);
    
    const faqs = [
      { question: "How is the service fee determined?", answer: "The fee varies based on the project's scope, requirements, and the technologies used. The base plan starts at ¥300,000, but a specific estimate will be provided after I have the details of your project." },
      { question: "Do you offer post-development support?", answer: 'Yes, I provide post-development support with maintenance plans. The basic maintenance fee is ¥20,000 per month.' },
      { question: "What technologies do you use?", answer: 'I utilize a variety of technologies, primarily including HTML, CSS/SASS, Astro, JavaScript, Next.js, Nuxt.js, Python, and Django. For content management systems (CMS), I use MicroCMS, Newt, and WordPress.' },
      { question: "What design tools do you use?", answer: "For design, I use the Figma platform along with Adobe's toolset, which includes Photoshop and Illustrator." },
      { question: "What is the estimated delivery time?", answer: "The delivery time depends on the project's size and requirements, but for the base plan, I typically estimate a delivery time of 4 to 6 weeks." },
      { question: "What happens if there are changes in requirements during the project?", answer: 'If there are changes in requirements during the project, there may be additional charges. I will explain the changes and their impact and provide a new estimate accordingly.' },
      { question: "Do you provide content creation services?", answer: 'Yes, I offer content creation services. The base fee for content creation starts at ¥30,000.' },
    ];

    faqs.forEach((faq, index) => {
      const q = screen.getByText(faq.question);
      const a = screen.getByText(faq.answer);

      // 質問と回答は最初は非表示であるべき
      expect(q).toBeInTheDocument();
      expect(a).toBeInTheDocument();
      expect(a).toHaveStyle({ display: 'none' });

      // 質問をクリックして表示・非表示を切り替える
      fireEvent.click(q);

      // 回答が表示されるはず
      expect(a).toHaveStyle({ display: 'block' });
    });
  });
});