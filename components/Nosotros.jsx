import React from 'react'

export default function Nosotros() {
  return (
    <div id='nosotros'>
        <div className="text-center mb-12">
                <h2 className="text-4xl md:text-6xl text-gray-700 font-semibold mt-30 w-full">Bienvenido a <b className='font-bold'>ESBA DIVE</b></h2>
        </div>

        <div className=" flex lg:w-1/2 md:container md:mx-auto bg-gradient-to-r from-blue-500 to-cyan-600 m-3 text-white rounded-lg shadow-2xl shadow-slate-700 ">
            <p className='text-xl font-semibold p-6'>
                        Soy Esteban Barac, Instructor de Buceo de PADI desde el año 2017, realicé mi formación en la
                        Riviera Maya-México. Buceando en el mar y en cenotes, convirtiéndome en Instructor de
                        Especialidades y también en Instructor de Primeros Auxilios. Continúo disfrutando del buceo
                        en distintas partes del mundo y he realizado +1000 inmersiones.
            </p>
            
        </div>
        <div className="flex lg:w-1/2 md:container md:mx-auto mt-10 bg-gradient-to-r from-blue-500 to-indigo-600 m-3 text-white rounded-lg shadow-2xl shadow-slate-700">
            <p className='text-xl p-6 font-semibold'>
                  Descubrí el buceo y aventúrate a conocer nuevos lugares. Te acompaño desde el nivel inicial
                  hasta los niveles mas avanzados del buceo recreativo, disfrutando de las especialidades que
                  tenemos disponibles. Si tu interés es ser profesional de buceo te puedo ofrecer convertirte en
                  Divemaster y comenzar el camino a ser Instructor de buceo.
            </p>
        </div>
    
        {/* <div className='collapse lg:visible flex items-center justify-center h-[20rem] mb-12 bg-cover bg-fixed custom-img-banner mt-20'>
        </div> */}


    </div>
  )
}
