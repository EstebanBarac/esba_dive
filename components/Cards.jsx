import React from 'react';
import styles from '../styles/modal.module.css';
import Link from 'next/link';


export default function Cards() {

  return (
    <div>
        <section id='cursos' className="md:h-full flex items-center ">
        <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl text-gray-700 font-semibold">Nuestros Cursos de Buceo</h2>
            </div>
            <div className="flex flex-wrap -m-4 ">

                <div className="p-4 sm:w-1/2 lg:w-1/3 ">
                    <div className="h-full shadow-2xl shadow-slate-700 rounded-2xl overflow-hidden text-white bg-zinc-800">
                        <img className="lg:h-[30rem]  w-full sm:object-cover object-center"
                            src='https://cdn.discordapp.com/attachments/841443299839574017/1047331318578556979/open_water.jpg?ex=66ab950c&is=66aa438c&hm=1838bb503f0571b3dd855856ef6d3364ae1939272b1a0abc6f0eb8be33374822&' alt="blog" />
                        <div class="p-6 ">
                            <h2 className="text-2xl font-bold mb-3">PADI Open Water</h2>
                            <p className="leading-relaxed text-lg mb-3">El PADI Open Water Diver es el primer nivel de certificación de buceo. Un PADI Instructor altamente entrenado te enseñará a bucear en un entorno de aprendizaje relajado y seguro. Aprende los principios y la terminología del buceo, adquiere las destrezas básicas de buceo y conocimientos para bucear en tu entorno local o en el extranjero y ser un embajador del mundo subacuático</p>
                            <div className="flex flex-col items-center mt-4">

                                    <button className='bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded'>
                                        <Link href='/openwater' className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Ver Más
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>


                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full shadow-2xl shadow-slate-700 rounded-2xl overflow-hidden text-white bg-zinc-800">
                        <img class="lg:h-[30rem]  w-full sm:object-cover object-center"
                            src="https://media.discordapp.net/attachments/841443299839574017/1047331354645377084/advanced.jpg?ex=66ab9515&is=66aa4395&hm=8b08955f73f863a58910cdbd96a1c069082786827ee52d8122f0101de04216e2&=&format=webp&width=1014&height=676" alt="blog" />
                        <div class="p-6  hover:text-white ">
                            <h2 class="text-2xl font-bold mb-3">PADI Advanced Open Water Diver</h2>
                            <p class="leading-relaxed text-lg mb-3">El curso Advanced Open Water Diver perfecciona tus técnicas. Practicarás navegación y
                                flotabilidad, probarás el buceo a profundidad y harás tres inmersiones de especialidad de tu
                                elección. Por cada inmersión de especialidad que completes, puedes obtener crédito para
                                conseguir certificaciones de especialidad PADI</p>
                            <div class="flex flex-col items-center mt-4 lg:mt-10">
                                    <button className='bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded'>
                                        <Link href='/advanced' class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Ver Más
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="h-full shadow-2xl shadow-slate-700 rounded-2xl overflow-hidden text-white bg-zinc-800">
                        <img className="lg:h-[30rem]  w-full sm:object-cover object-center"
                            src="https://media.discordapp.net/attachments/841443299839574017/1047332820336525333/specialities2.jpg?ex=66ab9672&is=66aa44f2&hm=0f69a12966e1134242e2e652a1c18e92c59410e3452ad63ceef2195852bfcf70&=&format=webp&width=1014&height=676" alt="blog" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-3">PADI Specialities</h2>
                            <p className="leading-relaxed text-lg mb-3">Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
                                buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
                                como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
                                aventura subacuática.</p>
                            <div className="flex flex-col items-center mt-4 lg:mt-10">

                                    <button className='bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded'>
                                        <Link href='/specialities' className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Ver Más
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </div>
  )
}
