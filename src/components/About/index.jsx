import "./About.css";

export default function About() {
  return (
    <div className="container">
      <h1>¡Hola! Me dicen Tomi y ésta es mi página personal. Bienvenido :)</h1>
      <div className="about">
        <section className="about__text">
          <div>
            <p>
              Tengo 21 años y estudio Desarrollo Front-End hace un año y medio.
            </p>
            <p>
              Actualmente sé HTML, CSS, Javascipt, React, TypeScript y Tailwind.
              Sigo aprendiendo estas tecnologías a través de constantes
              prácticas y cursos. Sinceramente disfruto mucho poner en práctica
              los conocimientos que adquiero.
            </p>
            <p>
              Soy de Argentina, por lo que mi comunicación más frecuente es por
              medio del español. De todos modos, aprendí italiano e inglés
              durante 14 y 10 años (respectivamente). Poseo certificado de nivel
              B2 en ambos idiomas.
            </p>
            <p>
              Gracias al inglés puedo obtener recursos de estudio ilimitados.
              Calculo que más de la mitad de mi aprendizaje de Front-End fue en
              este idioma.
            </p>
          </div>

          <div>
            <h2>¡Un poco más sobre mi!</h2>
            <p>
              Afortunadamente tengo una disciplina de la que estoy orgulloso.
            </p>
            <p>
              Mi día tipo consiste en estudiar programación, leer libros y hacer
              ejercicio en el gimnasio. Suelo ser una persona que aprovecha muy
              bien sus mañanas, aunque a las tardes también les saco mucho
              provecho.
            </p>
          </div>
        </section>

        <picture className="about__img" />
      </div>
    </div>
  );
}
