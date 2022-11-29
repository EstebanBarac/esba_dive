import React from 'react'

export default function Cards() {
  return (
    <div>
        <section id='cursos' class="md:h-full flex items-center ">
        <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-12">
                <h5 class="text-base md:text-lg text-indigo-700 mb-1">Aprendé con Nosotros</h5>
                <h1 class="text-4xl md:text-6xl text-gray-700 font-semibold">Nuestros Cursos de Buceo</h1>
            </div>
            <div class="flex flex-wrap -m-4">

                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-#71717a text-white bg-zinc-900 ">
                        <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="https://cdn.discordapp.com/attachments/841443299839574017/1038264440279269436/Rectangle_2_1.png" alt="blog" />
                        <div class="p-6  hover:text-white ">
                            <h2 class="text-2xl font-semibold mb-3">PADI Open Water</h2>
                            <p class="leading-relaxed mb-3">El PADI Open Water Diver es el primer nivel de certificación de buceo. Un PADI Instructor altamente entrenado te enseñará a bucear en un entorno de aprendizaje relajado y seguro. Aprende los principios y la terminología del buceo, adquiere las destrezas básicas de buceo y conocimientos para bucear en tu entorno local o en el extranjero y ser un embajador del mundo subacuático</p>
                            <div class="flex items-center flex-wrap ">

                                    <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>
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


                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-#71717a text-white bg-zinc-900 ">
                        <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="https://cdn.discordapp.com/attachments/841443299839574017/1038264126243340328/Rectangle_2.png" alt="blog" />
                        <div class="p-6  hover:text-white ">
                            <h2 class="text-2xl font-semibold mb-3">PADI Advanced Open Water Diver</h2>
                            <p class="leading-relaxed mb-3">El curso Advanced Open Water Diver perfecciona tus técnicas. Practicarás navegación y
                                flotabilidad, probarás el buceo a profundidad y harás tres inmersiones de especialidad de tu
                                elección. Por cada inmersión de especialidad que completes, puedes obtener crédito para
                                conseguir certificaciones de especialidad PADI</p>
                            <div class="flex items-center flex-wrap ">

                                    <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>
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
                <div class="p-4 sm:w-1/2 lg:w-1/3">
                    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-#71717a text-white bg-zinc-900 ">
                        <img class="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="https://cdn.discordapp.com/attachments/841443299839574017/1038261724953972746/Rectangle_1_2.png" alt="blog" />
                        <div class="p-6  hover:text-white ">
                            <h2 class="text-2xl font-semibold mb-3">PADI Specialities</h2>
                            <p class="leading-relaxed mb-3">Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
                                buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
                                como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
                                aventura subacuática.</p>
                            <div class="flex items-center flex-wrap ">

                                    <button className='bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded'>
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

            </div>
        </div>
    </section>
    </div>
  )
}
