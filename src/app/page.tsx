import { Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './home/components/HeroSection'
import { ProductIntro } from './home/components/ProductIntro'
import { GuideSection } from './home/components/GuideSection'
import { ResultExample } from './home/components/ResultExample'

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
          <ResultExample />
        </Suspense>
      </main>
    </>
  )
}
