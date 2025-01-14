import Image from 'next/image'

interface GalleryItem {
  src: string
  alt: string
  location: string
  date: string
}

const galleryItems: GalleryItem[] = [
  { src: "/DSCI0304.JPG", alt: "Buceo en arrecife de coral", location: "Sodwana Bay, Sudáfrica", date: "Septiembre 2019" },
  { src: "/DSCI0246.jpg", alt: "Encuentro con tiburón ballena", location: "Islas Galápagos, Ecuador", date: "Agosto 2020" },
  { src: "/DSCI0289.jpg", alt: "Exploración de naufragio", location: "Vilankulo, Mozambique", date: "Septiembre 2019" },
  { src: "/DSCI0347.jpg", alt: "Buceo en cueva submarina", location: "Islas Galápagos, Ecuador", date: "Julio 2020" },
  { src: "/DSCI0383.jpg", alt: "Buceo nocturno", location: "Islas Galápagos, Ecuador", date: "Septiembre 2020" },
  { src: "/DSCN2111.jpg", alt: "Buceo con mantas gigantes", location: "Isla de Cozumel, México", date: "Mayo 2018" },
  { src: "/DSCN2339.jpg", alt: "Buceo en kelp forest", location: "Isla de Cozumel, México", date: "Mayo 2018" },
  { src: "/DSCN2624.jpg", alt: "Buceo con delfines", location: "Isla de Cozumel, México", date: "Junio 2018"},
  { src: "/DSCN3351.jpg", alt: "Buceo en aguas cristalinas", location: "Isla de Cozumel, México", date: "Junio 2018" },
]

export function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {galleryItems.map((item, index) => (
        <div key={index} className="relative aspect-square overflow-hidden group">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <p className="text-white font-semibold">{item.location}</p>
            <p className="text-white text-sm">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
