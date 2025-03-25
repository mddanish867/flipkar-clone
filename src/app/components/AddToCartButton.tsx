import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface AddToCartButtonProps {
  productId: number
  productName: string
  price: number
  image: string
  className?: string
}

export default function AddToCartButton({ productId, productName, price, image, className }: AddToCartButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = async () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)

      toast({
        title: "Added to cart",
        description: `${productName} has been added to your cart.`,
      })

      // In a real app, you would update cart state here
    }, 800)
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isLoading}
      className={`bg-[#ff9f00] hover:bg-[#ff9f00]/90 text-white ${className}`}
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      {isLoading ? "ADDING..." : "ADD TO CART"}
    </Button>
  )
}

