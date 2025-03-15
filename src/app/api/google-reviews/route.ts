import { NextResponse } from 'next/server';

// Usando reseñas reales proporcionadas por el usuario
export async function GET() {
  try {
    // Simulamos una pequeña demora como lo haría una API real
    await new Promise(resolve => setTimeout(resolve, 500));

    // Datos basados en las reseñas reales proporcionadas
    const googleReviewsData = {
      rating: 5.0,
      total: 8, // Total de reseñas proporcionadas
      reviews: [
        {
          id: '1',
          author_name: 'Ahyeon Hwang',
          profile_photo_url: '/placeholder-profile.jpg',
          rating: 5,
          text: 'Hola a todos!! Vengo aqui para informarselo a mi encantadora profesora, mama (en malaga) y amiga!!! Ella es realmente una gran profesora de espanol. Mi espafiol esta mejorando a un ritmo sorprendente. A diferencia de otras academias en Malaga, nuestro tiempo es como una obra de teatro, una fiesta y una clase. Simplemente no puedo evitar recomendar esta escuela a todas las personas que quieran aprender espafiol. Con ella, cada mafiana podras empezar con risas y sentirte fresco.',
          time: Date.now() - 189216000000, // 6 años en milisegundos
          relative_time_description: 'Hace 6 años'
        },
        {
          id: '2',
          author_name: 'Norman Nemitz',
          profile_photo_url: '/placeholder-profile.jpg',
          rating: 5,
          text: 'Virginia es una profesora fantastica y recomiendo encarecidamente su escuela de idiomas. Sin conocimientos previos, con la ayuda de Virginia, aprendi los conceptos basicos de este hermoso idioma en unas pocas semanas y me diverti mucho haciéndolo. Ademas de los conceptos basicos de gramatica, lo principal es hablar el idioma con confianza y ahora puedo afirmar que puedo comunicarme sobre casi cualquier tema.',
          time: Date.now() - 189216000000, // 6 años en milisegundos
          relative_time_description: 'Hace 6 años'
        },
        {
          id: '3',
          author_name: 'Michael Rafi',
          profile_photo_url: '/placeholder-profile.jpg',
          rating: 5,
          text: 'Recomiendo ALTAMENTE Virginia y esta escuela. Tomé clases privadas durante 2 horas al dia, 4 dias a la semana durante los dos meses que estuve visitando Malaga. Virginia adapto las clases exactamente a lo que necesitaba y fue de GRAN ayuda. Cada dia tomabamos un café juntos y hablabamos durante aproximadamente una hora, y luego, en la segunda hora, pasabamos a algunas lecciones del libro de trabajo. iVirginia es una persona maravillosa y realmente disfruté mi tiempo en la escuela! 5 estrellas!!',
          time: Date.now() - 157680000000, // 5 años en milisegundos
          relative_time_description: 'Hace 5 años'
        },
        {
          id: '4',
          author_name: 'Steve Noyce',
          profile_photo_url: '/placeholder-profile.jpg',
          rating: 5,
          text: 'Mi esposa y yo tomamos clases de conversacién durante varias semanas este invierno con Virginia. Ella fue absolutamente fantastica. Realmente disfrutamos nuestro tiempo con ella y nos encantd escuchar sus historias. Es una mujer maravillosa con un sentido del humor estupendo y las horas hablando con ella pasaron muy rapido. Cuando volvamos a Malaga, sin duda volveremos a tomar clases con ella.',
          time: Date.now() - 126144000000, // 4 años en milisegundos
          relative_time_description: 'Hace 4 años'
        },
        {
          id: '5',
          author_name: 'Ruta Z.',
          profile_photo_url: '/placeholder-profile.jpg',
          rating: 5,
          text: 'Virginia es una maestra increible, amigable, atenta y ensefia desde el fondo de su corazon. Mis lecciones de espafiol fueron divertidas y muy informativas, ya que como soy nuevo en el idioma, he aprendido mucho. La escuela esta en el corazon de la ciudad y es facil de recorrer, ademas es muy luminosa y te hace sentir bienvenido y feliz en todo momento. Muy agradecido por la oportunidad de ser su alumno, gracias por todo. jMuy recomendable! Me encanta la escuela Virginia.',
          time: Date.now() - 157680000000, // 5 años en milisegundos
          relative_time_description: 'Hace 5 años'
        },
        {
          id: '6',
          author_name: 'Anónimo',
          profile_photo_url: '/placeholder-profile.jpg',
          rating: 5,
          text: 'Al principio me preocupé porque no habia muchas resefias sobre esta academia, pero jjme gusta mucho!! Elegi mejorar mis habilidades de conversacion y fue realmente util poder hablar continuamente con el profesor, en lugar de tener un grupo de estudiantes reunidos y solo poder hablar un poco como en una escuela de idiomas normal. Me encanta poder experimentar la verdadera Espafia comprando en el mercado con mi profesor todas las mafianas, dando un paseo por el puerto y desayunando en una cafeteria de al lado. jjEs la mejor academia para conversar!!',
          time: Date.now() - 189216000000, // 6 años en milisegundos
          relative_time_description: 'Hace 6 años'
        },
        {
          id: '7',
          author_name: 'Anónimo',
          profile_photo_url: '/placeholder-profile.jpg',
          rating: 5,
          text: 'Pasé buen tiempo en esta escuela aprendiendo espafiol durante 6 meses. El ambiente de clase era muy bueno y divertido, por eso pude disfrutar del estudio de espafol sin dificultad encontrando con tanta gente de aqui. Nunca me arrepiento de estudiar en esta escuela ni me olvidaré de los recuerdos inolvidables. Antes de marcharme a mi pais, dejo mi comentario en esta pagina para que vean la informacion y varias fotos de esta escuela.',
          time: Date.now() - 252288000000, // 8 años en milisegundos
          relative_time_description: 'Hace 8 años'
        },
        {
          id: '8',
          author_name: 'Marta',
          profile_photo_url: '/placeholder-profile.jpg',
          rating: 5,
          text: 'Actualmente estoy dando clases de inglés para sacarme la titulaci6n B1, compaginandolo con mi trabajo. Horarios flexibles. Lo recomiendo 100%.',
          time: Date.now() - 220752000000, // 7 años en milisegundos
          relative_time_description: 'Hace 7 años'
        }
      ]
    };

    return NextResponse.json(googleReviewsData);
  } catch (error) {
    console.error('Error al obtener reseñas de Google:', error);
    return NextResponse.json(
      { error: 'Error al obtener reseñas de Google' },
      { status: 500 }
    );
  }
} 