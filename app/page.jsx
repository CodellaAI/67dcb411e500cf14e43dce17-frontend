
import Link from 'next/link'
import FeatureCard from '../components/FeatureCard'

export default function Home() {
  const features = [
    {
      title: 'Next.js',
      description: 'The React framework for production that gives you the best developer experience.',
      icon: '🚀'
    },
    {
      title: 'TailwindCSS',
      description: 'A utility-first CSS framework packed with classes that can be composed to build any design.',
      icon: '🎨'
    },
    {
      title: 'Responsive',
      description: 'Fully responsive design that works on all devices and screen sizes.',
      icon: '📱'
    }
  ]

  return (
    <div className="container-custom py-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-6">Welcome to Simple Next Frontend</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          A clean, modern starter template built with Next.js and TailwindCSS.
          Get started quickly with this minimal setup.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/about" className="btn btn-primary">
            Learn More
          </Link>
          <Link href="/contact" className="btn border border-gray-300 hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 rounded-xl p-8 my-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          This template provides everything you need to start building your next project.
          Customize it to fit your needs and start coding right away.
        </p>
        <Link href="/contact" className="btn btn-primary">
          Get Started
        </Link>
      </section>
    </div>
  )
}
