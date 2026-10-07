/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundGlow } from './components/BackgroundGlow';
import { Header } from './components/Header';
import { SocialLinkCard } from './components/SocialLinkCard';
import { ClosingSection } from './components/ClosingSection';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { mainLinks } from './data/links';

export default function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen text-white flex flex-col items-center justify-between font-sans selection:bg-[#FFB000] selection:text-black overflow-x-hidden"
      style={{ backgroundColor: '#050505', minHeight: '100vh', width: '100%' }}
    >
      {/* Dark Premium Ambient Atmosphere (z-0) */}
      <BackgroundGlow />

      {/* Main Responsive Wrapper (z-10, sits cleanly above background) */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg px-4 sm:px-6 flex flex-col items-center min-h-screen justify-between py-2">
        <div className="w-full flex flex-col items-center">
          {/* Top Header Section */}
          <Header onOpenShare={() => setIsShareOpen(true)} />

          {/* The 4 Core Vertical Link Cards */}
          <main className="w-full space-y-3 sm:space-y-3.5 my-2">
            {mainLinks.map((link, index) => (
              <SocialLinkCard key={link.id} link={link} index={index} />
            ))}
          </main>

          {/* Secondary Closing Section */}
          <ClosingSection />
        </div>

        {/* Minimalist Brand Footer */}
        <Footer />
      </div>

      {/* Share / Quick Action Modal */}
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  );
}
