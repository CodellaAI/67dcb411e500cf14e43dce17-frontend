
export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  )
}
