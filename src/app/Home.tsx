import { Link } from "react-router-dom";
import { ChevronRight, Search, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CategoryCard from "../app/components/CategoryCard";
import MobileHeader from "../app/components/MobileHeader";
import ProductCard from "../app/components/ProductCard";
import ProductCarousel from "../app/components/ProductCarousel";

// Sample data
const categories = [
  {
    id: 1,
    name: "Mobiles",
    image: "/vite.svg?height=80&width=80",
    url: "#",
  },
  {
    id: 2,
    name: "Fashion",
    image: "/vite.svg?height=80&width=80",
    url: "#",
  },
  {
    id: 3,
    name: "Electronics",
    image: "/vite.svg?height=80&width=80",
    url: "#",
  },
  {
    id: 4,
    name: "Home",
    image: "/vite.svg?height=80&width=80",
    url: "#",
  },
  {
    id: 5,
    name: "Appliances",
    image: "/vite.svg?height=80&width=80",
    url: "#",
  },
  {
    id: 6,
    name: "Toys",
    image: "/vite.svg?height=80&width=80",
    url: "#",
  },
  {
    id: 7,
    name: "Grocery",
    image: "/vite.svg?height=80&width=80",
    url: "#",
  },
];

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
    url: "#",
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
    url: "#",
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
    url: "#",
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
    url: "#",
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
    url: "#",
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
    url: "#",
  },
];

const banners = [
  {
    id: 1,
    image: "/vite.svg?height=300&width=1200",
    url: "#",
  },
  {
    id: 2,
    image: "/vite.svg?height=300&width=1200",
    url: "#",
  },
  {
    id: 3,
    image: "/vite.svg?height=300&width=1200",
    url: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Desktop Header */}
      <header className="hidden md:block bg-[#2874f0] text-white py-2.5 px-4 lg:px-16 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex flex-col">
              <span className="font-bold text-xl">Flipkart</span>
              <span className="text-xs italic flex items-center">
                Explore <span className="text-yellow-400 mx-0.5">Plus</span>
                <img
                  src="/vite.svg?height=10&width=10"
                  alt="Plus"
                  width={10}
                  height={10}
                />
              </span>
            </Link>
            <div className="relative w-[500px]">
              <Input
                type="text"
                placeholder="Search for products, brands and more"
                className="h-10 pl-4 pr-12 rounded-none bg-white text-black"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-[#2874f0]" />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <Button className="text-[#2874f0] w-32 h-8 font-bold bg-white rounded-none hover:bg-white cursor-pointer">
              Login
            </Button>
            <Link to="#" className="font-medium">
              Become a Seller
            </Link>
            <div className="relative group">
              <Button
                variant="link"
                className="text-white text-lg font-semibold no-underline hover:no-underline cursor-pointer"
              >
                More
              </Button>
            </div>
            <Button
              variant="link"
              className="text-white text-lg font-semibold no-underline hover:no-underline cursor-pointer"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Cart
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <MobileHeader />

      <main>
        {/* Categories */}
        <section className="bg-white py-3 px-4 shadow-sm hidden md:block">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Banner Carousel */}
        <section className="py-3 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <ProductCarousel banners={banners} />
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-3 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Best of Electronics</h2>
                <Button
                  variant="outline"
                  className="bg-[#2874f0] text-white hover:bg-[#2874f0]/90 rounded-none"
                >
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deals of the Day */}
        <section className="py-3 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Deals of the Day</h2>
                <Button
                  variant="outline"
                  className="bg-[#2874f0] text-white hover:bg-[#2874f0]/90 rounded-none"
                >
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {products
                  .slice(3)
                  .concat(products.slice(0, 3))
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#172337] text-white py-10 px-4 md:px-8 lg:px-16 mt-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-400 font-medium mb-3">ABOUT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#">Contact Us</Link>
              </li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Careers</Link>
              </li>
              <li>
                <Link to="#">Flipkart Stories</Link>
              </li>
              <li>
                <Link to="#">Press</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-3">HELP</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#">Payments</Link>
              </li>
              <li>
                <Link to="#">Shipping</Link>
              </li>
              <li>
                <Link to="#">Cancellation & Returns</Link>
              </li>
              <li>
                <Link to="#">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-3">POLICY</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#">Return Policy</Link>
              </li>
              <li>
                <Link to="#">Terms Of Use</Link>
              </li>
              <li>
                <Link to="#">Security</Link>
              </li>
              <li>
                <Link to="#">Privacy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-3">SOCIAL</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#">Facebook</Link>
              </li>
              <li>
                <Link to="#">Twitter</Link>
              </li>
              <li>
                <Link to="#">YouTube</Link>
              </li>
              <li>
                <Link to="#">Instagram</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-gray-400 font-medium mb-3">Mail Us:</h3>
            <p className="text-sm">
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
            </p>
          </div>
          <div>
            <h3 className="text-gray-400 font-medium mb-3">
              Registered Office Address:
            </h3>
            <p className="text-sm">
              Flipkart Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road, Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
              <br />
              CIN: U51109KA2012PTC066107
              <br />
              Telephone: 044-45614700
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>© 2007-2024 Flipkart.com</p>
        </div>
      </footer>
    </div>
  );
}
