import Image from "next/image";

export default function Card({ project }) {
  return (
    <article className="w-full pb-5 mt-10 sm:mx-2 drop-shadow-sm shadow-md hover:scale-110 sm:hover:scale-125 hover:z-10 bg-main">
      <div className="mb-3">
        <Image src={project.image} alt={`${project.name} screenshot`} />
      </div>
      <div className="px-2">
        <h3>{project.name}</h3>
        <h3 className="text-sub-text">
          <span className="mr-5">
            <a href={project.githubLink}>github</a>
          </span>
          |
          <span className="ml-5">
            <a href={project.liveSite}>live site</a>
          </span>
        </h3>
      </div>
    </article>
  );
}
