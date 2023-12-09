import styles from '../styles/page.module.scss'

interface UnderInnerProps {
    title: string;
}

export const UnderInner = (props: UnderInnerProps ) => {
  return (
    <div className={styles.underInner}>
      <h2>{props.title}</h2>
    </div>
  );
};