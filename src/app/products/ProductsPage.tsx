import { useState } from "react"
import {Link} from "react-router-dom"
import { Filter, SortAsc, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample products data
const products = [
  {
    id: 1,
    name: "iPhone 15",
    image: "/vite.svg?height=200&width=200",
    price: 79999,
    originalPrice: 89999,
    discount: "11% off",
    rating: 4.5,
    reviews: 1234,
    url: "/product/1",
    brand: "Apple",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    image: "/vite.svg?height=200&width=200",
    price: 69999,
    originalPrice: 79999,
    discount: "12% off",
    rating: 4.3,
    reviews: 987,
    url: "/product/2",
    brand: "Samsung",
  },
  {
    id: 3,
    name: "OnePlus 12",
    image: "/vite.svg?height=200&width=200",
    price: 59999,
    originalPrice: 64999,
    discount: "7% off",
    rating: 4.4,
    reviews: 765,
    url: "/product/3",
    brand: "OnePlus",
  },
  {
    id: 4,
    name: "Redmi Note 13 Pro",
    image: "/vite.svg?height=200&width=200",
    price: 24999,
    originalPrice: 29999,
    discount: "16% off",
    rating: 4.2,
    reviews: 543,
    url: "/product/4",
    brand: "Xiaomi",
  },
  {
    id: 5,
    name: "Realme GT 5",
    image: "/vite.svg?height=200&width=200",
    price: 34999,
    originalPrice: 39999,
    discount: "12% off",
    rating: 4.1,
    reviews: 432,
    url: "/product/5",
    brand: "Realme",
  },
  {
    id: 6,
    name: "Motorola Edge 40",
    image: "/vite.svg?height=200&width=200",
    price: 29999,
    originalPrice: 34999,
    discount: "14% off",
    rating: 4.0,
    reviews: 321,
    url: "/product/6",
    brand: "Motorola",
  },
  {
    id: 7,
    name: "Google Pixel 8",
    image: "/vite.svg?height=200&width=200",
    price: 69999,
    originalPrice: 79999,
    discount: "12% off",
    rating: 4.6,
    reviews: 876,
    url: "/product/7",
    brand: "Google",
  },
  {
    id: 8,
    name: "Vivo V30 Pro",
    image: "/vite.svg?height=200&width=200",
    price: 39999,
    originalPrice: 44999,
    discount: "11% off",
    rating: 4.2,
    reviews: 543,
    url: "/product/8",
    brand: "Vivo",
  },
]

// Sample brands
const brands = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "OnePlus" },
  { id: 4, name: "Xiaomi" },
  { id: 5, name: "Realme" },
  { id: 6, name: "Motorola" },
  { id: 7, name: "Google" },
  { id: 8, name: "Vivo" },
]

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([10000, 90000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("popularity")

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    return matchesPriceRange && matchesBrand
  })

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low-to-high":
        return a.price - b.price
      case "price-high-to-low":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default: // popularity
        return b.reviews - a.reviews
    }
  })

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Smartphones</h1>
          <div className="flex items-center gap-2">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SortAsc className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low-to-high">Price: Low to High</SelectItem>
                <SelectItem value="price-high-to-low">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="py-4">
                  <h2 className="text-lg font-bold mb-4">Filters</h2>
                  <Separator className="my-4" />

                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div className="px-2">
                      <Slider
                        defaultValue={[10000, 90000]}
                        min={10000}
                        max={100000}
                        step={1000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between mt-2 text-sm">
                        <span>₹{priceRange[0].toLocaleString()}</span>
                        <span>₹{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Brand</h3>
                    <div className="space-y-2">
                      {brands.map((brand) => (
                        <div key={brand.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={`brand-${brand.id}`}
                            checked={selectedBrands.includes(brand.name)}
                            onCheckedChange={() => handleBrandChange(brand.name)}
                          />
                          <label
                            htmlFor={`brand-${brand.id}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {brand.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-medium mb-3">Customer Rating</h3>
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <Checkbox id={`rating-${rating}`} />
                          <label
                            htmlFor={`rating-${rating}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                          >
                            {rating}
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 ml-1" />
                            <span className="ml-1">& above</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* Filters - Desktop */}
          <div className="hidden md:block md:col-span-1">
            <div className="bg-white rounded shadow-sm p-4">
              <h2 className="text-lg font-bold mb-4">Filters</h2>
              <Separator className="my-4" />

              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[10000, 90000]}
                    min={10000}
                    max={100000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Brand</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`desktop-brand-${brand.id}`}
                        checked={selectedBrands.includes(brand.name)}
                        onCheckedChange={() => handleBrandChange(brand.name)}
                      />
                      <label
                        htmlFor={`desktop-brand-${brand.id}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {brand.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Customer Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-2">
                      <Checkbox id={`desktop-rating-${rating}`} />
                      <label
                        htmlFor={`desktop-rating-${rating}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                      >
                        {rating}
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 ml-1" />
                        <span className="ml-1">& above</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="md:col-span-3 lg:col-span-4">
            <div className="bg-white rounded shadow-sm p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {sortedProducts.map((product) => (
                  <Link key={product.id} to={product.url} className="block">
                    <div className="border rounded p-4 h-full hover:shadow-md transition-shadow">
                      <div className="relative h-48 mb-4">
                        <img
                          src={product.image || "/placeholder.svg"}
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

              {sortedProducts.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No products match your filters</p>
                  <Button
                    variant="link"
                    className="text-[#2874f0] mt-2"
                    onClick={() => {
                      setPriceRange([10000, 90000])
                      setSelectedBrands([])
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

