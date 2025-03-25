import type React from "react"
import { useState } from "react"
import {Link} from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [isOtpSent, setIsOtpSent] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login with:", email, password)
  }

  const handlePhoneLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isOtpSent) {
      // Send OTP logic
      setIsOtpSent(true)
    } else {
      // Verify OTP logic
      console.log("Verify OTP:", phone, otp)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded shadow-sm w-full max-w-4xl flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="bg-[#2874f0] text-white p-8 md:w-2/5 rounded-l">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <p className="mb-8">Get access to your Orders, Wishlist and Recommendations</p>
          <div className="hidden md:block mt-auto">
            <img
              src="/vite.svg?height=200&width=200"
              alt="Login"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 md:w-3/5">
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>

            <TabsContent value="email">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input                 
                    id="email"
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <p className="text-xs text-gray-500">
                  By continuing, you agree to Flipkart&apos;s Terms of Use and Privacy Policy.
                </p>
                <Button type="submit" className="w-full bg-[#fb641b] hover:bg-[#fb641b]/90 rounded-none h-12">
                  Login
                </Button>
                <div className="text-center">
                  <Link to="#" className="text-[#2874f0] text-sm">
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    New to Flipkart?{" "}
                    <Link to="/signup" className="text-[#2874f0]">
                      Create an account
                    </Link>
                  </p>
                </div>
              </form>
            </TabsContent>

            <TabsContent value="phone">
              <form onSubmit={handlePhoneLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Mobile Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={isOtpSent}
                  />
                </div>

                {isOtpSent && (
                  <div className="space-y-2">
                    <Label htmlFor="otp">One Time Password</Label>
                    <Input
                      id="otp"
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                  </div>
                )}

                <p className="text-xs text-gray-500">
                  By continuing, you agree to Flipkart&apos;s Terms of Use and Privacy Policy.
                </p>

                <Button type="submit" className="w-full bg-[#fb641b] hover:bg-[#fb641b]/90 rounded-none h-12">
                  {isOtpSent ? "Verify OTP" : "Request OTP"}
                </Button>

                {isOtpSent && (
                  <div className="text-center">
                    <Button variant="link" className="text-[#2874f0] p-0 h-auto" onClick={() => setIsOtpSent(false)}>
                      Change Phone Number
                    </Button>
                  </div>
                )}

                <div className="text-center pt-4">
                  <p className="text-gray-600">
                    New to Flipkart?{" "}
                    <Link to="/signup" className="text-[#2874f0]">
                      Create an account
                    </Link>
                  </p>
                </div>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

