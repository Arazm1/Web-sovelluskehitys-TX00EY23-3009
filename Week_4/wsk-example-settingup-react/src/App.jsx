import { BrowserRouter, Routes, Route } from 'react-router';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        {/* Add more nested routes as needed */}
      </Route>
    </Routes>
  </BrowserRouter>
);