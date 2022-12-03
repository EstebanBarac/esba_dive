import React from 'react'
import Link from 'next/link';

export default function Advanced() {
  return (
    <div>
            <section className="md:h-full flex items-center ">
                <div className="container py-28 mx-auto flex flex-col md:items-center">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl text-gray-700 font-semibold">Curso PADI Advanced Open Water Diver</h2>
                    </div>
                    <div className="flex flex-wrap -m-auto md:w-[60rem]">

                        <div className="p-4">
                            <div className="h-full shadow-2xl shadow-slate-700 rounded-2xl overflow-hidden text-white bg-zinc-800 w-[1/2]">
                                <img className="lg:h-[30rem]  w-full sm:object-cover object-center"
                                    src='https://cdn.discordapp.com/attachments/841443299839574017/1047331354645377084/advanced.jpg' alt="blog" />
                                <div class="p-6 w-[1/2] font-semibold">
                                    <p className="leading-relaxed text-lg mb-3 w-[1/2]">Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
                                        buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
                                        como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
                                        aventura subacuática.</p>
                                    <p className="leading-relaxed text-lg mt-8 mb-3">Vive nuevas aventuras con un PADI Instructor a tu lado. Perfecciona tus habilidades de
                                        flotabilidad, aumenta la confianza en tus técnicas de navegación y prueba nuevas actividades
                                        de buceo a más de 18m/60pies de profundidad.</p>
                                    <p className="leading-relaxed text-lg mt-8 mb-3 font-bold">Lleva tus habilidades de buceo al siguiente nivel.</p>
                                    <p className="leading-relaxed text-lg mb-3">El curso incluye cinco inmersiones: una inmersión profunda por debajo de los 18 m/60 pies,
                                                una inmersión de navegación, y tres inmersiones de especialidad. Obtén experiencia, crea
                                                confianza y descubre tus capacidades de buceo.</p>
                                    <p className="leading-relaxed text-lg mt-8 mb-3 font-bold">Tiempo total: 2-3 días</p>
                                    <p className="leading-relaxed text-lg mb-3">-Requisitos: Open Water Diver / Junior Open Water Diver (o certificación equivalente de otra
                                                asociación)</p>
                                    <p className="leading-relaxed text-xl mt-8 mb-3 font-bold">Edad mínima: 12 años o más</p>
                                    <p className="leading-relaxed text-xl mt-8 mb-3 font-bold">Profundidad: La profundidad máxima es de hasta 30 metros/100 pies</p>
                                    <p className="leading-relaxed text-lg mb-3">El curso contiene 2 especialidades obligatorias (especialidad en navegación y buceo profundo),
                                                    mientras que la parte restante del curso consiste en 3 especialidades a su elección y puede
                                                    escoger de los siguientes buceos de aventura:</p>
                                    <p className="leading-relaxed text-lg mb-3">-Buceo Nocturno</p>
                                    <p className="leading-relaxed text-lg mb-3">-Buceo Profundo</p>
                                    <p className="leading-relaxed text-lg mb-3">-Búsqueda y Rescate</p>
                                    <p className="leading-relaxed text-lg mb-3">-Navegación Subacuática</p>
                                    <p className="leading-relaxed text-lg mb-3">-Buceo en Altura</p>
                                    <p className="leading-relaxed text-lg mb-3">-Sidemount</p>
                                    <p className="leading-relaxed text-lg mb-3">Entre otras opciones de especialidades.</p>
                                    
                                    <div className="flex items-center flex-wrap ">
                                    <button className="bg-red-500 shadow-md shadow-red-500/50 hover:bg-red-700 text-white font-bold text-lg py-2 px-4 rounded mr-4"
                                        type="button"
                                        ><Link href='/#cursos'>Volver</Link>
                                        </button>
                                            
                                            <button className='bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded'>
                                            <Link href='https://api.whatsapp.com/send?phone=5492995125034&text=Buenas!%20Quiero%20mas%20informacion%20sobre%20el%20curso%ADVANCED%20Open%20Water%20Diver'>Contactar</Link>
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
