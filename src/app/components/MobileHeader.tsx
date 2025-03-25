import { useState } from "react"
import {Link} from "react-router-dom"
import { Menu, Search, ShoppingCart, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="md:hidden bg-[#2874f0] text-white py-2 px-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {isSearchOpen ? (
          <div className="flex items-center w-full">
            <Button variant="ghost" size="icon" className="text-white mr-2" onClick={() => setIsSearchOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search for products, brands and more"
                className="h-9 pl-4 pr-12 rounded-sm bg-white text-black w-full"
                autoFocus
              />
              <Search className="absolute right-3 top-2 h-5 w-5 text-[#2874f0]" />
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white mr-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[80%]">
                  <div className="bg-[#2874f0] text-white p-4 flex items-center gap-4">
                    <User className="h-6 w-6" />
                    <div>
                      <h3 className="font-medium">Hello, User</h3>
                      <div className="flex gap-2 text-sm">
                        <Link to="#">Login</Link>
                        <span>|</span>
                        <Link to="#">Sign Up</Link>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <nav>
                      <ul className="space-y-4">
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="#" className="flex items-center gap-3">
                            <ShoppingCart className="h-5 w-5" />
                            <span>My Orders</span>
                          </Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          <Link to="#" className="flex items-center gap-3">
                            <User className="h-5 w-5" />
                            <span>My Account</span>
                          </Link>
                        </li>
                        {/* Add more menu items as needed */}
                      </ul>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
              <Link to="/" className="font-bold text-xl">
                Flipkart
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

