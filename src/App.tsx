import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; 

// Components Importations
import Home from './Pages/Home'
import ProjectDetail from './Pages/ProjectDetail';

// Services components importations

import AIAgent from './components/Services/AIAgent';
import LandingPages from './components/Services/LandingPages';
import WebDevelopment from './components/Services/WebDevelopment';
import WebApps from './components/Services/WebApps';
import Automations from './components/Services/Automations';
import Chatbots from './components/Services/Chatbots';



function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Services Routes */}
        <Route path="/AgentesDeIA" element={<AIAgent />} />
        <Route path="/LandingPages" element={<LandingPages />} />
        <Route path="/DesarrolloWeb" element={<WebDevelopment />} />
        <Route path="/AplicacionesWeb" element={<WebApps />} />
        <Route path="/Automatizaciones" element={<Automations />} />
        <Route path="/ChatbotsInteligentes" element={<Chatbots />} />

        <Route path="/projects/:id" element={<ProjectDetail />} />

      </Routes>
    </>
  );
}

export default App;