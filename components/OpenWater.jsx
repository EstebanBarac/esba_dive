import React from 'react';
import Link from 'next/link';

export default function OpenWater() {
  return (
    <div>
            <section className="md:h-full flex items-center ">
                <div className="container py-28 mx-auto flex flex-col md:items-center">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-6xl text-gray-700 font-semibold">Curso PADI Open Water</h2>
                    </div>
                    <div className="flex flex-wrap -m-auto md:w-[60rem]">

                        <div className="p-4">
                            <div className="h-full shadow-2xl shadow-slate-700 rounded-2xl overflow-hidden text-white bg-zinc-800 w-[1/2]">
                                <img className="lg:h-[30rem]  w-full sm:object-cover object-center"
                                    src='https://media.discordapp.net/attachments/841443299839574017/1047331354645377084/advanced.jpg?ex=66ab9515&is=66aa4395&hm=8b08955f73f863a58910cdbd96a1c069082786827ee52d8122f0101de04216e2&=&format=webp&width=1014&height=676' alt="blog" />
                                <div class="p-6 w-[1/2]">
                                    <p className="leading-relaxed text-lg mb-3 font-semibold">El curso Open Water, es el primer nivel de las certificaciones de Buceo PADI, finalizado el curso te permite realizar inmersiones en cualquier parte del mundo hasta una profundidad máxima de 18 metros,
                            habilitando también a la renta de equipamiento en caso de ser necesario.</p>
                                    <p className="leading-relaxed text-xl font-bold mb-3">El curso consta de tres áreas:</p>
                                    <p className="leading-relaxed text-lg font-semibold mb-3">- Parte Teórica, modalidad online o presencial</p>
                                    <p className="leading-relaxed text-lg font-semibold mb-3">- Parte Práctica Aguas Confinadas ( 5-inmersiones en piscina climatizada)</p>
                                    <p className="leading-relaxed text-lg font-semibold mb-3">- Parte Práctica Aguas Abiertas      ( 4- inmersiones en Lago Marimenuco)</p>
                                    <p className="leading-relaxed text-xl font-bold mb-3">Incluye:</p>
                                    <p className="leading-relaxed text-lg font-semibold mb-3">- Clases Personalizadas con Instructor PADI</p>
                                    <p className="leading-relaxed text-lg font-semibold mb-3">- Manuales y Material PADI</p>
                                    <p className="leading-relaxed text-lg font-semibold mb-3">- Equipamiento de buceo completo durante el curso (traje neoprene, BCD, tanque, aletas, etc.)</p>
                                    <p className="leading-relaxed text-lg font-semibold mb-3">- Inmersiones Parte práctica ( No incluye traslados)</p>
                                    <p className="leading-relaxed text-lg font-semibold mb-3">- Certificación Internacional</p>
                                    <p className="leading-relaxed text-lg font-bold mb-3">Tiempo: 10hs teoría, 5 a 7 días práctica</p>
                                    <p className="leading-relaxed text-lg font-bold mb-3">Requisitos: Saber nadar y ser mayor de 15 años</p>
                                    <p className="leading-relaxed text-lg font-bold mb-3">(de 10 a 14 años reciben certificación Junior)</p>
                                    
                                    <div className="flex items-center flex-wrap ">
                                    <button className="bg-red-500 shadow-md shadow-red-500/50 hover:bg-red-700 text-white font-bold text-lg py-2 px-4 rounded mr-4"
                                        type="button"
                                        ><Link href='/#cursos'>Volver</Link>
                                        
                                        </button>
                                            
                                            <button className='bg-blue-500 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded'>
                                            <Link href='https://api.whatsapp.com/send?phone=5492995125034&text=Buenas!%20Quiero%20mas%20informacion%20sobre%20el%20curso%20PADI%20Open%20Water'>Contactar</Link>
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
