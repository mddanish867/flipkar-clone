import { Minus, Plus, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

// Sample cart data
const cartItems = [
  {
    id: 1,
    name: "iPhone 15",
    image: "/vite.svg?height=200&width=200",
    price: 79999,
    originalPrice: 89999,
    discount: "11% off",
    quantity: 1,
    seller: "Apple Store",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    image: "/vite.svg?height=200&width=200",
    price: 69999,
    originalPrice: 79999,
    discount: "12% off",
    quantity: 2,
    seller: "Samsung Official",
  },
]

export default function CartPage() {
  // Calculate cart totals
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = cartItems.reduce((total, item) => total + (item.originalPrice - item.price) * item.quantity, 0)
  const deliveryCharges = 0 // Free delivery
  const total = subtotal - discount + deliveryCharges

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 lg:px-16">
        <h1 className="text-2xl font-bold mb-6">My Cart ({itemCount})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded shadow-sm">
              {cartItems.map((item, index) => (
                <div key={item.id}>
                  <div className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <div className="relative h-24 w-24 md:h-32 md:w-32">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-base md:text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">Seller: {item.seller}</p>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="font-bold text-lg">₹{item.price.toLocaleString()}</span>
                          <span className="text-gray-500 line-through text-sm">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-green-600 text-sm">{item.discount}</span>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="flex items-center border rounded">
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            className="text-[#2874f0] hover:bg-transparent hover:text-[#2874f0]/80 p-0"
                          >
                            SAVE FOR LATER
                          </Button>
                          <Button
                            variant="ghost"
                            className="text-[#2874f0] hover:bg-transparent hover:text-[#2874f0]/80 p-0"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            REMOVE
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && <Separator />}
                </div>
              ))}
              <div className="p-4 flex justify-end">
                <Button className="bg-[#fb641b] hover:bg-[#fb641b]/90 text-white rounded-none">PLACE ORDER</Button>
              </div>
            </div>
          </div>

          {/* Price Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded shadow-sm p-4 md:p-6">
              <h2 className="text-gray-500 font-medium mb-4">PRICE DETAILS</h2>
              <Separator className="mb-4" />
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Price ({itemCount} items)</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-600">- ₹{discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between font-bold">
                  <span>Total Amount</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="text-green-600 font-medium">
                  You will save ₹{discount.toLocaleString()} on this order
                </div>
              </div>
            </div>

            <div className="bg-white rounded shadow-sm p-4 md:p-6 mt-4">
              <h2 className="font-medium mb-4">COUPONS</h2>
              <div className="flex items-center gap-2">
                <Input placeholder="Enter coupon code" className="flex-grow" />
                <Button className="bg-[#2874f0] hover:bg-[#2874f0]/90 rounded-none">Apply</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

