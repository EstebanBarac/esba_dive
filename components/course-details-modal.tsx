import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface CourseDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  course: {
    title: string
    description: string
    image: string
    details: {
      duration: string
      requirements: string[]
      includes: string[]
      price: string
    }
  } | null
}

export function CourseDetailsModal({ isOpen, onClose, course }: CourseDetailsModalProps) {
  if (!course) {
    return null
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en obtener más información sobre el curso ${course.title}`
    )
    window.open(`https://wa.me/+5492995125034?text=${message}`, '_blank')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{course.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 p-6">
          <Image
            src={course.image}
            alt={course.title}
            width={800}
            height={400}
            className="w-full h-48 aspect-video object-cover rounded-lg"
          />
          <div className="grid gap-4">
            <div>
              <h3 className="font-semibold mb-2">Descripción del Curso</h3>
              <p className="text-muted-foreground">{course.description}</p>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Duración</h3>
              <p className="text-muted-foreground">{course.details.duration}</p>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">Requisitos</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {course.details.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="grid gap-2">
              <h3 className="font-semibold">El curso incluye:</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {course.details.includes.map((item, index) => (
                  <li key={index} className="mt-4">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <Button 
            onClick={handleWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

