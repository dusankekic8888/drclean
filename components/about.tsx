import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading Australia's Drone Cleaning Revolution
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              DrClean Australia is pioneering the future of exterior cleaning services. Our state-of-the-art drone
              technology combined with years of cleaning expertise delivers unmatched results for residential and
              commercial properties.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded by cleaning professionals who Recognised the need for safer, more efficient cleaning methods,
              we've invested in cutting-edge drone technology to serve customers across Australia.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Certified Operators</h4>
                <p className="text-gray-600">
                  All our drone pilots are CASA certified and fully trained in cleaning protocols.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Advanced Equipment</h4>
                <p className="text-gray-600">
                  Professional-grade drones equipped with specialised cleaning attachments.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/leading-australia-dron.png"
              alt="DrClean professional team with advanced drone cleaning equipment"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
