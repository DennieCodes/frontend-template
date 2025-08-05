import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./views/Home";

import { Stack, Box } from "@mui/material";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./views/About";
import Contact from "./views/Contact";
import ThemeDemo from "./views/ThemeDemo";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import AdminDashboard from "./views/AdminDashboard";
import UserAccountPage from "./views/UserAccountPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ArticlesDirectory from "./views/ArticlesDirectory";
import ArticlePage from "./views/ArticlePage";
import ResourcesDirectoryPage from "./views/ResourcesDirectoryPage";
import TermsOfService from "./views/TermsOfService";
import PrivacyPolicy from "./views/PrivacyPolicy";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <Box component="main" sx={{ flex: 1, width: '100%' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/theme-demo" element={<ThemeDemo />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/articles" element={<ArticlesDirectory />} />
              <Route path="/articles/:id" element={<ArticlePage />} />
              <Route path="/resources" element={<ResourcesDirectoryPage />} />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
