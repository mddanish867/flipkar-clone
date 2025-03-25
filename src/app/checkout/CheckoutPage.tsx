import { useState } from "react"
import { CreditCard, MapPin, Plus, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

// Sample addresses
const addresses = [
  {
    id: 1,
    name: "John Doe",
    phone: "9876543210",
    address: "123, ABC Apartments, XYZ Street",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    type: "Home",
    isDefault: true,
  },
  {
    id: 2,
    name: "John Doe",
    phone: "9876543210",
    address: "456, PQR Building, LMN Road",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400002",
    type: "Work",
    isDefault: false,
  },
]

export default function CheckoutPage() {
  const [selectedAddressId, setSelectedAddressId] = useState(addresses[0].id)
  const [paymentMethod, setPaymentMethod] = useState("cod")
  const [isAddingAddress, setIsAddingAddress] = useState(false)

  // Calculate cart totals
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const discount = cartItems.reduce((total, item) => total + (item.originalPrice - item.price) * item.quantity, 0)
  const deliveryCharges = 0 // Free delivery
  const total = subtotal - discount + deliveryCharges

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 lg:px-16">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Checkout Steps */}
          <div className="lg:col-span-2">
            {/* Delivery Address */}
            <div className="bg-white rounded shadow-sm mb-4">
              <div className="p-4 md:p-6 border-b bg-gray-50">
                <h2 className="font-bold text-lg flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Delivery Address
                </h2>
              </div>

              {isAddingAddress ? (
                <div className="p-4 md:p-6">
                  <h3 className="font-medium mb-4">Add a new address</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Enter your full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Mobile Number</Label>
                        <Input id="phone" placeholder="10-digit mobile number" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input id="pincode" placeholder="6-digit pincode" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="locality">Locality</Label>
                        <Input id="locality" placeholder="Colony, Street, Locality" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" placeholder="House No., Building Name, Street Name" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" placeholder="State" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="landmark">Landmark (Optional)</Label>
                        <Input id="landmark" placeholder="Landmark" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Address Type</Label>
                      <div className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="home" id="home" />
                          <Label htmlFor="home">Home</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="work" id="work" />
                          <Label htmlFor="work">Work</Label>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" className="bg-[#fb641b] hover:bg-[#fb641b]/90">
                        Save and Deliver Here
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setIsAddingAddress(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="p-4 md:p-6">
                  <RadioGroup
                    value={selectedAddressId.toString()}
                    onValueChange={(value) => setSelectedAddressId(Number.parseInt(value))}
                    className="space-y-4"
                  >
                    {addresses.map((address) => (
                      <div key={address.id} className="flex items-start space-x-3 border rounded p-3">
                        <RadioGroupItem value={address.id.toString()} id={`address-${address.id}`} className="mt-1" />
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <Label htmlFor={`address-${address.id}`} className="font-medium cursor-pointer">
                              {address.name}
                            </Label>
                            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
                              {address.type}
                            </span>
                            {address.isDefault && (
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">Default</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{address.phone}</p>
                          <p className="text-sm text-gray-600">
                            {address.address}, {address.city}, {address.state} - {address.pincode}
                          </p>

                          {selectedAddressId === address.id && (
                            <Button className="mt-3 bg-[#fb641b] hover:bg-[#fb641b]/90">Deliver Here</Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </RadioGroup>

                  <Button variant="outline" className="mt-4 border-dashed" onClick={() => setIsAddingAddress(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add a new address
                  </Button>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded shadow-sm mb-4">
              <div className="p-4 md:p-6 border-b bg-gray-50">
                <h2 className="font-bold text-lg flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Order Summary
                </h2>
              </div>

              <div className="p-4 md:p-6">
                {cartItems.map((item, index) => (
                  <div key={item.id} className={index < cartItems.length - 1 ? "mb-4 pb-4 border-b" : ""}>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="relative h-16 w-16 md:h-20 md:w-20">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-sm md:text-base mb-1">{item.name}</h3>
                        <p className="text-xs text-gray-500 mb-1">Seller: {item.seller}</p>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">₹{item.price.toLocaleString()}</span>
                          <span className="text-gray-500 line-through text-xs">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-green-600 text-xs">{item.discount}</span>
                        </div>
                        <p className="text-sm mt-1">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
                  <p className="flex items-center text-green-600">
                    <Truck className="h-4 w-4 mr-2" />
                    Delivery by Tomorrow | Free
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white rounded shadow-sm">
              <div className="p-4 md:p-6 border-b bg-gray-50">
                <h2 className="font-bold text-lg flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Payment Options
                </h2>
              </div>

              <div className="p-4 md:p-6">
                <Tabs defaultValue="cod" onValueChange={setPaymentMethod}>
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="cod">Cash on Delivery</TabsTrigger>
                    <TabsTrigger value="card">Credit/Debit Card</TabsTrigger>
                    <TabsTrigger value="upi">UPI</TabsTrigger>
                  </TabsList>

                  <TabsContent value="cod">
                    <div className="p-4 border rounded">
                      <RadioGroup defaultValue="cod" className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="cod" id="cod" checked />
                          <Label htmlFor="cod">Cash on Delivery</Label>
                        </div>
                      </RadioGroup>
                      <p className="text-sm text-gray-500 mt-2">Pay at your doorstep when your order is delivered.</p>

                      <Button className="mt-4 bg-[#fb641b] hover:bg-[#fb641b]/90">Place Order</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="card">
                    <div className="p-4 border rounded">
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" type="password" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="name-on-card">Name on Card</Label>
                          <Input id="name-on-card" placeholder="John Doe" />
                        </div>

                        <Button type="submit" className="bg-[#fb641b] hover:bg-[#fb641b]/90">
                          Pay ₹{total.toLocaleString()}
                        </Button>
                      </form>
                    </div>
                  </TabsContent>

                  <TabsContent value="upi">
                    <div className="p-4 border rounded">
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="upi-id">UPI ID</Label>
                          <Input id="upi-id" placeholder="yourname@upi" />
                        </div>

                        <Button type="submit" className="bg-[#fb641b] hover:bg-[#fb641b]/90">
                          Pay ₹{total.toLocaleString()}
                        </Button>
                      </form>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          {/* Price Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded shadow-sm p-4 md:p-6 sticky top-4">
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

              {paymentMethod === "cod" && (
                <Button className="w-full mt-6 bg-[#fb641b] hover:bg-[#fb641b]/90">Place Order</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

