import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface WishlistButtonProps {
  productId: number
  productName: string
  className?: string
  variant?: "icon" | "text" | "outline"
}

export function WishlistButton({ productId, productName, className = "", variant = "icon" }: WishlistButtonProps) {
  const [isInWishlist, setIsInWishlist] = useState(false)
  const { toast } = useToast()

  const handleToggleWishlist = () => {
    setIsInWishlist(!isInWishlist)

    toast({
      title: isInWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${productName} has been ${isInWishlist ? "removed from" : "added to"} your wishlist.`,
    })

    // In a real app, you would update wishlist state here
  }

  if (variant === "icon") {
    return (
      <Button variant="ghost" size="icon" onClick={handleToggleWishlist} className={className}>
        <Heart className={`h-5 w-5 ${isInWishlist ? "fill-red-500 text-red-500" : ""}`} />
      </Button>
    )
  }

  if (variant === "outline") {
    return (
      <Button variant="outline" onClick={handleToggleWishlist} className={className}>
        <Heart className={`h-5 w-5 mr-2 ${isInWishlist ? "fill-red-500 text-red-500" : ""}`} />
        {isInWishlist ? "WISHLISTED" : "WISHLIST"}
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      onClick={handleToggleWishlist}
      className={`text-[#2874f0] hover:bg-transparent hover:text-[#2874f0]/80 p-0 ${className}`}
    >
      <Heart className={`h-4 w-4 mr-1 ${isInWishlist ? "fill-red-500 text-red-500" : ""}`} />
      {isInWishlist ? "WISHLISTED" : "WISHLIST"}
    </Button>
  )
}

