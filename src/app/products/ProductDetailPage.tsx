
import { useState } from "react"
import {Link} from "react-router-dom"
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Sample product data
const product = {
  id: 1,
  name: "iPhone 15 (Black, 128 GB)",
  description:
    "The iPhone 15 features a stunning 6.1-inch Super Retina XDR display, powerful A16 Bionic chip, and an advanced camera system with a 48MP main camera. Experience exceptional performance, all-day battery life, and the latest iOS features.",
  price: 79999,
  originalPrice: 89999,
  discount: "11% off",
  rating: 4.5,
  reviews: 1234,
  inStock: true,
  brand: "Apple",
  images: [
    "/vite.svg?height=500&width=500",
    "/vite.svg?height=500&width=500",
    "/vite.svg?height=500&width=500",
    "/vite.svg?height=500&width=500",
    "/vite.svg?height=500&width=500",
  ],
  highlights: [
    "6.1-inch Super Retina XDR display",
    "A16 Bionic chip",
    "48MP main camera with 2x optical-quality zoom",
    "Up to 26 hours of video playback",
    "Face ID for secure authentication",
    "iOS 17",
  ],
  specifications: [
    { name: "In The Box", value: "iPhone, USB-C Cable, Documentation" },
    { name: "Model Number", value: "A2846" },
    { name: "Model Name", value: "iPhone 15" },
    { name: "Color", value: "Black" },
    { name: "Browse Type", value: "Smartphones" },
    { name: "SIM Type", value: "Dual Sim" },
    { name: "Hybrid Sim Slot", value: "No" },
    { name: "Touchscreen", value: "Yes" },
    { name: "OTG Compatible", value: "Yes" },
    { name: "Sound Enhancements", value: "Spatial Audio" },
  ],
  seller: "Apple Store",
  warranty: "1 Year Manufacturer Warranty",
}

// Sample related products
const relatedProducts = [
  {
    id: 2,
    name: "iPhone 15 Pro",
    image: "/vite.svg?height=200&width=200",
    price: 119999,
    originalPrice: 129999,
    discount: "7% off",
    rating: 4.7,
    reviews: 876,
    url: "/product/2",
  },
  {
    id: 3,
    name: "iPhone 15 Plus",
    image: "/vite.svg?height=200&width=200",
    price: 89999,
    originalPrice: 99999,
    discount: "10% off",
    rating: 4.6,
    reviews: 654,
    url: "/product/3",
  },
  {
    id: 4,
    name: "iPhone 14",
    image: "/vite.svg?height=200&width=200",
    price: 69999,
    originalPrice: 79999,
    discount: "12% off",
    rating: 4.5,
    reviews: 1432,
    url: "/product/4",
  },
  {
    id: 5,
    name: "iPhone 14 Pro",
    image: "/vite.svg?height=200&width=200",
    price: 109999,
    originalPrice: 119999,
    discount: "8% off",
    rating: 4.6,
    reviews: 987,
    url: "/product/5",
  },
]

export default function ProductDetailPage() {
  const [mainImage, setMainImage] = useState(product.images[0])
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 5) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white rounded shadow-sm p-4 md:p-6">
          {/* Product Images */}
          <div>
            <div className="flex flex-col md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="order-2 md:order-1 md:w-20">
                <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[500px] py-2">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative h-16 w-16 border-2 rounded cursor-pointer flex-shrink-0 ${
                        mainImage === image ? "border-[#2874f0]" : "border-transparent"
                      }`}
                      onClick={() => setMainImage(image)}
                    >
                      <img
                        src={image || "/vite.svg"}
                        alt={`${product.name} - Image ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Image */}
              <div className="order-1 md:order-2 flex-grow">
                <div className="relative h-[300px] md:h-[500px] w-full">
                  <img src={mainImage || "/vite.svg"} alt={product.name} className="absolute inset-0 w-full h-full object-contain" />
                </div>
                <div className="flex justify-center gap-4 mt-6">
                  <Button className="bg-[#ff9f00] hover:bg-[#ff9f00]/90 text-white rounded-none h-14 w-52">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    ADD TO CART
                  </Button>
                  <Button className="bg-[#fb641b] hover:bg-[#fb641b]/90 text-white rounded-none h-14 w-52">BUY NOW</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <h1 className="text-xl md:text-2xl font-medium mb-1">{product.name}</h1>
              <div className="flex items-center gap-4 mb-2">
                <div className="flex items-center gap-1">
                  <div className="bg-green-700 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
                    {product.rating} <Star className="h-3 w-3 ml-0.5 fill-white" />
                  </div>
                  <span className="text-sm text-gray-500">({product.reviews.toLocaleString()} ratings)</span>
                </div>
                <span className="text-green-600 text-sm font-medium">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
                <span className="text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="text-green-600">{product.discount}</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-4">
              <h2 className="font-medium mb-2">Available offers</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 font-medium mr-2">•</span>
                  <span>
                    <span className="font-medium">Bank Offer:</span> 10% off on HDFC Bank Credit Card, up to ₹1000 on
                    orders of ₹5000 and above
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-medium mr-2">•</span>
                  <span>
                    <span className="font-medium">No Cost EMI:</span> Avail No Cost EMI on select cards for orders above
                    ₹3000
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-medium mr-2">•</span>
                  <span>
                    <span className="font-medium">Partner Offer:</span> Get GST invoice and save up to 28% on business
                    purchases
                  </span>
                </li>
              </ul>
            </div>

            <Separator className="my-4" />

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="text-gray-500 text-sm mb-1">Delivery</h2>
                <div className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-[#2874f0]" />
                  <span className="font-medium">Free delivery by Tomorrow</span>
                </div>
              </div>
              <div>
                <h2 className="text-gray-500 text-sm mb-1">Warranty</h2>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-[#2874f0]" />
                  <span className="font-medium">{product.warranty}</span>
                </div>
              </div>
              <div>
                <h2 className="text-gray-500 text-sm mb-1">Returns</h2>
                <div className="flex items-center">
                  <RotateCcw className="h-5 w-5 mr-2 text-[#2874f0]" />
                  <span className="font-medium">7 Days Replacement</span>
                </div>
              </div>
              <div>
                <h2 className="text-gray-500 text-sm mb-1">Seller</h2>
                <div className="flex items-center">
                  <span className="font-medium">{product.seller}</span>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-4">
              <h2 className="font-medium mb-2">Quantity</h2>
              <div className="flex items-center border rounded w-24">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-none"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-none"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 5}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="mb-4">
              <h2 className="font-medium mb-2">Highlights</h2>
              <ul className="list-disc pl-5 space-y-1">
                {product.highlights.map((highlight, index) => (
                  <li key={index} className="text-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Description and Specifications */}
        <div className="bg-white rounded shadow-sm p-4 md:p-6 mt-6">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="text-sm leading-relaxed">
              <p>{product.description}</p>
            </TabsContent>

            <TabsContent value="specifications">
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="general">
                    <AccordionTrigger>General</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {product.specifications.slice(0, 5).map((spec, index) => (
                          <div key={index} className="grid grid-cols-2 gap-4 py-2 border-b last:border-0">
                            <span className="text-gray-500">{spec.name}</span>
                            <span>{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="display">
                    <AccordionTrigger>Display & Hardware</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {product.specifications.slice(5, 10).map((spec, index) => (
                          <div key={index} className="grid grid-cols-2 gap-4 py-2 border-b last:border-0">
                            <span className="text-gray-500">{spec.name}</span>
                            <span>{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-green-700 mb-2">{product.rating}</div>
                    <div className="flex items-center justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">{product.reviews.toLocaleString()} ratings</div>
                  </div>

                  <div className="flex-grow">
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center gap-2">
                          <span className="w-6 text-right">{star}</span>
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-green-600 h-2.5 rounded-full"
                              style={{
                                width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 5 : star === 2 ? 3 : 2}%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-xs text-gray-500">
                            {star === 5 ? "70%" : star === 4 ? "20%" : star === 3 ? "5%" : star === 2 ? "3%" : "2%"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Customer Reviews</h3>

                  {/* Sample reviews */}
                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-green-700 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
                        5 <Star className="h-3 w-3 ml-0.5 fill-white" />
                      </div>
                      <span className="font-medium">Excellent product!</span>
                    </div>
                    <p className="text-sm mb-2">
                      The iPhone 15 is an amazing device. The camera quality is outstanding and the battery life is much
                      better than my previous phone.
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>Rahul S. | 10 Mar 2024</span>
                    </div>
                  </div>

                  <div className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-green-700 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
                        4 <Star className="h-3 w-3 ml-0.5 fill-white" />
                      </div>
                      <span className="font-medium">Good but expensive</span>
                    </div>
                    <p className="text-sm mb-2">
                      The phone is great in terms of performance and camera, but I feel it's a bit overpriced compared
                      to competitors with similar features.
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>Priya M. | 5 Mar 2024</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-green-700 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
                        5 <Star className="h-3 w-3 ml-0.5 fill-white" />
                      </div>
                      <span className="font-medium">Worth every penny!</span>
                    </div>
                    <p className="text-sm mb-2">
                      I upgraded from an iPhone 12 and the difference is noticeable. The display is brighter, the camera
                      is significantly better, and the battery lasts all day even with heavy use.
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>Amit K. | 28 Feb 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="bg-white rounded shadow-sm p-4 md:p-6 mt-6">
          <h2 className="text-xl font-bold mb-4">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <Link key={product.id} to={product.url} className="block">
                <div className="border rounded p-4 h-full hover:shadow-md transition-shadow">
                  <div className="relative h-40 mb-4">
                    <img
                      src={product.image || "/vite.svg"}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-base mb-1 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-green-700 text-white text-xs px-1.5 py-0.5 rounded flex items-center">
                      {product.rating} ★
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">₹{product.price.toLocaleString()}</span>
                    <span className="text-gray-500 line-through text-xs">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-green-600 text-xs">{product.discount}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

