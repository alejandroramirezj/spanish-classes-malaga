'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaStar, FaInfoCircle, FaPlay, FaPause, FaImage } from 'react-icons/fa';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface SpanishExpressionProps {
  expression: string;
  literal: string;
  meaning: string;
}

const SpanishExpression = ({ expression, literal, meaning }: SpanishExpressionProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };
  
  return (
    <div className="relative inline-block group">
      <span 
        className="underline decoration-wavy decoration-accent decoration-2 cursor-pointer font-bold text-accent dark:text-accent-light flex items-center gap-1 hover:scale-105 transition-transform px-1 py-0.5 rounded bg-accent/5 hover:bg-accent/10"
        onClick={toggleTooltip}
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

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [useStaticImage, setUseStaticImage] = useState(true); // Para móviles y conexiones lentas
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingStartTime, setLoadingStartTime] = useState(0);
  
  // Verificar si el dispositivo es probablemente móvil
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Función para iniciar reproducción del video
  const playVideo = () => {
    if (videoRef.current) {
      console.log("Intentando reproducir video...");
      
      // Asegurar que el video esté configurado correctamente
      videoRef.current.loop = true;
      videoRef.current.muted = true;
      videoRef.current.playsInline = true;
      
      // Intentar reproducirlo
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("✅ Video reproducido con éxito");
            setIsPlaying(true);
            setVideoError(null);
          })
          .catch(error => {
            console.error("❌ Error al reproducir video:", error);
            setIsPlaying(false);
            setVideoError(`Error: ${error.message}`);
          });
      }
    } else {
      console.error("❌ Referencia de video no disponible");
    }
  };

  useEffect(() => {
    console.log("🎬 Componente Hero montado");
    
    // Iniciar temporizador para la carga
    setLoadingStartTime(Date.now());
    
    // Si estamos en móvil, usar imagen estática por defecto
    if (isMobile) {
      setUseStaticImage(true);
      return;
    }
    
    // Si la conexión es lenta (basado en el tipo de conexión si está disponible)
    interface NetworkInformation {
      effectiveType: string;
      downlink: number;
      rtt: number;
      saveData: boolean;
      onchange?: () => void;
    }

    // Verificar si la conexión es lenta
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    if (connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g')) {
      setUseStaticImage(true);
      return;
    }
    
    // Primer intento de reproducción al montar el componente
    if (videoRef.current) {
      // Configurar eventos para detectar problemas
      const handleError = (e: Event) => {
        console.error("❌ Error de video:", e);
        setVideoError(`Error al cargar el video. Por favor recarga la página.`);
        setVideoLoaded(false);
        setUseStaticImage(true); // Fallback a imagen estática
      };
      
      const handleLoadedMetadata = () => {
        console.log("📊 Metadata del video cargada");
        // No establecer videoLoaded aquí, esperar a loadeddata
      };
      
      const handleLoadedData = () => {
        console.log("📼 Datos del video cargados");
        const loadTime = ((Date.now() - loadingStartTime) / 1000).toFixed(2);
        console.log(`Video cargado en ${loadTime}s`);
        setVideoLoaded(true);
        playVideo();
      };
      
      const handleWaiting = () => {
        console.log("⏳ Video en espera (buffering)");
      };
      
      const handleProgress = () => {
        if (videoRef.current && videoRef.current.buffered.length > 0) {
          const bufferedEnd = videoRef.current.buffered.end(0);
          const duration = videoRef.current.duration;
          const progress = (bufferedEnd / duration) * 100;
          setLoadingProgress(Math.round(progress));
        }
      };
      
      const handleEnded = () => {
        console.log("🔄 Video terminado, debería repetirse automáticamente");
        // Comprobar si el loop está funcionando
        if (videoRef.current && !videoRef.current.loop) {
          console.log("🔁 Forzando reinicio del video");
          videoRef.current.currentTime = 0;
          playVideo();
        }
      };
      
      // Configurar un tiempo máximo de carga (10 segundos)
      const loadTimeout = setTimeout(() => {
        if (!videoLoaded) {
          console.log("⏱️ Tiempo de carga excedido, usando imagen estática");
          setUseStaticImage(true);
          setVideoError("La carga está tardando demasiado. Usando imagen estática.");
        }
      }, 10000);
      
      // Registrar eventos
      videoRef.current.addEventListener('error', handleError);
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      videoRef.current.addEventListener('waiting', handleWaiting);
      videoRef.current.addEventListener('progress', handleProgress);
      videoRef.current.addEventListener('ended', handleEnded);
      
      // Limpiar eventos al desmontar
      return () => {
        clearTimeout(loadTimeout);
        if (videoRef.current) {
          videoRef.current.removeEventListener('error', handleError);
          videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
          videoRef.current.removeEventListener('loadeddata', handleLoadedData);
          videoRef.current.removeEventListener('waiting', handleWaiting);
          videoRef.current.removeEventListener('progress', handleProgress);
          videoRef.current.removeEventListener('ended', handleEnded);
        }
      };
    }
  }, [isMobile, loadingStartTime]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        playVideo();
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  const toggleVideoMode = () => {
    setUseStaticImage(!useStaticImage);
    if (!useStaticImage) {
      // Si cambiamos a modo de imagen estática, pausar el video
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      // Si cambiamos a modo de video, intentar reproducirlo
      if (videoRef.current) {
        setVideoLoaded(false);
        videoRef.current.load();
        // Intentar reproducirlo después de un breve retraso
        setTimeout(() => {
          playVideo();
        }, 500);
      }
    }
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full filter blur-3xl opacity-30 dark:opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 dark:bg-accent/10 rounded-full filter blur-3xl opacity-30 dark:opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content - Text */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <span className="mr-2">🇪🇸</span> Unleash Your Spanish Potential
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Learn Spanish <span className="text-accent">Like a Native</span> in Sunny Málaga
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              From complete beginner to <SpanishExpression expression="hablar por los codos" literal="talking through your elbows" meaning="talking non-stop" /> fluency with personalized classes that will have you <SpanishExpression expression="hablando como un libro abierto" literal="speaking like an open book" meaning="speaking very eloquently" /> in no time!
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link 
                href="/booking" 
                className="btn-accent inline-flex items-center group"
              >
                Book Your Free Trial Class
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
                <span className="text-gray-600 dark:text-gray-300 font-medium ml-1">
                  5.0 on Google (8 reviews)
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center py-4"
            >
              <div className="p-4 glassmorphism dark:glassmorphism-dark rounded-lg transform transition-transform hover:scale-105">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-gray-600 dark:text-gray-300">Years Teaching</p>
              </div>
              <div className="p-4 glassmorphism dark:glassmorphism-dark rounded-lg transform transition-transform hover:scale-105">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-gray-600 dark:text-gray-300">Happy Students</p>
              </div>
              <div className="p-4 glassmorphism dark:glassmorphism-dark rounded-lg transform transition-transform hover:scale-105">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-gray-600 dark:text-gray-300">Countries</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right content - Video or Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl transform rotate-3"></div>
              <div className="glassmorphism dark:glassmorphism-dark rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white dark:bg-grid-dark"></div>
                
                {/* Contenido principal (video o imagen) */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {/* Imagen estática (visible por defecto o como fallback) */}
                  {useStaticImage && (
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                      <div className="w-full h-full relative bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden">
                        <Image 
                          src="/images/virginia-teaching.jpg" 
                          alt="Virginia teaching Spanish in Málaga" 
                          className="object-cover rounded-xl"
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      
                      {/* Botón para cambiar a video */}
                      <button
                        onClick={toggleVideoMode}
                        className="absolute bottom-4 right-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-accent/50 text-xs font-medium"
                      >
                        <FaPlay className="text-accent w-3 h-3 mr-1" />
                        <span className="text-accent">Ver video</span>
                      </button>
                    </div>
                  )}
                  
                  {/* Video (solo visible cuando useStaticImage es false) */}
                  {!useStaticImage && (
                    <>
                      {/* Mostrar spinner/progreso de carga si el video no está cargado */}
                      {!videoLoaded && !videoError && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl">
                          <div className="relative w-16 h-16 mb-4">
                            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-primary">
                              {loadingProgress}%
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Cargando video...</p>
                          <button
                            onClick={toggleVideoMode}
                            className="text-xs text-primary hover:text-primary-dark underline"
                          >
                            Usar imagen en lugar de video
                          </button>
                        </div>
                      )}
                      
                      {/* Mostrar mensaje de error si hay algún problema */}
                      {videoError && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 dark:bg-red-900/20 rounded-xl p-6 text-center">
                          <div className="text-red-500 text-4xl mb-4">⚠️</div>
                          <p className="text-red-700 dark:text-red-300 mb-2 font-bold">Error al cargar el video</p>
                          <p className="text-sm text-red-600 dark:text-red-400 mb-4">{videoError}</p>
                          <div className="flex space-x-3">
                            <button 
                              onClick={() => {
                                setVideoError(null);
                                setVideoLoaded(false);
                                if (videoRef.current) {
                                  videoRef.current.load();
                                  playVideo();
                                }
                              }}
                              className="px-3 py-1.5 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors text-sm"
                            >
                              Reintentar
                            </button>
                            <button
                              onClick={toggleVideoMode}
                              className="px-3 py-1.5 bg-white text-gray-800 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors text-sm"
                            >
                              Usar imagen
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* El video */}
                      <video 
                        ref={videoRef}
                        className="w-full h-full rounded-xl object-cover shadow-lg"
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        controlsList="nodownload nofullscreen noremoteplayback"
                        onLoadedData={() => setVideoLoaded(true)}
                        style={{ visibility: videoLoaded ? 'visible' : 'hidden' }}
                        poster="/images/virginia-teaching.jpg"
                      >
                        <source src="/videos/Video_virginia.mp4" type="video/mp4" />
                        <p>Tu navegador no soporta videos HTML5.</p>
                      </video>
                      
                      {/* Overlay con botón para control de video */}
                      {videoLoaded && !videoError && (
                        <div className="absolute bottom-4 right-4 z-10 flex space-x-2">
                          <button 
                            onClick={togglePlayPause}
                            className="w-10 h-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-accent/50"
                            aria-label={isPlaying ? "Pause video" : "Play video"}
                          >
                            {isPlaying ? (
                              <FaPause className="text-accent w-3.5 h-3.5" />
                            ) : (
                              <FaPlay className="text-accent w-3.5 h-3.5 ml-0.5" />
                            )}
                          </button>
                          <button
                            onClick={toggleVideoMode}
                            className="h-10 px-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-2 border-accent/50 text-xs"
                          >
                            <FaImage className="text-accent w-3.5 h-3.5 mr-1" />
                            <span className="text-accent">Ver imagen</span>
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>
                
                {/* Semi-transparent overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 md:mt-24 glassmorphism dark:glassmorphism-dark p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Why Students <SpanishExpression expression="flipan en colores" literal="flip in colors" meaning="are absolutely amazed" /> With Our Spanish Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/50 dark:bg-gray-800/50 p-5 rounded-lg neomorphism dark:neomorphism-dark transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-2xl mb-3">🗣️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Conversation-Focused</h3>
              <p className="text-gray-600 dark:text-gray-300">You&apos;ll be speaking Spanish from day one, not just studying grammar rules. Say goodbye to <SpanishExpression expression="quedarse en blanco" literal="staying blank" meaning="drawing a blank/freezing up" />!</p>
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 p-5 rounded-lg neomorphism dark:neomorphism-dark transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-2xl mb-3">👩‍🏫</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Personalized Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">Classes tailored to your needs, so you&apos;ll progress <SpanishExpression expression="a toda mecha" literal="at full wick" meaning="at full speed/very quickly" />.</p>
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 p-5 rounded-lg neomorphism dark:neomorphism-dark transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-2xl mb-3">🌞</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Cultural Immersion</h3>
              <p className="text-gray-600 dark:text-gray-300">Experience Spanish culture firsthand in the beautiful city of Málaga and soon you&apos;ll be <SpanishExpression expression="como pez en el agua" literal="like a fish in water" meaning="completely comfortable/in your element" />.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 