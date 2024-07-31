import React from 'react'
import Link from 'next/link';

export default function Specialities() {
  return (
    <div>
            <section className="md:h-full flex items-center ">
                <div className="container py-28 mx-auto flex flex-col md:items-center">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl text-gray-700 font-semibold">Curso PADI Specialities</h2>
                    </div>
                    <div className="flex flex-wrap -m-auto md:w-[60rem]">

                        <div className="p-4">
                            <div className="h-full shadow-2xl shadow-slate-700 rounded-2xl overflow-hidden text-white bg-zinc-800 w-[1/2]">
                                <img className="lg:h-[30rem]  w-full sm:object-cover object-center"
                                    src='https://media.discordapp.net/attachments/841443299839574017/1047332820336525333/specialities2.jpg?ex=66ab9672&is=66aa44f2&hm=0f69a12966e1134242e2e652a1c18e92c59410e3452ad63ceef2195852bfcf70&=&format=webp&width=1014&height=676' alt="blog" />
                                <div class="p-6 w-[1/2]">
                                    <p className="leading-relaxed text-lg mb-3 w-[1/2] mt-2">Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de
                                        buceo y certificaciones de especialidad. Tanto si quieres ampliar tus conocimientos de buceo
                                        como experimentar una nueva especialidad de buceo, nuestros cursos te prepararán para la
                                        aventura subacuática.</p>
                                    <p className="leading-relaxed text-xl mb-3 font-bold mt-8">Rescue Diver-Buzo de Rescate</p>
                                    <p className="leading-relaxed text-lg mb-3">Mejora tu confianza y conviértete en un mejor compañero de buceo a través de divertidos
juegos de rol y la práctica de destrezas.</p>

                                    <p className="leading-relaxed text-xl mb-3 font-bold mt-8">ReActivate Scuba Refresher Program</p>
                                    <p className="leading-relaxed text-lg mb-3">Bucea hacia tu próxima aventura con confianza. Recupera las destrezas aprendidas en tu
primer curso de buceo sin empezar desde cero.</p>

                                    <p className="leading-relaxed text-xl mb-3 font-bold mt-8">Deep Diver – Buceo Profundo</p>
                                    <p className="leading-relaxed text-lg mb-3">Amplía tus límites y ve más cosas del mundo subacuático.</p>

                                    <p className="leading-relaxed text-xl mb-3 font-bold mt-8">Underwater Navigator – Navegación Subacuática</p>
                                    <p className="leading-relaxed text-lg mb-3">¿Cansado de perderte? Aprende cómo navegar bajo el agua como un profesional.</p>
                                    
                                    <p className="leading-relaxed text-xl mb-3 font-bold mt-8">Peak Performance Buoyancy - Flotabilidad</p>
                                    <p className="leading-relaxed text-lg mb-3">Mejora tu control de flotabilidad, bucea con menos lastre y mejora el consumo de aire.</p>
                                    
                                    <p className="leading-relaxed text-xl mb-3 font-bold mt-8">Night Diver -Buceo Nocturno</p>
                                    <p className="leading-relaxed text-lg mb-3">Ve el mundo subacuático con una luz completamente nueva después del atardecer.</p>
                                    
                                    <p className="leading-relaxed text-xl mb-3 font-bold mt-8">Search and Recovery Diver -Busqueda y Rescate</p>
                                    <p className="leading-relaxed text-lg mb-3">Ayuda a recuperar objetos perdidos. Aprende las técnicas de búsqueda subacuática y
                                        cómo usar un globo elevador.</p>
                                    
                                    <div className="flex items-center flex-wrap ">
                                    <button className="bg-red-500 shadow-md shadow-red-500/50 hover:bg-red-700 text-white font-bold text-lg py-2 px-4 rounded mr-4"
                                        type="button"
                                        ><Link href='/#cursos'>Volver</Link>
                                        
                                        </button>
                                            
                                            <button className='bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded'>
                                            <Link href='https://api.whatsapp.com/send?phone=5492995125034&text=Buenas!%20Quiero%20mas%20informacion%20sobre%20el%20curso%20PADI%20Specialities'>Contactar</Link>
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
