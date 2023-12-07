import Link from 'next/link';

export const LinkList = () => {
    return (
        <>
            <Link href="/">TOP</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/service">SERVICE</Link>
            <Link href="/blog">BLOG</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">CONTACT</Link>
        </>
    );
};