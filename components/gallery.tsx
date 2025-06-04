import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const galleryImages = [
  {
    src: "/images/action-gutter-transformation.png",
    alt: "Before and after gutter cleaning results",
    title: "Gutter Transformation",
    description: "Complete debris removal and restoration",
  },
  {
    src: "/images/action-window-perfection.png",
    alt: "Crystal clear windows after drone cleaning",
    title: "Window Perfection",
    description: "Streak-free, professional finish",
  },
  {
    src: "/images/action-solar-efficiency.png",
    alt: "Solar panels being cleaned by drone",
    title: "Solar Efficiency",
    description: "Maximising energy output",
  },
  {
    src: "/images/action-surface-restoration.png",
    alt: "Pressure washing with drone technology",
    title: "Surface Restoration",
    description: "Powerful cleaning for tough stains",
  },
]

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Our Work in Action</h2>
          <p className="text-xl text-gray-600">
            Real results from our professional drone cleaning services across Australia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-64 w-full">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                <p className="text-sm text-gray-600">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
