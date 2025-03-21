
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" className="text-xl font-bold text-primary-600">
              Simple<span className="text-gray-800 dark:text-white">Next</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              A clean, modern frontend template built with Next.js and TailwindCSS.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Contact Us</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span>📍</span> 123 Main Street, City, Country
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span> contact@example.com
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> +1 (123) 456-7890
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {currentYear} SimpleNext. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
