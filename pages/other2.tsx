import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Other2Page() {
    return (
        <div className={styles.container}>
            <h1>Other2</h1>
            <h4><Link href='/'>Back to home</Link></h4>
        </div>
    )
}