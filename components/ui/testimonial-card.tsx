import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar?: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
  rating?: number
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className,
  rating = 5
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border",
        "bg-gray-900/30 backdrop-blur-sm",
        "p-4 text-start sm:p-6",
        "hover:bg-gray-900/40",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300",
        "border-[#D4AF37]/20 hover:border-[#D4AF37]/40",
        "shadow-lg shadow-[#D4AF37]/5 hover:shadow-xl hover:shadow-[#D4AF37]/10",
        className
      )}
    >
      <div className="flex flex-col items-start mb-3">
        <div className="flex items-center gap-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-4 h-4",
                i < rating
                  ? "fill-[#FFB800] text-[#FFB800]"
                  : "fill-gray-700 text-gray-700"
              )}
            />
          ))}
        </div>
        <h3 className="text-md font-semibold leading-none text-white">
          {author.name}
        </h3>
        {author.handle && (
          <p className="text-sm text-gray-400">
            {author.handle}
          </p>
        )}
      </div>
      <p className="sm:text-md text-sm text-gray-300">
        {text}
      </p>
    </Card>
  )
}
