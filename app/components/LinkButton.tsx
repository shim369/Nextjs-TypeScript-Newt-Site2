import styles from '../styles/page.module.scss';
import Link from 'next/link';

interface LinkButtonProps {
    href: string;
}

export const LinkButton = ({ href }: LinkButtonProps) => {
    return (
        <Link href={href} className={styles.linkBtn}>
            Show Detail
        </Link>
    );
};