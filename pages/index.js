import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          Soph's Blog
        </h1>

        <h2 className={styles.description}>
          Password required...        
        </h2>

        <div className={styles.video}>

          <div className={styles.card}>
			      <Link href="/religion">
            <i className="fa-solid fa-cross" style={{color: "#AF3D4E",}} aria-hidden="true" title="religion"></i>
            <span className="sr-only">religion</span>
            </Link>
          </div>

          <div className={styles.card}>
			      <Link href="/fathers">
            <i className="fa-solid fa-baby" style={{color: "#AF3D4E",}} aria-hidden="true" title="fathers"></i>
            <span className="sr-only">fathers</span>
            </Link>
          </div>

          <div className={styles.card}>
			      <Link href="/other1">
            <i className="fa-solid fa-circle-question" style={{color: "#AF3D4E",}} aria-hidden="true" title="other1"></i>
            <span className="sr-only">other1</span>
            </Link>
          </div>

          <div className={styles.card}>
			      <Link href="/other2">
            <i className="fa-solid fa-circle-question" style={{color: "#AF3D4E",}} aria-hidden="true" title="other2"></i>
            <span className="sr-only">other2</span>
            </Link>
          </div>



        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
