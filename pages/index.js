import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filmes hoje</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em Destaque
        </h1>
        <Link href="/busca">Ir para a Busca</Link>
        <ul>
          {list.map(item=>(
            <li>
              <a href={`/movie/${item.id}`}>
                  <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150"/><br/>
                  {item.title}
              </a>
            </li>
          ))}
        </ul>
      
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://cimana-next-js.vercel.app/api/trending');
  const json = await res.json();
  return{
    props:{
      list:json.list
    }
  };
}
