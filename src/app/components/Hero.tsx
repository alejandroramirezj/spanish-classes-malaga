'use client';

import { motion } from 'framer-motion';
import { FaInfoCircle, FaGraduationCap, FaUsers, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

interface SpanishExpressionProps {
  expression: string;
  literal: string;
  meaning: string;
}

// Componente para mostrar expresiones españolas con tooltip
const SpanishExpression = ({ expression, literal, meaning }: SpanishExpressionProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="relative inline-block group">
      <span 
        className="underline decoration-wavy decoration-accent decoration-2 cursor-pointer font-bold text-accent dark:text-accent-light flex items-center gap-1 hover:scale-105 transition-transform px-1 py-0.5 rounded bg-accent/5 hover:bg-accent/10"
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {expression}
        <FaInfoCircle className="text-xs text-accent animate-pulse group-hover:animate-none" />
      </span>
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 glassmorphism dark:glassmorphism-dark rounded-xl shadow-lg text-sm z-50 border border-accent/20"
        >
          <div className="relative">
            <p className="font-bold text-accent dark:text-accent-light">{expression}</p>
            <p className="text-gray-500 italic">Literal: &ldquo;{literal}&rdquo;</p>
            <p className="text-gray-700 dark:text-gray-300">Really means: &ldquo;{meaning}&rdquo;</p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute -top-1 -right-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Datos de expresiones españolas para el juego
const spanishExpressions = [
  { expression: "hacer de tripas corazón", literal: "to make heart from guts", meaning: "to pluck up courage" },
  { expression: "estar como una cabra", literal: "to be like a goat", meaning: "to be crazy" },
  { expression: "ser pan comido", literal: "to be eaten bread", meaning: "to be a piece of cake" },
  { expression: "dar en el clavo", literal: "to hit the nail", meaning: "to hit the nail on the head" },
  { expression: "ponerse las pilas", literal: "to put in the batteries", meaning: "to get one's act together" },
  { expression: "tomar el pelo", literal: "to take the hair", meaning: "to pull someone's leg" }
];

// Interface for YouTube API
interface YouTubePlayerEvent {
  target: YouTubePlayer;
  data?: number;
}

interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number) => void;
  destroy: () => void;
  getPlayerState: () => number;
}

interface YouTubePlayerOptions {
  videoId: string;
  playerVars: Record<string, string | number | boolean>;
  events: {
    onReady?: (event: YouTubePlayerEvent) => void;
    onStateChange?: (event: YouTubePlayerEvent) => void;
    onError?: (event: YouTubePlayerEvent) => void;
  };
}

// Global type declaration for YouTube API
declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string,
        options: YouTubePlayerOptions
      ) => YouTubePlayer;
      PlayerState: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
        BUFFERING: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentExpressionIndex, setCurrentExpressionIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(true);
  
  const youtubePlayerRef = useRef<YouTubePlayer | null>(null);
  
  // Load YouTube API and initialize player
  useEffect(() => {
    // Function to initialize YouTube player
    const initYouTubePlayer = () => {
      if (typeof window !== 'undefined' && window.YT && window.YT.Player) {
        youtubePlayerRef.current = new window.YT.Player('youtube-player', {
          videoId: 'FnaMiX7lOwM', // Reemplaza con tu ID de video real
          playerVars: {
            autoplay: 1, // Reproducción automática activada
            controls: 1,
            rel: 0,
            showinfo: 0,
            mute: 1, // Silenciado para permitir autoplay en navegadores
            modestbranding: 1,
            start: 39, // Comienza en el segundo 39
            end: 120, // Termina en el segundo 120 (2:00)
            loop: 1, // Reproducción en bucle
            playlist: 'FnaMiX7lOwM' // Necesario para el loop, mismo ID que el video
          },
          events: {
            onReady: (event) => {
              // Reproducir automáticamente cuando esté listo
              event.target.playVideo();
            },
            onStateChange: (event) => {
              // Si el video termina, reiniciarlo desde el segundo 39
              if (window.YT && event.data === window.YT.PlayerState.ENDED) {
                event.target.seekTo(39);
                event.target.playVideo();
              }
            }
          }
        });
      }
    };

    // Load YouTube API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      
      window.onYouTubeIframeAPIReady = initYouTubePlayer;
      
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    } else {
      initYouTubePlayer();
    }

    return () => {
      if (youtubePlayerRef.current) {
        youtubePlayerRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
    
    // Cambiar expresión cada 5 segundos
    const intervalId = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentExpressionIndex((prev) => (prev + 1) % spanishExpressions.length);
        setIsChanging(false);
      }, 300);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  const playVideo = () => {
    if (youtubePlayerRef.current) {
      setShowVideoModal(true);
      youtubePlayerRef.current.seekTo(39);
      youtubePlayerRef.current.playVideo();
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Fondo sutil con patrón */}
      <div className="absolute inset-0 bg-gray-50 pattern-dots opacity-5 z-0"></div>
      
      {/* Efectos de iluminación sutiles */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-[80px] z-0"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/10 blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Texto principal con mejor contraste */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            {/* Badge premium */}
            <div className="inline-flex items-center mb-6 bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-bold">
              <span className="mr-2 text-accent">✓</span>
              Trusted by over 1,000 students worldwide
            </div>
            
            {/* Título principal con mejor legibilidad */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-6">
              Learn Spanish <span className="relative inline-block">
                <span className="relative z-10 text-primary">Like a Native</span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9C118.957 4.47226 242.456 -1.86658 355 9" stroke="#FFB930" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
              <br />
              <span className="text-accent">From Week One</span>
            </h1>
            
            {/* Subtítulo con propuesta de valor */}
            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
              Tired of studying Spanish without being able to actually speak it? I&apos;ll teach you to communicate from day one, not just memorize grammar rules.
              As we say in Spain, <SpanishExpression expression="más vale tarde que nunca" literal="better late than never" meaning="it&apos;s never too late to start" />.
            </p>

            {/* Lista de beneficios */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <div>
                  <strong>Real-world practice:</strong> Order your first &ldquo;tinto de verano&rdquo; like a local, ask for the menu, and chat with waiters confidently.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <div>
                  <strong>Relaxed environment:</strong> Make mistakes without fear - that&apos;s how we learn! Don&apos;t worry about <SpanishExpression expression="meter la pata" literal="putting in the leg" meaning="making mistakes" />.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <div>
                  <strong>Cultural immersion:</strong> Experience Málaga&apos;s culture while learning. You&apos;ll be <SpanishExpression expression="de cine" literal="like in the movies" meaning="amazing" /> at Spanish in no time!
                </div>
              </li>
            </ul>

            {/* CTA principal con botones */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/booking" 
                className="btn-plan btn-plan-primary"
              >
                Book Your Free Trial Class
                <FaArrowRight />
              </Link>
              
              <Link 
                href="/about" 
                className="btn-plan btn-plan-secondary"
              >
                Meet Virginia
                <FaArrowRight />
              </Link>
            </div>

            {/* Credenciales simplificadas */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <div className="stat-item text-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                <FaGraduationCap className="text-primary text-2xl mb-2 mx-auto" />
                <p className="text-lg font-bold text-gray-900">Master in ELE & DELE</p>
                <p className="text-gray-600">Certified Teacher</p>
              </div>
              
              <div className="stat-item text-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                <FaUsers className="text-primary text-2xl mb-2 mx-auto" />
                <p className="text-lg font-bold text-gray-900">+500 Students</p>
                <p className="text-gray-600">Happy Learners</p>
              </div>
            </div>
          </motion.div>
          
          {/* Columna derecha - Video y juego de expresiones */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Video reproductor automático */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-video bg-gray-100">
              {/* Reproductor de YouTube siempre visible */}
              <div className="w-full h-full flex items-center justify-center relative">
                <div id="youtube-player" className="absolute inset-0 w-full h-full"></div>
                
                {/* Overlay informativo */}
                {!showVideoModal && (
                  <div className="absolute inset-0 bg-gray-800/70 flex items-center justify-center z-10">
                    <button 
                      onClick={playVideo}
                      className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-xl transform transition hover:scale-110 hover:bg-accent-light"
                    >
                      <FaArrowRight className="text-white ml-1 text-xl" />
                    </button>
                    <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold bg-black/60 backdrop-blur-sm p-3 rounded-lg">
                      &ldquo;Discover how my students start speaking Spanish from their very first week&rdquo; - Virginia
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Juego de expresiones destacado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative p-6 shadow-lg rounded-2xl bg-white border border-gray-200"
            >
              <div className="absolute top-4 right-4 bg-accent/10 text-accent rounded-full px-3 py-1 text-sm font-bold border border-accent/20">
                Expression #{ currentExpressionIndex + 1 }
              </div>
              <h3 className="text-xl font-bold mb-6 text-gray-900">Fun Spanish Expressions</h3>
              <div className={`transition-opacity duration-300 ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
                <SpanishExpression 
                  expression={spanishExpressions[currentExpressionIndex].expression}
                  literal={spanishExpressions[currentExpressionIndex].literal}
                  meaning={spanishExpressions[currentExpressionIndex].meaning}
                />
              </div>
              <div className="mt-6 flex justify-between items-center">
                <button 
                  onClick={() => {
                    setIsChanging(true);
                    setTimeout(() => {
                      setCurrentExpressionIndex((prev) => 
                        prev === 0 ? spanishExpressions.length - 1 : prev - 1
                      );
                      setIsChanging(false);
                    }, 300);
                  }}
                  className="text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  Previous
                </button>
                <div className="flex space-x-1">
                  {spanishExpressions.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => {
                        if (index !== currentExpressionIndex) {
                          setIsChanging(true);
                          setTimeout(() => {
                            setCurrentExpressionIndex(index);
                            setIsChanging(false);
                          }, 300);
                        }
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentExpressionIndex ? 'bg-accent w-6' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Expression ${index + 1}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => {
                    setIsChanging(true);
                    setTimeout(() => {
                      setCurrentExpressionIndex((prev) => (prev + 1) % spanishExpressions.length);
                      setIsChanging(false);
                    }, 300);
                  }}
                  className="text-primary hover:text-primary-dark transition-colors font-semibold"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Botón flotante para móviles */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Link 
          href="/booking" 
          className="btn-plan btn-plan-primary"
        >
          Free Trial <FaArrowRight />
        </Link>
      </div>
      
      {/* Ondas decorativas en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-100"></path>
        </svg>
      </div>
    </section>
  );
} 