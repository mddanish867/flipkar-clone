import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

interface BuyNowButtonProps {
  productId: number
  className?: string
}

export function BuyNowButton({ productId, className }: BuyNowButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useNavigate()

  const handleBuyNow = async () => {
    setIsLoading(true)

    // Simulate API call to add to cart
    setTimeout(() => {
      setIsLoading(false)

      // Redirect to checkout
      router("/cart")

      // In a real app, you would add the item to cart and redirect to checkout
    }, 800)
  }

  return (
    <Button
      onClick={handleBuyNow}
      disabled={isLoading}
      className={`bg-[#fb641b] hover:bg-[#fb641b]/90 text-white ${className}`}
    >
      {isLoading ? "PROCESSING..." : "BUY NOW"}
    </Button>
  )
}

