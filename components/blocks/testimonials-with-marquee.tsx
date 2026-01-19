import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { Star } from "lucide-react"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
    rating?: number
  }>
  className?: string
  trustScore?: number
  totalReviews?: number
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className,
  trustScore = 4.5,
  totalReviews = 7
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "text-white",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-white">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-gray-400 sm:text-xl">
            {description}
          </p>
          
          {/* Trustpilot Score */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => {
                  const isFullStar = i < Math.floor(trustScore);
                  const isHalfStar = i === Math.floor(trustScore) && trustScore % 1 >= 0.5;
                  return (
                    <div key={i} className="relative">
                      <Star
                        className={cn(
                          "w-5 h-5 sm:w-6 sm:h-6",
                          isFullStar
                            ? "fill-[#FFB800] text-[#FFB800]"
                            : "fill-gray-700 text-gray-700"
                        )}
                      />
                      {isHalfStar && (
                        <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                          <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FFB800] text-[#FFB800]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-white">
                {trustScore}
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400">
              TrustScore {trustScore} out of 5 • {totalReviews} reviews on Trustpilot
            </p>
            <a
              href="https://www.trustpilot.com/review/aeonforex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#D4AF37] hover:text-[#FFD700] transition-colors underline"
            >
              View all reviews on Trustpilot →
            </a>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-infinite flex-row group-hover:[animation-play-state:paused]">
              {/* Duplicate testimonials for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    author={testimonial.author}
                    text={testimonial.text}
                    href={testimonial.href}
                    rating={testimonial.rating || 5}
                  />
                ))
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-transparent sm:block" />
        </div>
      </div>
    </section>
  )
}
