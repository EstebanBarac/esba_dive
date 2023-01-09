import Head from 'next/head';
import Cards from '../components/Cards';
import Dan from '../components/Dan';
import Experiencias from '../components/Experiencias';
import Hero from '../components/Hero';
import Nosotros from '../components/Nosotros';

const Home = () => {
  return (
    <div>
      <Head>
        <title>ESBA DIVE</title>
        <meta name="description" content="Cursos de Buceo con certificacion internacional en patagonia Argentina" />
        <link rel="icon" href="https://cdn.emojidex.com/emoji/seal/scuba_diver.png" />
      </Head>
      <Hero heading='Esba Dive' message='Cursos de buceo con certificacion internacional'/>
      <Nosotros />
      <Cards />
      <Experiencias />
      <Dan />
    </div>
  
  )
};

export default Home;
