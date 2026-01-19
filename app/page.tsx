"use client";
import "./globals.css"
import React, { Suspense } from 'react';

const HeroSection = React.lazy(() => import('./home/hero-section'));
const ServicesSection = React.lazy(() => import('./home/services-section'));
const BestLifeSection = React.lazy(() => import('./home/bestlife-section'));
const VetClinicSection = React.lazy(() => import('./home/vetClinic-section'));
const FequentlyBoughtSection = React.lazy(() => import('./home/freqBought-section'));
const OrdersSection = React.lazy(() => import('./home/orders-section'));
const NoteSection = React.lazy(() => import('./home/note-section'));

export default function Home() {
  return (
          <div className="flex flex-col">
              {/* Suspense with a fallback for loading state */}
              <Suspense fallback={<div>Loading...</div>}>
                <HeroSection />
                <ServicesSection />
                <BestLifeSection />
                <VetClinicSection />
                <FequentlyBoughtSection />
                <OrdersSection />
                <NoteSection />
              </Suspense>
          </div>
        );
}
