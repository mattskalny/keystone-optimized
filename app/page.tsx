'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ClientOutcomeCard } from '@/components/client-outcome-card'
import { TrustLogos } from '@/components/trust-logos'
import { ServicesSection } from '@/components/services-section'
import { PricingSection } from '@/components/pricing-section'
import { CaseStudiesSection } from '@/components/case-studies-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { TaxHealthCheck } from '@/components/tax-health-check'
import { FAQSection } from '@/components/faq-section'
import { BookingSection } from '@/components/booking-section'
import { Footer } from '@/components/footer'
import { BookingModal } from '@/components/booking-modal'
import { BackToTop } from '@/components/back-to-top'
import { MobileStickyCta } from '@/components/mobile-sticky-cta'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const openBooking = () => setIsBookingOpen(true)
  const closeBooking = () => setIsBookingOpen(false)

  return (
    <>
      <Navbar onBookingClick={openBooking} />
      <main>
        <HeroSection onBookingClick={openBooking} />
        <ClientOutcomeCard />
        <TrustLogos />
        <ServicesSection />
        <PricingSection onBookingClick={openBooking} />
        <CaseStudiesSection onBookingClick={openBooking} />
        <TestimonialsSection />
        <TaxHealthCheck onBookingClick={openBooking} />
        <FAQSection />
        <BookingSection onBookingClick={openBooking} />
      </main>
      <Footer onBookingClick={openBooking} />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      <BackToTop />
      <MobileStickyCta onBookingClick={openBooking} />
    </>
  )
}
