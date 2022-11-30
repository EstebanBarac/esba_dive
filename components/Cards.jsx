import React, { useState } from 'react';
import styles from '../styles/modal.module.css';
import Link from 'next/link';


export default function Cards() {

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);

  return (
    <div>
        <section id='cursos' className="md:h-full flex items-center ">
        <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-12">
                <h5 className="text-base md:text-lg text-indigo-700 mb-1">Aprendé con Nosotros</h5>
                <h2 className="text-4xl md:text-6xl text-gray-700 font-semibold">Nuestros Cursos de Buceo</h2>
            </div>
            <div className="flex flex-wrap -m-4 ">

                <div className="p-4 sm:w-1/2 lg:w-1/3 ">
                    <div className="h-full shadow-2xl shadow-slate-700 rounded-2xl overflow-hidden text-white bg-zinc-800">
                        <img className="lg:h-[30rem]  w-full sm:object-cover object-center"
                            src='https://cdn.discordapp.com/attachments/841443299839574017/1047331318578556979/open_water.jpg' alt="blog" />
                        <div class="p-6 ">
                            <h2 className="text-2xl font-bold mb-3">PADI Open Water</h2>
                            <p className="leading-relaxed text-lg mb-3">El PADI Open Water Diver es el primer nivel de certificación de buceo. Un PADI Instructor altamente entrenado te enseñará a bucear en un entorno de aprendizaje relajado y seguro. Aprende los principios y la terminología del buceo, adquiere las destrezas básicas de buceo y conocimientos para bucear en tu entorno local o en el extranjero y ser un embajador del mundo subacuático</p>
                            <div className="flex items-center flex-wrap ">

                                    <button onClick={() => setShowModal1(true)} className='bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded'>
                                        <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Ver Más
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>


                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full shadow-2xl shadow-slate-700 rounded-2xl overflow-hidden text-white bg-zinc-800">
                        <img class="lg:h-[30rem]  w-full sm:object-cover object-center"
                            src="https://cdn.discordapp.com/attachments/841443299839574017/1047331354645377084/advanced.jpg" alt="blog" />
                        <div class="p-6  hover:text-white ">
                            <h2 class="text-2xl font-bold mb-3">PADI Advanced Open Water Diver</h2>
                            <p class="leading-relaxed text-lg mb-3">El curso Advanced Open Water Diver perfecciona tus técnicas. Practicarás navegación y
                                flotabilidad, probarás el buceo a profundidad y harás tres inmersiones de especialidad de tu
                                elección. Por cada inmersión de especialidad que completes, puedes obtener crédito para
                                conseguir certificaciones de especialidad PADI</p>
                            <div class="flex items-center flex-wrap ">

                                    <button onClick={() => setShowModal2(true)} className='bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded'>
                                        <a class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Ver Más
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="h-full shadow-2xl shadow-slate-700 rounded-2xl overflow-hidden text-white bg-zinc-800">
                        <img className="lg:h-[30rem]  w-full sm:object-cover object-center"
                            src="https://cdn.discordapp.com/attachments/841443299839574017/1047332820336525333/specialities2.jpg" alt="blog" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-3">PADI Specialities</h2>
                            <p className="leading-relaxed text-lg mb-3">Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
                                buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
                                como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
                                aventura subacuática.</p>
                            <div className="flex items-center flex-wrap ">

                                    <button onClick={() => setShowModal3(true)} className='bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded'>
                                        <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Ver Más
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {showModal1 ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl sm:m-3">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full text-black bg-slate-200 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h2 className="text-3xl font-bold">PADI Open Water</h2>
                </div>
                <div className="relative p-6 flex-auto">
                        <p className='text-lg font-semibold'>El curso Open Water, es el primer nivel de las certificaciones de Buceo PADI, finalizado el curso te permite realizar inmersiones en cualquier parte del mundo hasta una profundidad máxima de 18 metros,
                            habilitando también a la renta de equipamiento en caso de ser necesario.</p>
                            <h4 className='text-lg font-bold'>El curso consta de tres áreas:</h4>
                    <p className='text-lg font-semibold'>- Parte Teórica, modalidad online o presencial</p> 
                        <p className='text-lg font-semibold'>- Parte Práctica Aguas Confinadas ( 5-inmersiones en piscina climatizada)</p>
                        <p className='text-lg font-semibold'>- Parte Práctica Aguas Abiertas      ( 4- inmersiones en Lago Marimenuco)</p>
                        <h4 className='text-lg font-bold'>Incluye:</h4>
                        <p className='text-lg font-semibold'>- Clases Personalizadas con Instructor PADI</p>
                        <p className='text-lg font-semibold'>- Manuales y Material PADI</p>
                        <p className='text-lg font-semibold'>- Equipamiento de buceo completo durante el curso (traje neoprene, BCD, tanque, aletas, etc.)</p>
                        <p className='text-lg font-semibold'>- Inmersiones Parte práctica ( No incluye traslados)</p>
                        <p className='text-lg font-semibold'>- Certificación Internacional</p>   
                    <h4 className='text-lg font-bold'>Tiempo: 10hs teoría, 5 a 7 días práctica</h4>
                    <h4 className='text-lg font-bold'>Requisitos: Saber nadar y ser mayor de 15 años</h4>   
                    <p className='text-lg font-semibold'>(de 10 a 14 años reciben certificación Junior)</p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-red-500 shadow-md shadow-red-500/50 hover:bg-red-700 text-white font-bold text-lg py-2 px-4 rounded mr-4"
                    type="button"
                    onClick={() => setShowModal1(false)}
                  >
                    Cerrar
                  </button>
                  <button
                    className="bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded"
                    type="button">
                    <Link href='https://api.whatsapp.com/send?phone=5492995125034&text=Buenas!%20Quiero%20mas%20informacion%20sobre%20el%20curso%20PADI%20Open%20Water'>Me interesa</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}


      {showModal2 ? ( 
        <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-full my-6 mx-auto max-w-xl sm:m-3">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full text-black bg-slate-200 outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
            <h2 className="text-3xl font-bold">PADI Advanced Open Water Diver.</h2>
          </div>
          <div className="relative p-6 flex-auto">
                  <p className='text-lg font-semibold mt-2'>Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
                    buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
                    como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
                    aventura subacuática.
                  </p>
                      
              <p className='text-lg font-semibold mt-2'>Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
                    buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
                    como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
                    aventura subacuática.</p> 
                  <p className='text-lg font-semibold mt-2'>Vive nuevas aventuras con un PADI Instructor a tu lado. Perfecciona tus habilidades de
                flotabilidad, aumenta la confianza en tus técnicas de navegación y prueba nuevas actividades
                de buceo a más de 18m/60pies de profundidad.</p>
                  <h4 className='text-lg font-bold mt-2'>Lleva tus habilidades de buceo al siguiente nivel.</h4>
                  <p className='text-lg font-semibold mt-2'>El curso incluye cinco inmersiones: una inmersión profunda por debajo de los 18 m/60 pies,
                una inmersión de navegación, y tres inmersiones de especialidad. Obtén experiencia, crea
                confianza y descubre tus capacidades de buceo.</p>
                  <p className='text-lg font-semibold mt-2'>Tiempo total: 2-3 días</p>
                  <p className='text-lg font-semibold mt-2'>-Requisitos: Open Water Diver / Junior Open Water Diver (o certificación equivalente de otra
                    asociación)</p>
                  <p className='text-lg font-semibold mt-2'>Edad mínima: 12 años o más</p>
                  <p className='text-lg font-semibold mt-2'>Profundidad: La profundidad máxima es de hasta 30 metros/100 pies</p>  
                <p className='text-lg font-semibold mt-2'>El curso contiene 2 especialidades obligatorias (especialidad en navegación y buceo profundo),
                mientras que la parte restante del curso consiste en 3 especialidades a su elección y puede
                escoger de los siguientes buceos de aventura:</p>
                <p className='text-lg font-semibold mt-2'>-Buceo Nocturno</p>
                <p className='text-lg font-semibold'>-Buceo Profundo</p>
                <p className='text-lg font-semibold'>-Búsqueda y Rescate</p>
                <p className='text-lg font-semibold'>-Navegación Subacuática</p>
                <p className='text-lg font-semibold'>-Buceo en Altura</p>
                <p className='text-lg font-semibold'>-Sidemount</p>

                <p className='text-lg font-semibold mt-2'>Entre otras opciones de especialidades.</p>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="bg-red-500 shadow-md shadow-red-500/50 hover:bg-red-700 text-white font-bold text-lg py-2 px-4 rounded mr-4"
              type="button"
              onClick={() => setShowModal2(false)}
            >
              Cerrar
            </button>
            <button
              className="bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded"
              type="button">
              <Link href='https://api.whatsapp.com/send?phone=5492995125034&text=Buenas!%20Quiero%20mas%20informacion%20sobre%20el%20curso%20PADI%20Open%20Water'>Me interesa</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
    ) : null}

     {showModal3 ? ( 
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h3>Especialidades</h3>
          <p>Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
              buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
              como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
              aventura subacuática.
          </p>
          
          <h4>--Rescue Diver – Buzo de Rescate</h4>
          <p>Mejora tu confianza y conviértete en un mejor compañero de buceo a través de divertidos
            juegos de rol y la práctica de destrezas.</p> 
            <h4>--ReActivate Scuba Refresher Program</h4>
          <p>Bucea hacia tu próxima aventura con confianza. Recupera las destrezas aprendidas en tu
              primer curso de buceo sin empezar desde cero.</p> 
            <h4>Deep Diver – Buceo Profundo</h4>
          <p>Amplía tus límites y ve más cosas del mundo subacuático.</p> 
            <h4>--Underwater Navigator – Navegación Subacuática</h4>
          <p>¿Cansado de perderte? Aprende cómo navegar bajo el agua como un profesional.</p> 
          <h4>--Peak Performance Buoyancy – Flotabilidad</h4>
          <p>Mejora tu control de flotabilidad, bucea con menos lastre y mejora el consumo de aire.</p> 
          <h4>--Night Diver – Buceo Nocturno</h4>
          <p>Ve el mundo subacuático con una luz completamente nueva después del atardecer.</p> 
          <h4>--Search and Recovery Diver – Busqueda y Rescate</h4>
          <p>Ayuda a recuperar objetos perdidos. Aprende las técnicas de búsqueda subacuática y
              cómo usar un globo elevador.</p> 
             
             
          <button className={styles.modalBtnInteresa}><Link href='https://api.whatsapp.com/send?phone=5492995125034&text=Buenas!%20Quiero%20mas%20informacion%20sobre%20el%20curso%20PADI%20Specialities'>Me interesa !!</Link></button>

          <button className={styles.modalCerrar} onClick={() => setShowModal3(false)}>Cerrar</button>
        </div>
        
      </div>
      
      )

       :
      
      null}






    </section>
    </div>
  )
}
