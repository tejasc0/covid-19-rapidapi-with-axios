import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  var options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/asia',
    headers: {
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setLoading(false);
      setData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [data]);

  return (
    <div>
      <Head>
        <title>COVID19 | Stats</title>
        <meta name="description" content="get all Asian countries covid-19 data." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-sky-800 md:text-6xl text-3xl md:m-10 m-4 font-thin">COVID19 | Stats</div>

      {loading && <div className="text-2xl mx-auto w-max md:my-10 my-4">Loading...</div>}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-auto p-4">

        {data.map((item) => {
          return <div key={item.id}>

            <div className="shadow-lg border-2 m-4 p-3 rounded-lg">
              <div className="">Country: {item.Country}</div>
              <div className="">Continent: {item.Continent}</div>
              <div className="">Continent: {item.Continent}</div>
              <div className="">Recovery Proporation: {item.Recovery_Proporation}</div>
              <div className="">Population: {item.Population}</div>
              <div className="">Deaths per 1Mn: {item.Deaths_1M_pop}</div>
            </div>
          </div>
            ;
        })}
      </div>

    </div>
  )
}
