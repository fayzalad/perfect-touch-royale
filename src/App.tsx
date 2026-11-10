import { HashRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ShopPage = lazy(() => import("@/pages/ShopPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const CheckoutPage = lazy(() => import("@/pages/CheckoutPage"));
const OrderSuccessPage = lazy(() => import("@/pages/OrderSuccessPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ProductPage = lazy(() => import("@/pages/ProductPage"));
const SizeGuidePage = lazy(() => import("@/pages/SizeGuidePage"));
const DeliveryPage = lazy(() => import("@/pages/DeliveryPage"));
const CareGuidePage = lazy(() => import("@/pages/CareGuidePage"));
const WishlistPage = lazy(() => import("@/pages/WishlistPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function PageLoader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        color: "#a9853f",
        fontFamily: "Cormorant Garamond, serif",
        fontSize: "24px",
      }}
    >
      Loading…
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageLoader />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="shop"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ShopPage />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ContactPage />
                </Suspense>
              }
            />
            <Route
              path="checkout"
              element={
                <Suspense fallback={<PageLoader />}>
                  <CheckoutPage />
                </Suspense>
              }
            />
            <Route
              path="order-success"
              element={
                <Suspense fallback={<PageLoader />}>
                  <OrderSuccessPage />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<PageLoader />}>
                  <AboutPage />
                </Suspense>
              }
            />
            <Route
              path="product/:slug"
              element={
                <Suspense fallback={<PageLoader />}>
                  <ProductPage />
                </Suspense>
              }
            />
            <Route
              path="size-guide"
              element={
                <Suspense fallback={<PageLoader />}>
                  <SizeGuidePage />
                </Suspense>
              }
            />
            <Route
              path="delivery"
              element={
                <Suspense fallback={<PageLoader />}>
                  <DeliveryPage />
                </Suspense>
              }
            />
            <Route
              path="care-guide"
              element={
                <Suspense fallback={<PageLoader />}>
                  <CareGuidePage />
                </Suspense>
              }
            />
            <Route
              path="wishlist"
              element={
                <Suspense fallback={<PageLoader />}>
                  <WishlistPage />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<PageLoader />}>
                  <NotFoundPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </AppProvider>
  );
}
