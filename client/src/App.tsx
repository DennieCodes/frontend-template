import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./views/Home";
import SearchPage from "./views/Search";

import { Box, Container } from "@mui/material";
import { LAYOUT_CONSTANTS } from "./constants/layout";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./views/About";
import Contact from "./views/Contact";
import ThemeDemo from "./views/ThemeDemo";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import AdminDashboard from "./views/Admin";
import UserAccountPage from "./views/UserAccount";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ArticlesDirectory from "./views/Articles";
import ArticlePage from "./views/ArticlePage";
import ResourcesDirectoryPage from "./views/Resources";
import ResourcePage from "./views/ResourcePage";
import QuizPage from "./views/Quiz";
import SurveyPage from "./views/Survey";
import ProductsPage from "./views/Products";
import ProductPage from "./views/Products/ProductPage";
import EventsPage from "./views/Events";
import EventPage from "./views/Events/EventPage";
import TermsOfService from "./views/TermsOfService";
import PrivacyPolicy from "./views/PrivacyPolicy";
import FAQ from "./views/FAQ";
import SiteMap from "./views/SiteMap";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Box component="main" sx={{ flex: 1, width: '100%' }}>
            <Container maxWidth="xl" sx={{ py: LAYOUT_CONSTANTS.CONTAINER.PADDING.MD }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/theme-demo" element={<ThemeDemo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/articles" element={<ArticlesDirectory />} />
                <Route path="/articles/:id" element={<ArticlePage />} />
                <Route path="/resources" element={<ResourcesDirectoryPage />} />
                <Route path="/resources/:id" element={<ResourcePage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/survey" element={<SurveyPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/events/:id" element={<EventPage />} />
                <Route path="/events-test" element={<div>Events Test Route Working!</div>} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/account"
                  element={
                    <ProtectedRoute>
                      <UserAccountPage />
                    </ProtectedRoute>
                  }
                />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/sitemap" element={<SiteMap />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Container>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
