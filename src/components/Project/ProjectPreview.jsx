import useImages from "@/hooks/useImages";

export default function ProjectPreview({ site, setDesktop, project, mode }) {
  const images = useImages(mode, project);

  return (
    <section className="project__preview">
      <a className="project__slider" href={site} target="_blank">
        <img
          className="project__img project__img--desktop"
          src={images[0]}
          alt="Proyecto escritorio"
        />
        <img
          className="project__img project__img--mobile"
          src={images[1]}
          alt="Proyecto teléfono"
        />
      </a>
      <div className="preview__buttons">
        <button onClick={() => setDesktop(0)}>Desktop</button>
        <button onClick={() => setDesktop(1)}>Mobile</button>
      </div>
    </section>
  );
}
