import {Link} from "react-router-dom"
import { Heart } from "lucide-react"

interface ProductCardProps {
  product: {
    id: number
    name: string
    image: string
    price: number
    originalPrice: number
    discount: string
    rating: number
    reviews: number
    url: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={product.url} className="group">
      <div className="relative bg-white p-4 rounded-md transition-all duration-300 hover:shadow-md flex flex-col h-full">
        <div className="absolute top-2 right-2 z-10">
          <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 cursor-pointer" />
        </div>
        <div className="relative h-40 mb-3 mx-auto">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="absolute inset-0 w-full h-full object-contain" />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="font-medium text-sm text-gray-800 line-clamp-2 mb-1 group-hover:text-[#2874f0]">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mb-1">
            <div className="bg-green-700 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
              {product.rating} ★
            </div>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
          <div className="mt-auto">
            <div className="flex items-center gap-2">
              <span className="font-bold">₹{product.price.toLocaleString()}</span>
              <span className="text-gray-500 line-through text-xs">₹{product.originalPrice.toLocaleString()}</span>
              <span className="text-green-600 text-xs">{product.discount}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

