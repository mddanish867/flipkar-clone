import {Link} from "react-router-dom"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import AddToCartButton  from "../components/AddToCartButton"

// Sample wishlist data
const wishlistItems = [
  {
    id: 1,
    name: "iPhone 15",
    image: "/vite.svg?height=200&width=200",
    price: 79999,
    originalPrice: 89999,
    discount: "11% off",
    inStock: true,
    url: "/product/1",
  },
  {
    id: 3,
    name: "OnePlus 12",
    image: "/placeholder.svg?height=200&width=200",
    price: 59999,
    originalPrice: 64999,
    discount: "7% off",
    inStock: true,
    url: "/product/3",
  },
  {
    id: 5,
    name: "Realme GT 5",
    image: "/vite.svg?height=200&width=200",
    price: 34999,
    originalPrice: 39999,
    discount: "12% off",
    inStock: false,
    url: "/product/5",
  },
]

export default function WishlistPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 lg:px-16">
        <h1 className="text-2xl font-bold mb-6">My Wishlist ({wishlistItems.length})</h1>

        <div className="bg-white rounded shadow-sm">
          {wishlistItems.length > 0 ? (
            <>
              {wishlistItems.map((item, index) => (
                <div key={item.id}>
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <Link to={item.url}>
                          <div className="relative h-24 w-24 md:h-32 md:w-32">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="absolute inset-0 w-full h-full object-contain"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="flex-grow">
                        <Link to={item.url}>
                          <h3 className="font-medium text-base md:text-lg mb-1 hover:text-[#2874f0]">{item.name}</h3>
                        </Link>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-bold text-lg">₹{item.price.toLocaleString()}</span>
                          <span className="text-gray-500 line-through text-sm">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-green-600 text-sm">{item.discount}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className={item.inStock ? "text-green-600" : "text-red-500"}>
                            {item.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <AddToCartButton
                            productId={item.id}
                            productName={item.name}
                            price={item.price}
                            image={item.image}
                            className="w-full sm:w-auto"
                            //disabled={!item.inStock}
                          />
                          <Button variant="ghost" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                            <Trash2 className="h-4 w-4 mr-2" />
                            REMOVE
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < wishlistItems.length - 1 && <Separator />}
                </div>
              ))}
            </>
          ) : (
            <div className="p-8 text-center">
              <div className="relative h-40 w-40 mx-auto mb-4">
                <img
                  src="/vite.svg?height=160&width=160"
                  alt="Empty Wishlist"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
              <p className="text-gray-500 mb-4">Add items that you like to your wishlist</p>
              <Link to="/products">
                <Button className="bg-[#2874f0] hover:bg-[#2874f0]/90">Continue Shopping</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

