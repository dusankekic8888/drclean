import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Sydney, NSW",
    rating: 5,
    text: "Absolutely amazing service! They cleaned our 3-story building's windows perfectly without any scaffolding. Professional, efficient, and great value.",
  },
  {
    name: "David Chen",
    location: "Melbourne, VIC",
    rating: 5,
    text: "Our solar panels were covered in bird droppings and dust. DrClean restored them to like-new condition and our energy output increased by 15%!",
  },
  {
    name: "Emma Thompson",
    location: "Brisbane, QLD",
    rating: 5,
    text: "The gutter cleaning was thorough and they provided detailed photos of the work. No more worrying about climbing ladders - this is the future!",
  },
  {
    name: "Michael Roberts",
    location: "Perth, WA",
    rating: 5,
    text: "Professional team, fair pricing, and incredible results. Our skylights haven't been this clean in years. Highly recommend DrClean!",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from satisfied customers across Australia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
