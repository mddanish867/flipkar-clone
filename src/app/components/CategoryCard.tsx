import {Link} from "react-router-dom"

interface CategoryCardProps {
  category: {
    id: number
    name: string
    image: string
    url: string
  }
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link to={category.url} className="flex flex-col items-center justify-center">
      <div className="relative h-16 w-16">
        <img src={category.image || "/placeholder.svg"} alt={category.name} className="object-contain" />
      </div>
      <span className="text-sm font-medium text-center mt-1">{category.name}</span>
    </Link>
  )
}

