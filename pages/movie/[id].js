import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filmes hoje</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            {info.title}
        </h1>
        <Link href="/busca">Ir para a Busca</Link>
        <p>{info.overview}</p>

        <p>Nota {info.vote_average}</p>
        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="400"/>
        <p>{info.release_date}</p>
        
      
      </main>
    </div>
  )
}

//context recebe o valor da pasta [id]
export async function getServerSideProps(context) {
  const res = await fetch(`https://cimana-next-js.vercel.app/api/movie/${context.params.id}`);
  const json = await res.json();

  console.log("JSON", json);

  return{
    props:{
      info: json.info
    }
  };
}
