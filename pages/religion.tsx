import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function ReligionPage() {
    return (
        <div className={styles.container}>
            <h1>Religion</h1>
            <h4><Link href='/'>Back to home</Link></h4>
        </div>
    )
}