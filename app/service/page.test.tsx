import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Page from './page';

interface Service {
	title: string;
	technologies: string;
	price: string;
}

interface AdditionalOption {
	title: string;
	price: string;
}

describe('SERVICE Page', () => {
	test('renders service details and additional options', () => {
		render(<Page />);

		const services: Service[] = [
			{ title: "Website Development", technologies: "HTML, CSS/SASS, JavaScript, Astro", price: "¥300,000 ~" },
			{ title: "Web Application Development", technologies: "Next.js, Nuxt.js, Python, Django", price: "¥500,000 ~" },
			{ title: "CMS Construction", technologies: "WordPress, MicroCMS, Newt", price: "¥200,000 ~" },
			{ title: "Design & UI/UX", technologies: "Figma, Adobe Photoshop, Illustrator", price: "¥150,000 ~" },
		];

		services.forEach((service: Service) => {
			const serviceTitle = screen.getByText(new RegExp(service.title, 'i'));
			const serviceTechnologies = screen.getByText(new RegExp(service.technologies, 'i'));
			const servicePrice = screen.getByText(new RegExp(service.price, 'i'));

			expect(serviceTitle).toBeInTheDocument();
			expect(serviceTechnologies).toBeInTheDocument();
			expect(servicePrice).toBeInTheDocument();
		});

		const additionalOptions: AdditionalOption[] = [
			{ title: "Maintenance", price: "¥20,000 ~ /Month" },
			{ title: "SEO Optimization", price: "¥50,000 ~" },
			{ title: "Content Creation", price: "¥30,000 ~" },
		];

		additionalOptions.forEach((option: AdditionalOption) => {
			const optionTitle = screen.getByText(new RegExp(option.title, 'i'));
			const optionPrice = screen.getByText(new RegExp(option.price, 'i'));

			expect(optionTitle).toBeInTheDocument();
			expect(optionPrice).toBeInTheDocument();
		});
	});
});
