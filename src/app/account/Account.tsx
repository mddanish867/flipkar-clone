import {Link} from "react-router-dom"
import { Package, CreditCard, Heart, User, LogOut, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample order data
const orders = [
  {
    id: "OD123456789",
    date: "15 Mar 2024",
    status: "Delivered",
    items: [
      {
        id: 1,
        name: "iPhone 15",
        image: "/vite.svg?height=80&width=80",
        price: 79999,
      },
    ],
    total: 79999,
  },
  {
    id: "OD987654321",
    date: "10 Mar 2024",
    status: "Shipped",
    items: [
      {
        id: 2,
        name: "Samsung Galaxy S23",
        image: "/vite.svg?height=80&width=80",
        price: 69999,
      },
    ],
    total: 69999,
  },
]

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4 md:px-8 lg:px-16">
        <h1 className="text-2xl font-bold mb-6">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded shadow-sm p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h2 className="font-medium">John Doe</h2>
                  <p className="text-sm text-gray-500">john.doe@example.com</p>
                </div>
              </div>

              <Separator className="my-4" />

              <nav>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/account"
                      className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 text-[#2874f0]"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      <span>My Orders</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/account/profile" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
                      <User className="h-5 w-5" />
                      <span>Profile Information</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/account/addresses" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
                      <Package className="h-5 w-5" />
                      <span>Manage Addresses</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/account/payments" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
                      <CreditCard className="h-5 w-5" />
                      <span>Payment Methods</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/account/wishlist" className="flex items-center gap-3 p-2 rounded hover:bg-gray-100">
                      <Heart className="h-5 w-5" />
                      <span>My Wishlist</span>
                    </Link>
                  </li>
                </ul>
              </nav>

              <Separator className="my-4" />

              <Button
                variant="ghost"
                className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 p-2 h-auto font-normal"
              >
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded shadow-sm p-4 md:p-6">
              <h2 className="text-xl font-bold mb-4">My Orders</h2>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="processing">Processing</TabsTrigger>
                  <TabsTrigger value="shipped">Shipped</TabsTrigger>
                  <TabsTrigger value="delivered">Delivered</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border rounded p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <p className="font-medium">Order #{order.id}</p>
                          <p className="text-sm text-gray-500">Placed on {order.date}</p>
                        </div>
                        <div className="mt-2 md:mt-0">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Shipped"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>

                      <Separator className="my-3" />

                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 py-2">
                          <div className="relative h-16 w-16">
                            <img
                              src={item.image || "/vite.svg"}
                              alt={item.name}
                              className="absolute inset-0 w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm">₹{item.price.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}

                      <Separator className="my-3" />

                      <div className="flex justify-between items-center">
                        <p className="font-medium">Total: ₹{order.total.toLocaleString()}</p>
                        <Button variant="outline" className="text-[#2874f0] border-[#2874f0]">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="processing">
                  <div className="text-center py-8">
                    <p className="text-gray-500">No processing orders found</p>
                  </div>
                </TabsContent>

                <TabsContent value="shipped">
                  {orders
                    .filter((order) => order.status === "Shipped")
                    .map((order) => (
                      <div key={order.id} className="border rounded p-4 mb-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <p className="font-medium">Order #{order.id}</p>
                            <p className="text-sm text-gray-500">Placed on {order.date}</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                              {order.status}
                            </span>
                          </div>
                        </div>

                        <Separator className="my-3" />

                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-4 py-2">
                            <div className="relative h-16 w-16">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="absolute inset-0 w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm">₹{item.price.toLocaleString()}</p>
                            </div>
                          </div>
                        ))}

                        <Separator className="my-3" />

                        <div className="flex justify-between items-center">
                          <p className="font-medium">Total: ₹{order.total.toLocaleString()}</p>
                          <Button variant="outline" className="text-[#2874f0] border-[#2874f0]">
                            Track Order
                          </Button>
                        </div>
                      </div>
                    ))}
                </TabsContent>

                <TabsContent value="delivered">
                  {orders
                    .filter((order) => order.status === "Delivered")
                    .map((order) => (
                      <div key={order.id} className="border rounded p-4 mb-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <p className="font-medium">Order #{order.id}</p>
                            <p className="text-sm text-gray-500">Placed on {order.date}</p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                              {order.status}
                            </span>
                          </div>
                        </div>

                        <Separator className="my-3" />

                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center gap-4 py-2">
                            <div className="relative h-16 w-16">
                              <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="absolute inset-0 w-full h-full object-contain"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm">₹{item.price.toLocaleString()}</p>
                            </div>
                          </div>
                        ))}

                        <Separator className="my-3" />

                        <div className="flex justify-between items-center">
                          <p className="font-medium">Total: ₹{order.total.toLocaleString()}</p>
                          <Button variant="outline" className="text-[#2874f0] border-[#2874f0]">
                            Buy Again
                          </Button>
                        </div>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

