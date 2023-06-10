import 'slick-carousel/slick/slick.css';

import Head from 'next/head';

import Banner from '@/components/Banner';
import BannerBottom from '@/components/BannerBottom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog | Explore the new horizon</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <main className="font-bodyFont">
        {/* ============ Header Start here ============ */}
        <Header />
        {/* ============ Header End here ============== */}
        {/* ============ Banner Start here ============ */}
        <Banner />
        {/* ============ Banner End here ============== */}
        <div className="relative mx-auto h-60 max-w-7xl">
          <BannerBottom />
        </div>
        {/* ============ Banner-Bottom End here ======= */}
        {/* ============ Post Part Start here ========= */}
        <div className="mx-auto max-w-7xl px-4 py-20">Posts will go here</div>
        {/* ============ Post Part End here =========== */}
        {/* ============ Footer Start here============= */}
        <Footer />
        {/* ============ Footer End here ============== */}
      </main>
    </div>
  );
}
