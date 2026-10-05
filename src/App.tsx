import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./sections/Navbar/Navbar";
import { Footer } from "./sections/Footer/Footer";
import { HomePage } from "./pages/HomePage";
import { ScrollToTop } from "./components/ScrollToTop";
import { TopProgressBar } from "./components/effects/TopProgressBar";
import { PageTransition } from "./components/effects/PageTransition";

const ServicesPage = lazy(() => import("./pages/ServicesPage").then((m) => ({ default: m.ServicesPage })));
const ProductsPage = lazy(() => import("./pages/ProductsPage").then((m) => ({ default: m.ProductsPage })));
const CertificatesPage = lazy(() => import("./pages/CertificatesPage").then((m) => ({ default: m.CertificatesPage })));
const AboutPage = lazy(() => import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import("./sections/NotFoundPage/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));

/** Blank hold while a route chunk downloads — deliberately invisible so it
 * never flashes on a fast connection. */
function RouteFallback() {
  return <div className="min-h-screen bg-white" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Navbar />
        <TopProgressBar />
        <Suspense fallback={<RouteFallback />}>
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/certificates" element={<CertificatesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </PageTransition>
        </Suspense>
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  );
}
