import "./About.css"

export default function About() {
  return (
    <div className="about container">
      <section className="about__text">
        <div>
          <h1>¡Hola! Me dicen Tomi y ésta es mi página personal. Bienvenido :)</h1>
          <br/>
          <p>Tengo 21 años y estudio Desarrollo Front-End hace un año y medio.</p>
          <p>Ingresé a este mundo gracias a sugerencia de un amigo a quién le estoy eternamente agradecido. Me encanta.</p>
          <p>Actualmente sé HTML, CSS, Javascipt y React. Sigo aprendiendo éstas tecnologías a través de constantes prácticas y cursos. Sinceramente disfruto mucho poner en práctica los conocimientos que adquiero.</p>
          <p>Soy de Argentina, por lo que mi comunicación más frecuente es por medio del español. De todos modos, aprendí italiano e inglés durante 14 y 10 años (respectivamente). Poseo certificado de nivel B2 en ambos idiomas.</p>
          <p>Gracias al inglés puedo obtener recursos de estudio ilimitados. Calculo que más de la mitad de mi aprendizaje de Front-End fue en este idioma.</p>
          <br/>
        </div>

        <div>
          <h2>¡Un poco más sobre mi!</h2>
          <p>Afortunadamente tengo una disciplina de la que estoy orgulloso.</p>
          <p>Mi día tipo consiste en estudiar programación, leer libros y hacer ejercicio en el gimnasio. Suelo ser una persona que aprovecha muy bien sus mañanas, aunque a las tardes también les saco mucho provecho.</p>
          <p>También toco la guitarra hace casi doce años, aunque actualmente no es una actividad a la que le dedique mucho de mi tiempo libre.</p>
        </div>
      </section>

      <picture className="about__img" />
    </div>
  )
}