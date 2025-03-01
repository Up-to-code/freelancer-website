import { Hero } from "@/components/sections/Hero"
import { Categories } from "@/components/sections/Categories"
 import { HowItWorks } from "@/components/sections/HowItWorks"
 import { CTA } from "@/components/sections/CTA"
import { Freelancers } from "@/components/sections/Freelancers"
import { Testimonials } from "@/components/sections/Testimonials"
 
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Hero />
        <Categories />
        <Freelancers />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
    </div>
  )
}

