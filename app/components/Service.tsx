import styles from '../styles/page.module.scss';
import { LinkButton } from './LinkButton';

export const Service = () => {
    const services = [
        {
            title: "ABOUT",
            text: "I established this business in 2023 with a mission to leverage technology and accelerate businesses. I am committed to supporting your business success with my experience and skills.",
            linkText: "/about"
        },
        {
            title: "SERVICE",
            text: "I provide tailor-made web solutions for your business, utilizing HTML, CSS, JavaScript, Python, and more. From online shops to corporate websites, I cater to a wide range of needs.",
            linkText: "/service"
        },
        {
            title: "BLOG",
            text: "I regularly publish articles covering a wide range of topics, from the latest technology trends to programming tutorials and up-to-date information. It&apos;s a reliable source to stay informed about the latest industry trends.",
            linkText: "/blog"
        },
        {
            title: "FAQ",
            text: "From pricing and post-development support to the technologies I use, I have compiled frequently asked questions and their answers in one place. If you have any uncertainties or questions, this section might provide quick solutions.",
            linkText: "/faq"
        }
    ]
    return (
        <>
            {services.map((service) => (
                <div className={styles.contentsItem}>
                    <div className={styles.contentsItemInner}>
                        <h2>{service.title}</h2>
                        <p>{service.text}</p>
                        <LinkButton href={service.linkText} />
                    </div>
                </div>
            ))}
        </>
    );
};