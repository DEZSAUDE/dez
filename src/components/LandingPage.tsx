import React, { useState } from 'react';
import { Shield, Clock, MapPin, Phone, Users, Heart, Star, CheckCircle, ArrowRight, Stethoscope, Activity, Zap, Award } from 'lucide-react';
import { DezSaudeLogo } from './Logo';
import { PharmacySelection } from './PharmacySelection';
import { LeadForm } from './LeadForm';

export function LandingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPharmacy, setSelectedPharmacy] = useState<any>(null);

  const handlePharmacySelect = (pharmacy: any) => {
    setSelectedPharmacy(pharmacy);
    setCurrentStep(3);
  };

  const handleFormComplete = () => {
    setCurrentStep(1);
    setSelectedPharmacy(null);
  };

  if (currentStep === 2) {
    return (
      <PharmacySelection 
        onPharmacySelect={handlePharmacySelect}
        onBack={() => setCurrentStep(1)}
      />
    );
  }

  if (currentStep === 3 && selectedPharmacy) {
    return (
      <LeadForm 
        pharmacy={selectedPharmacy}
        onComplete={handleFormComplete}
        onBack={() => setCurrentStep(2)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <DezSaudeLogo size="md" showPartnership={true} />
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2 text-blue-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">0800 123 4567</span>
              </div>
              <a 
                href="/admin" 
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Área Administrativa
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Proteção 24h em São Paulo
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Proteção completa para sua família em 
                <span className="text-blue-600"> São Paulo</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Plano de assistência médica de urgência e emergência 24h. Sua família protegida com o melhor atendimento médico na cidade de São Paulo e Grande SP.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Atendimento 24h</p>
                    <p className="text-sm text-gray-600">Emergências a qualquer hora</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">SP e Grande SP</p>
                    <p className="text-sm text-gray-600">Cobertura completa</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentStep(2)}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-lg"
                >
                  <span>Contratar Agora</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <div className="flex items-center space-x-2 text-gray-600">
                  <span className="text-sm">A partir de</span>
                  <span className="text-2xl font-bold text-green-600">R$ 59,90</span>
                  <span className="text-sm">/mês</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Profissional de saúde - Médico e enfermeira" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cobertura Exclusiva em São Paulo e Grande SP
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendimento especializado na região metropolitana de São Paulo
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Área de Atendimento</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">São Paulo Capital</h4>
                      <p className="text-blue-700 text-sm">Todas as regiões da capital paulista com tempo de resposta otimizado</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Grande São Paulo</h4>
                      <p className="text-green-700 text-sm">ABC, Guarulhos, Osasco, Barueri e principais cidades da região metropolitana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cidades Atendidas</h3>
                <p className="text-gray-600">Cobertura completa na região</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-900">São Paulo</p>
                  <p className="text-xs text-gray-600">Capital</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="font-semibold text-gray-900">ABC</p>
                  <p className="text-xs text-gray-600">Grande SP</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-4 w-4 text-purple-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Guarulhos</p>
                  <p className="text-xs text-gray-600">Grande SP</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Osasco</p>
                  <p className="text-xs text-gray-600">Grande SP</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Planos a partir de</span>
                  <span className="text-lg font-bold text-green-600">R$ 59,90</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Proteção de urgência e emergência 24h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preços Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Planos de Proteção Médica
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para sua família em São Paulo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plano Mensal */}
            <div className="bg-white rounded-2xl shadow-lg p-8 relative">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mensal</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">R$ 59,90</span>
                  <span className="text-gray-600 ml-2">/mês</span>
                </div>
                <div className="mt-2 px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium inline-block">
                  🔥 Oferta Mensal Especial
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">10% OFF no débito automático</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Atendimento 24h</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">40+ emergências cobertas</span>
                </li>
              </ul>

              <button 
                onClick={() => setCurrentStep(2)}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Contratar Agora
              </button>
            </div>

            {/* Plano Anual */}
            <div className="bg-white rounded-2xl shadow-lg p-8 relative border-2 border-green-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  20% OFF
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Anual</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">R$ 47,92</span>
                  <span className="text-gray-600 ml-2">/mês</span>
                </div>
                <p className="text-green-600 font-medium mt-1">Economize R$ 11,98</p>
                <div className="mt-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium inline-block">
                  🎯 Oferta Especial
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">+5% OFF no débito automático</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">💰 PIX disponível para pagamento à vista</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Todos os benefícios do plano mensal</span>
                </li>
              </ul>

              <button 
                onClick={() => setCurrentStep(2)}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Contratar Agora
              </button>
            </div>

            {/* Plano Bianual */}
            <div className="bg-white rounded-2xl shadow-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  40% OFF
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bianual</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">R$ 35,94</span>
                  <span className="text-gray-600 ml-2">/mês</span>
                </div>
                <p className="text-purple-600 font-medium mt-1">Economize R$ 23,96</p>
                <div className="mt-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium inline-block">
                  🎯 Oferta Especial
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">+5% OFF no débito automático</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">💰 PIX disponível para pagamento à vista</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Máxima economia</span>
                </li>
              </ul>

              <button 
                onClick={() => setCurrentStep(2)}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Contratar Agora
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-6 inline-block shadow-lg">
              <p className="text-gray-700 mb-2">💳 <strong>Plano Mensal:</strong> 10% OFF no débito automático</p>
              <p className="text-gray-700">💰 <strong>Planos Anuais:</strong> PIX disponível + 5% OFF no débito automático</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergências Cobertas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mais de 40 Emergências Cobertas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lista completa de situações de emergência atendidas pelo plano em São Paulo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Infarto agudo do miocárdio', 'Acidente vascular cerebral (AVC)', 'Crise hipertensiva', 'Crise asmática grave',
              'Convulsões', 'Traumatismo craniano', 'Fraturas expostas', 'Hemorragias graves',
              'Intoxicação aguda', 'Queimaduras graves', 'Cólica renal', 'Apendicite aguda',
              'Pneumonia grave', 'Edema agudo de pulmão', 'Choque anafilático', 'Desmaios e síncopes',
              'Dores torácicas intensas', 'Abdome agudo', 'Politraumatismo', 'Emergências obstétricas',
              'Crises diabéticas', 'Emergências psiquiátricas', 'Picadas de animais peçonhentos', 'Afogamento',
              'Parada cardiorrespiratória', 'Emergências pediátricas', 'Crise de pânico severa', 'Overdose medicamentosa',
              'Emergências geriátricas', 'Acidentes domésticos graves', 'Emergências neurológicas', 'Crises epilépticas',
              'Emergências urológicas', 'Emergências oftalmológicas', 'Emergências otorrinolaringológicas', 'Emergências dermatológicas graves',
              'Emergências ortopédicas', 'Emergências vasculares', 'Emergências respiratórias', 'Outras emergências médicas'
            ].map((emergencia, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{emergencia}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentStep(2)}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
            >
              Contratar Proteção Completa
            </button>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Não deixe sua família desprotegida em São Paulo
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contrate agora e tenha tranquilidade em qualquer emergência na capital e Grande SP
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Orientação 24h</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cobertura SP</h3>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Atendimento imediato</h3>
            </div>
          </div>

          <button 
            onClick={() => setCurrentStep(2)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Contratar Plano Dez Emergências</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Dez Saúde. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}