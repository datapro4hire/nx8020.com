// Language translations (Traducciones de idioma)
const translations = {
  en: {
    'demo': 'Try Demo',
    'waitlist': 'Join Waitlist',
    'contact': 'Contact',
    'hero-title': 'Discover the 20% of Processes That Generate 80% of Your Profits',
    'hero-subtitle': 'Identify and optimize the critical processes that drive most of your profits. Natural AI conversation, no technical expertise required.',
    'try-demo': 'Discover My Critical Processes',
    'join-waitlist': 'Join Waitlist',
    'value-props-title': 'From Operational Noise to Processes That Matter',
    'prop1-title': 'Critical Process Identification',
    'prop1-desc': 'Automatically discover which processes generate most of your profits using the Pareto Principle applied to your operations.',
    'prop2-title': 'Intelligent Conversational Analysis',
    'prop2-desc': 'Ask naturally: "Which processes make the most money?" Get precise answers about your most profitable processes.',
    'prop3-title': 'Financial Impact Focus',
    'prop3-desc': 'Stop optimizing everything. Concentrate resources on processes that actually move the profitability needle.',
    'copilot-title': 'Your AI Operational Profitability Analyst',
    'copilot-desc': 'Experience the future of profitable process analysis. Our AI automatically identifies your most valuable processes and tells you exactly where to focus optimization efforts.',
    'feature1': 'Process Profitability Analysis',
    'feature2': 'Automatic Critical 20% Identification',
    'feature3': 'ROI-Prioritized Recommendations',
    'try-live-demo': 'Discover My Most Profitable Processes',
    'process-title': 'See Your Most Profitable Processes Like Never Before',
    'before-title': 'Before NX8020™',
    'before-desc': 'Scattered effort across all processes without knowing which generate more profits',
    'after-title': 'After NX8020™',
    'after-desc': 'Laser focus on processes that truly drive profitability',
    'waitlist-title': 'Get Early Access to NX8020™',
    'waitlist-desc': 'Join 150+ operations leaders already on the waitlist. Be among the first to discover your most profitable processes.',
    'name-label': 'Full Name',
    'email-label': 'Work Email',
    'get-access': 'Get Early Access',
    'contact-title': 'Have Questions? Let\'s Talk',
    'contact-desc': 'Connect with our team to learn how NX8020™ can identify your most profitable processes.',
    'whatsapp-btn': 'Chat on WhatsApp',
    'footer-tagline': 'Focus on What Matters',
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Service',
    'copyright': '© 2024 NX8020™. All rights reserved.',
    'demo-modal-title': 'NX8020™ Demo',
    'demo-ready': 'Ready to analyze your most profitable processes...',
    'try-asking': 'Try asking:',
    'suggestion1': '"Which processes generate the most profits?"',
    'suggestion2': '"Where should I focus my resources?"',
    'suggestion3': '"What optimization would have the highest ROI?"',
    'browser-warning': 'Voice recognition is not supported in your browser. Please try Chrome or Edge for the full experience.',
    'form-success': 'Thank you! You\'ve been added to our waitlist. We\'ll be in touch soon.',
    'form-error-email': 'Please enter a valid email address.',
    'form-error-exists': 'This email is already on our waitlist.',
    'form-error-general': 'Something went wrong. Please try again.',
    'listening': 'Listening...',
    'processing': 'Processing...',
    'demo-profitable-response': 'Based on your operational data analysis, I can see that your order fulfillment and customer onboarding processes generate 78% of your total profits while representing only 22% of your operational activities. Your order fulfillment process alone contributes $2.3M annually, with an average profit margin of 34%. I recommend focusing optimization efforts on these two critical processes first, as a 15% improvement here would generate $400K additional annual profit - more than optimizing all other processes combined.',
    'demo-critical-response': 'Your critical 20% consists of three key processes: 1) Premium customer order processing (45% of profits), 2) High-value client onboarding (23% of profits), and 3) Express delivery fulfillment (10% of profits). These processes have the highest profit-per-transaction ratios and shortest optimization cycles. I recommend allocating 80% of your improvement resources to these areas. Current bottlenecks in premium order processing alone are costing you $180K monthly in lost efficiency.',
    'demo-roi-response': 'The highest ROI optimization opportunity is in your premium order processing workflow. Current analysis shows a 3.2-day average processing time with 40% of delays in approval stages. Implementing automated approval rules for orders under $5,000 and streamlining the premium customer verification process would cost approximately $85K to implement but generate $520K in annual profit improvements - a 612% ROI. This single optimization would impact 45% of your total profit generation.',
    'demo-fallback': 'I\'m currently trained on profitability analysis scenarios. Try asking about "most profitable processes", "where to focus resources", or "highest ROI optimizations" to see how I can help identify your critical profit-driving processes.'
  },
  es: {
    'demo': 'Probar Demo',
    'waitlist': 'Lista de Espera',
    'contact': 'Contacto',
    'hero-title': 'Descubre el 20% de Procesos que Generan el 80% de tus Ganancias',
    'hero-subtitle': 'Identifica y optimiza los procesos críticos que impulsan la mayoría de tus ganancias. Conversación natural con IA, sin experiencia técnica requerida.',
    'try-demo': 'Descubrir Mis Procesos Críticos',
    'join-waitlist': 'Unirse a Lista de Espera',
    'value-props-title': 'Del Ruido Operacional a los Procesos que Importan',
    'prop1-title': 'Identificación de Procesos Críticos',
    'prop1-desc': 'Descubre automáticamente cuáles procesos generan la mayoría de tus ganancias usando el Principio de Pareto aplicado a tus operaciones.',
    'prop2-title': 'Análisis Conversacional Inteligente',
    'prop2-desc': 'Pregunta naturalmente: "¿Cuáles procesos generan más dinero?" Obtén respuestas precisas sobre tus procesos más rentables.',
    'prop3-title': 'Enfoque en Impacto Financiero',
    'prop3-desc': 'Deja de optimizar todo. Concentra recursos en los procesos que realmente mueven la aguja de rentabilidad.',
    'copilot-title': 'Tu Analista de Rentabilidad Operacional IA',
    'copilot-desc': 'Experimenta el futuro del análisis de procesos rentables. Nuestra IA identifica automáticamente tus procesos más valiosos y te dice exactamente dónde enfocar tus esfuerzos de optimización.',
    'feature1': 'Análisis de Rentabilidad por Proceso',
    'feature2': 'Identificación Automática del 20% Crítico',
    'feature3': 'Recomendaciones Priorizadas por ROI',
    'try-live-demo': 'Descubrir Mis Procesos Más Rentables',
    'process-title': 'Ve Tus Procesos Más Rentables Como Nunca Antes',
    'before-title': 'Antes de NX8020™',
    'before-desc': 'Esfuerzo disperso en todos los procesos sin saber cuáles generan más ganancias',
    'after-title': 'Después de NX8020™',
    'after-desc': 'Enfoque láser en los procesos que realmente impulsan la rentabilidad',
    'waitlist-title': 'Obtén Acceso Temprano a NX8020™',
    'waitlist-desc': 'Únete a más de 150 líderes de operaciones que ya están en la lista de espera. Sé de los primeros en descubrir tus procesos más rentables.',
    'name-label': 'Nombre Completo',
    'email-label': 'Email de Trabajo',
    'get-access': 'Obtener Acceso Temprano',
    'contact-title': '¿Tienes Preguntas? Hablemos',
    'contact-desc': 'Conecta con nuestro equipo para aprender cómo NX8020™ puede identificar tus procesos más rentables.',
    'whatsapp-btn': 'Chatear en WhatsApp',
    'footer-tagline': 'Enfoque en lo que Importa',
    'privacy': 'Política de Privacidad',
    'terms': 'Términos de Servicio',
    'copyright': '© 2024 NX8020™. Todos los derechos reservados.',
    'demo-modal-title': 'Demo de NX8020™',
    'demo-ready': 'Listo para analizar tus procesos más rentables...',
    'try-asking': 'Intenta preguntar:',
    'suggestion1': '"¿Cuáles procesos generan más ganancias?"',
    'suggestion2': '"¿Dónde debo enfocar mis recursos?"',
    'suggestion3': '"¿Qué optimización tendría mayor ROI?"',
    'browser-warning': 'El reconocimiento de voz no es compatible con tu navegador (browser). Prueba Chrome o Edge para la experiencia completa.',
    'form-success': '¡Gracias! Has sido agregado a nuestra lista de espera. Nos pondremos en contacto pronto.',
    'form-error-email': 'Por favor ingresa una dirección de email válida.',
    'form-error-exists': 'Este email ya está en nuestra lista de espera.',
    'form-error-general': 'Algo salió mal. Por favor intenta de nuevo.',
    'listening': 'Escuchando...',
    'processing': 'Procesando...',
    'demo-profitable-response': 'Basado en el análisis de tus datos operacionales, puedo ver que tus procesos de cumplimiento de pedidos (order fulfillment) e incorporación de clientes (customer onboarding) generan el 78% de tus ganancias totales mientras representan solo el 22% de tus actividades operacionales. Tu proceso de cumplimiento de pedidos solo contribuye $2.3M anuales, con un margen de ganancia promedio del 34%. Recomiendo enfocar los esfuerzos de optimización en estos dos procesos críticos primero, ya que una mejora del 15% aquí generaría $400K de ganancia anual adicional - más que optimizar todos los otros procesos combinados.',
    'demo-critical-response': 'Tu 20% crítico consiste en tres procesos clave: 1) Procesamiento de pedidos de clientes premium (45% de ganancias), 2) Incorporación (onboarding) de clientes de alto valor (23% de ganancias), y 3) Cumplimiento de entregas express (10% de ganancias). Estos procesos tienen las ratios más altas de ganancia-por-transacción y los ciclos de optimización más cortos. Recomiendo asignar el 80% de tus recursos de mejora a estas áreas. Los cuellos de botella (bottlenecks) actuales solo en el procesamiento de pedidos premium te están costando $180K mensuales en eficiencia perdida.',
    'demo-roi-response': 'La oportunidad de optimización con mayor ROI está en tu flujo de trabajo (workflow) de procesamiento de pedidos premium. El análisis actual muestra un tiempo promedio de procesamiento de 3.2 días con 40% de retrasos en etapas de aprobación. Implementar reglas de aprobación automática para pedidos menores a $5,000 y optimizar el proceso de verificación de clientes premium costaría aproximadamente $85K implementar pero generaría $520K en mejoras de ganancia anual - un ROI del 612%. Esta sola optimización impactaría el 45% de tu generación total de ganancias.',
    'demo-fallback': 'Actualmente estoy entrenado en escenarios de análisis de rentabilidad. Intenta preguntar sobre "procesos más rentables", "dónde enfocar recursos", o "optimizaciones de mayor ROI" para ver cómo puedo ayudar a identificar tus procesos críticos generadores de ganancias.'
  }
};

// Global state (Estado global)
let currentLanguage = 'es'; // Default to Spanish
let recognition = null;
let isListening = false;
let speechSynthesis = window.speechSynthesis;

// Initialize the application (Inicializar la aplicación)
document.addEventListener('DOMContentLoaded', function() {
  initializeLanguageToggle();
  initializeModal();
  initializeForm();
  initializeSpeechRecognition();
  initializeSmoothScrolling();
  
  // Set initial language to Spanish
  updateLanguage(currentLanguage);
  updateActiveLanguageButton(currentLanguage);
});

// Language functionality (Funcionalidad de idioma)
function initializeLanguageToggle() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.dataset.lang;
      if (lang !== currentLanguage) {
        updateLanguage(lang);
        updateActiveLanguageButton(lang);
      }
    });
  });
}

function updateLanguage(lang) {
  currentLanguage = lang;
  const elements = document.querySelectorAll('[data-text]');
  
  elements.forEach(element => {
    const key = element.dataset.text;
    if (translations[lang] && translations[lang][key]) {
      if (element.tagName === 'INPUT') {
        element.placeholder = translations[lang][key];
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

function updateActiveLanguageButton(lang) {
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Modal functionality (Funcionalidad del modal)
function initializeModal() {
  const modal = document.getElementById('demo-modal');
  const openButtons = document.querySelectorAll('#try-demo-btn, #demo-trigger');
  const closeButton = document.getElementById('modal-close');
  
  openButtons.forEach(button => {
    button.addEventListener('click', openModal);
  });
  
  closeButton.addEventListener('click', closeModal);
  
  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal() {
  const modal = document.getElementById('demo-modal');
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  
  // Focus management for accessibility
  const firstFocusable = modal.querySelector('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (firstFocusable) {
    firstFocusable.focus();
  }
  
  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('demo-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  
  // Stop any ongoing speech recognition
  if (recognition && isListening) {
    recognition.stop();
  }
  
  // Reset demo state
  resetDemoState();
  
  // Restore body scroll
  document.body.style.overflow = '';
}

// Form functionality (Funcionalidad del formulario)
function initializeForm() {
  const form = document.getElementById('waitlist-form');
  const feedback = document.getElementById('form-feedback');
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    
    // Basic validation (Validación básica)
    if (!name || !email) {
      showFormFeedback('error', translations[currentLanguage]['form-error-general']);
      return;
    }
    
    if (!isValidEmail(email)) {
      showFormFeedback('error', translations[currentLanguage]['form-error-email']);
      return;
    }
    
    // Submit to Flask backend (Enviar al backend Flask)
    try {
      const success = await submitToWaitlist(name, email);
      
      if (success) {
        showFormFeedback('success', translations[currentLanguage]['form-success']);
        form.reset();
        
        // Log successful conversion (Registrar conversión exitosa)
        logEvent('waitlist_signup', { language: currentLanguage, product: 'NX8020' });
      } else {
        showFormFeedback('error', translations[currentLanguage]['form-error-exists']);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showFormFeedback('error', translations[currentLanguage]['form-error-general']);
    }
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showFormFeedback(type, message) {
  const feedback = document.getElementById('form-feedback');
  feedback.className = `form-feedback ${type}`;
  feedback.textContent = message;
  feedback.style.display = 'block';
  
  // Auto-hide after 5 seconds
  setTimeout(() => {
    feedback.style.display = 'none';
  }, 5000);
}

// Flask backend submission (Envío al backend Flask)
async function submitToWaitlist(name, email) {
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        language: currentLanguage
      })
    });
    
    const data = await response.json();
    
    if (response.ok && data.success) {
      return true;
    } else if (response.status === 409) {
      // Email already exists
      return false;
    } else {
      throw new Error(data.error || 'Server error');
    }
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// Speech recognition functionality (Funcionalidad de reconocimiento de voz)
function initializeSpeechRecognition() {
  // Check browser compatibility (Verificar compatibilidad del navegador)
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    document.getElementById('browser-warning').style.display = 'block';
    return;
  }
  
  // Initialize speech recognition (Inicializar reconocimiento de voz)
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = currentLanguage === 'es' ? 'es-MX' : 'en-US';
  
  recognition.onstart = function() {
    isListening = true;
    updateDemoStatus('listening');
    updateMicButton('listening');
  };
  
  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript.toLowerCase();
    processSpeechInput(transcript);
  };
  
  recognition.onerror = function(event) {
    console.error('Speech recognition error (Error de reconocimiento de voz):', event.error);
    resetDemoState();
  };
  
  recognition.onend = function() {
    isListening = false;
    if (document.getElementById('demo-modal').classList.contains('active')) {
      updateDemoStatus('demo-ready');
      updateMicButton('ready');
    }
  };
  
  // Initialize microphone button (Inicializar botón del micrófono)
  const micButton = document.getElementById('mic-button');
  micButton.addEventListener('click', toggleListening);
  
  // Initialize suggestion buttons (Inicializar botones de sugerencias)
  const suggestionButtons = document.querySelectorAll('.suggestion-btn');
  suggestionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const question = this.dataset.question;
      processSpeechInput(question);
    });
  });
}

function toggleListening() {
  if (!recognition) return;
  
  if (isListening) {
    recognition.stop();
  } else {
    // Update recognition language based on current language
    recognition.lang = currentLanguage === 'es' ? 'es-MX' : 'en-US';
    recognition.start();
  }
}

function processSpeechInput(input) {
  updateDemoStatus('processing');
  updateMicButton('processing');
  
  // Simulate processing delay (Simular retraso de procesamiento)
  setTimeout(() => {
    const response = generateAIResponse(input);
    displayResponse(response);
    
    // Log interaction for analytics (Registrar interacción para análisis)
    logDemoInteraction(input, response.type);
  }, 1500);
}

function generateAIResponse(input) {
  const lowerInput = input.toLowerCase();
  
  // Check for profitability-related keywords
  if (lowerInput.includes('profitable') || lowerInput.includes('rentable') || lowerInput.includes('profit') || lowerInput.includes('ganancia') || lowerInput.includes('money') || lowerInput.includes('dinero')) {
    return {
      type: 'profitable',
      text: translations[currentLanguage]['demo-profitable-response']
    };
  }
  
  // Check for critical/focus-related keywords
  if (lowerInput.includes('critical') || lowerInput.includes('crítico') || lowerInput.includes('focus') || lowerInput.includes('enfocar') || lowerInput.includes('resources') || lowerInput.includes('recursos')) {
    return {
      type: 'critical',
      text: translations[currentLanguage]['demo-critical-response']
    };
  }
  
  // Check for ROI-related keywords
  if (lowerInput.includes('roi') || lowerInput.includes('return') || lowerInput.includes('optimization') || lowerInput.includes('optimización') || lowerInput.includes('investment') || lowerInput.includes('inversión')) {
    return {
      type: 'roi',
      text: translations[currentLanguage]['demo-roi-response']
    };
  }
  
  // Fallback response (Respuesta de respaldo)
  return {
    type: 'fallback',
    text: translations[currentLanguage]['demo-fallback']
  };
}

function displayResponse(response) {
  const responseDiv = document.getElementById('demo-response');
  responseDiv.textContent = response.text;
  responseDiv.classList.add('active');
  
  // Speak the response (Hablar la respuesta)
  if (speechSynthesis) {
    const utterance = new SpeechSynthesisUtterance(response.text);
    utterance.lang = currentLanguage === 'es' ? 'es-MX' : 'en-US';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  }
  
  resetDemoState();
}

function updateDemoStatus(status) {
  const statusElement = document.getElementById('demo-status');
  const statusText = translations[currentLanguage][status] || translations[currentLanguage]['demo-ready'];
  statusElement.textContent = statusText;
}

function updateMicButton(state) {
  const micButton = document.getElementById('mic-button');
  const micStatus = document.getElementById('mic-status');
  
  micButton.className = `mic-button ${state}`;
  
  switch (state) {
    case 'listening':
      micStatus.textContent = translations[currentLanguage]['listening'];
      break;
    case 'processing':
      micStatus.textContent = translations[currentLanguage]['processing'];
      break;
    default:
      micStatus.textContent = '';
  }
}

function resetDemoState() {
  updateDemoStatus('demo-ready');
  updateMicButton('ready');
  isListening = false;
}

// Analytics and logging (Análisis y registro)
function logEvent(eventName, properties = {}) {
  console.log('Event (Evento):', eventName, properties);
  
  // In production, send to analytics service
  // En producción, enviar al servicio de análisis
}

function logDemoInteraction(input, responseType) {
  console.log('Demo interaction (Interacción de demo):', { input, responseType, language: currentLanguage, product: 'NX8020' });
  
  // Send to Flask backend for tracking (Enviar al backend Flask para seguimiento)
  fetch('/api/demo-interaction', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      input: input,
      response_type: responseType,
      language: currentLanguage,
      session_id: getSessionId()
    })
  }).catch(error => {
    console.error('Failed to log demo interaction:', error);
  });
  
  // Log event for analytics (Registrar evento para análisis)
  logEvent('demo_interaction', {
    response_type: responseType,
    language: currentLanguage,
    product: 'NX8020'
  });
}

function getSessionId() {
  let sessionId = sessionStorage.getItem('nx8020_session');
  if (!sessionId) {
    sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('nx8020_session', sessionId);
  }
  return sessionId;
}

// Smooth scrolling for navigation links (Desplazamiento suave para enlaces de navegación)
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Intersection Observer for animations (Observer de intersección para animaciones)
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate on scroll
  const animateElements = document.querySelectorAll('.prop-card, .before, .after');
  animateElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeScrollAnimations);

// Performance monitoring (Monitoreo de rendimiento)
function measurePageLoad() {
  window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log('Page load time (Tiempo de carga de página):', loadTime + 'ms');
    
    // Log performance metric (Registrar métrica de rendimiento)
    logEvent('page_load', {
      load_time: Math.round(loadTime),
      language: currentLanguage,
      product: 'NX8020'
    });
  });
}

measurePageLoad();

// Error handling (Manejo de errores)
window.addEventListener('error', function(e) {
  console.error('JavaScript error (Error de JavaScript):', e.error);
  
  // Log error for monitoring (Registrar error para monitoreo)
  logEvent('javascript_error', {
    message: e.message,
    filename: e.filename,
    line: e.lineno,
    language: currentLanguage,
    product: 'NX8020'
  });
});

// Service worker registration (Registro de service worker)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Uncomment when service worker is implemented
    // navigator.serviceWorker.register('/sw.js')
    //   .then(registration => console.log('SW registered'))
    //   .catch(error => console.log('SW registration failed'));
  });
}