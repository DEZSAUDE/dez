import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { AdminPanel } from './components/AdminPanel';
import { EmailAuth } from './components/EmailAuth';
import { useAuth } from './hooks/useAuth';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota pública - Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Rota administrativa protegida */}
        <Route path="/admin" element={<AdminRoute />} />
        
        {/* Redirect qualquer rota inválida para home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

// Componente para proteger a rota admin
function AdminRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  // Se não está logado, mostra tela de login
  if (!user) {
    return <EmailAuth onAuthSuccess={() => window.location.reload()} />;
  }

  // Se está logado, mostra o painel admin
  return <AdminPanel />;
}

export default App;