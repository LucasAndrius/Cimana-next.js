import Head from 'next/head';
import {useState} from 'react';

import styles from '../styles/Home.module.css';

export default function Home({list}) {

  const [searchText, setSeartchText] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleSearch = async () =>{
    if(searchText !== ''){
      const result = await fetch(`https://cimana-next-js.vercel.app/api/search?q=${searchText}`);
      const json = await result.json();
      
      setMovieList(json.list);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Filmes hoje | Busca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Busca
        </h1>
        <input type="text" value={searchText} onChange={e=>setSeartchText(e.target.value)}/>
        Termo de busca: {searchText}
        <button onClick={handleSearch}>Buscar</button>
        <hr/>

        <ul>
            {movieList.map(item=> (
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
