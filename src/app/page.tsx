import { Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './home/components/HeroSection'
import { ProductIntro } from './home/components/ProductIntro'
import { GuideSection } from './home/components/GuideSection'
import { TestimonialSection } from './home/components/TestimonialSection'
import { CTASection } from './home/components/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense>
          <HeroSection />
        </Suspense>
        <Suspense>
          <ProductIntro />
        </Suspense>
        <Suspense>
          <GuideSection />
        </Suspense>
        <Suspense>
          <TestimonialSection />
        </Suspense>
        <Suspense>
          <CTASection />
        </Suspense>
      </main>
    </>
  )
}
