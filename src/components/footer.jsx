import { Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 py-1">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="https://x.com/caawards" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://www.instagram.com/caawards" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
        <p className="text-sm text-white">Coscu Army Awards | Copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}