import Dashboard from "./pages/dashboard/Dashboard";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "flatpickr/dist/themes/confetti.css";

function App() {
  return (
    <HelmetProvider>
      <Dashboard/>
    </HelmetProvider>
  );
}

export default App;
