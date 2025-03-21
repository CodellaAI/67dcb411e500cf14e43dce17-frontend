
export default function About() {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welcome to our About page. This is a simple Next.js frontend application that showcases 
          the capabilities of Next.js and TailwindCSS.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          Our mission is to provide a clean, efficient, and easy-to-customize frontend template
          that developers can use as a starting point for their projects. We believe in creating
          simple yet powerful tools that help developers build amazing applications.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Technologies Used</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Next.js</strong> - A React framework with hybrid static & server rendering,
            route pre-fetching, and more.
          </li>
          <li className="mb-2">
            <strong>TailwindCSS</strong> - A utility-first CSS framework for rapidly building
            custom user interfaces.
          </li>
          <li className="mb-2">
            <strong>React</strong> - A JavaScript library for building user interfaces.
          </li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Get Started</h2>
        <p>
          To get started with this template, simply clone the repository and start customizing
          it to fit your needs. The code is well-organized and easy to understand, making it
          perfect for beginners and experienced developers alike.
        </p>
      </div>
    </div>
  )
}
