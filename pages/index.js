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
        <link rel="icon" href="https://cdn.discordapp.com/attachments/841443299839574017/1268233056620122142/diving-mask_1f93f.png?ex=66abad93&is=66aa5c13&hm=46dee9a6891380d116200ccb3bf46ebedac3ea8a54760d2a398bc916f4501c95&" />
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
