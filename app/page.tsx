"use client"

import { useState } from "react"
import Image from 'next/image'
import { Instagram, Mail, Phone, Waves } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CourseDetailsModal } from "@/components/course-details-modal"
import { Gallery } from "@/components/gallery"

const courses = [
  {
    title: "PADI Open Water",
    description: "El PADI Open Water Diver es el primer nivel de certificación de buceo. Un PADI Instructor altamente entrenado te enseñará a bucear en un entorno de aprendizaje relajado y seguro.",
    image: "/open_water.jpg",
    details: {
      duration: "10hs teoria + 5 a 7 dias de practica",
      requirements: [
        "Tener al menos 15 años de edad",
        "Saber nadar",
      ],
      includes: [
        "Clases Personalizadas con Instructor PADI",
        "Equipamiento de buceo completo durante el curso",
        "Inmersión parte práctica (no incluye traslados)",
        "Certificación Internacional"
      ],
      price: "495€"
    }
  },
  {
    title: "PADI Advanced Open Water Diver",
    description: "El curso Advanced Open Water Diver perfecciona tus técnicas. Practicarás navegación y flotabilidad, probarás el buceo a profundidad y harás tres inmersiones de especialidad de tu elección.",
    image: "/advanced.jpg",
    details: {
      duration: "3-10 días",
      requirements: [
        "Tener certificación PADI Open Water o equivalente de otra asociación"
      ],
      includes: [
        "Manual de la especialidad",
        "Inmersiones prácticas",
        "Equipo específico necesario",
        "El curso contiene 2 especialidades obligatorias (especialidad en navegación y buceo profundo), mientras que la parte restante del curso consiste en 3 especialidades a su elección y puede escoger de los siguientes buceos de aventura:",
        "Buceo Nocturno, Buceo Profundo, Búsqueda y Rescate, Navegación Subacuática, Buceo en Altura, Sidemount, etc."
      ],
      price: "395€"
    }
  },
  {
    title: "PADI Specialities",
    description: "Bucea a mayor profundidad en la exploración del planeta azul con habilidades avanzadas de buceo y certificaciones de especialidad.",
    image: "/specialities.jpg",
    details: {
      duration: "1-2 días por especialidad",
      requirements: [
        "Tener certificación PADI Open Water o equivalente",
        "Requisitos específicos según la especialidad elegida"
      ],
      includes: [
        "Elección dentro de las siguientes especialidades:",
        "Rescue Diver-Buzo de Rescate: Mejora tu confianza y conviértete en un mejor compañero de buceo a través de divertidos juegos de rol y la práctica de destrezas.",
        "ReActivate Scuba Refresher Program: Bucea hacia tu próxima aventura con confianza. Recupera las destrezas aprendidas en tu primer curso de buceo sin empezar desde cero.",
        "Deep Diver – Buceo Profundo: Amplía tus límites y ve más cosas del mundo subacuático.",
        "Underwater Navigator – Navegación Subacuática: ¿Cansado de perderte? Aprende cómo navegar bajo el agua como un profesional.",
        "Peak Performance Buoyancy - Flotabilidad: Mejora tu control de flotabilidad, bucea con menos lastre y mejora el consumo de aire.",
        "Night Diver -Buceo Nocturno: Ve el mundo subacuático con una luz completamente nueva después del atardecer.",
        "Search and Recovery Diver -Busqueda y Rescate: Ayuda a recuperar objetos perdidos. Aprende las técnicas de búsqueda subacuática y cómo usar un globo elevador."
      ],
      price: "Desde 195€ por especialidad"
    }
  }
]

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8" />
            <span className="text-2xl font-bold">ESBA DIVE</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#cursos" className="hover:underline">Cursos</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
              <li><a href="https://plataforma-esba-dive.vercel.app/login" className="hover:underline">Plataforma</a></li>

            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative bg-blue-500 text-white py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="/Destination_PADI_6.jpg"
              alt="Fondo de buceo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-20"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Descubre el mundo submarino con ESBA DIVE</h1>
              <p className="text-xl mb-6 drop-shadow">Ofrecemos cursos de buceo para todos los niveles. ¡Sumérgete en una nueva aventura!</p>
              <Button size="lg" className="bg-white text-blue-500 hover:bg-blue-100">
                Explora nuestros cursos
              </Button>
            </div>
          </div>
        </section>

        <section id="cursos" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestros Cursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="flex flex-col">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-muted-foreground flex-grow">
                      {course.description}
                    </p>
                    <Button 
                      className="mt-4 w-full bg-blue-600"
                      onClick={() => setSelectedCourse(course)}
                    >
                      Más información
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Galería con nuestras experiencias📷</h2>
            <Gallery />
          </div>
        </section>

        <section id="contacto" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
            <div className="max-w-md mx-auto">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-500" />
                  <span>+54 9 299 512-5034</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-500" />
                  <a href="mailto:info@ebadive.com" className="hover:underline">estebanbarac@gmail.com</a>
                </div>
                <div className="flex items-center space-x-4">
                  <Instagram className="h-6 w-6 text-blue-500" />
                  <a href="https://www.instagram.com/esbadive" target="_blank" rel="noopener noreferrer" className="hover:underline">@esbadive</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 ESBA Dive. Todos los derechos reservados.</p>
        </div>
      </footer>

      <CourseDetailsModal
        isOpen={selectedCourse !== null}
        onClose={() => setSelectedCourse(null)}
        course={selectedCourse!}
      />
    </div>
  )
}

