import MacWindow from "./ui/MacWindow";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Hey there! I'm Arjun R Mistry, a passionate computer engineering student currently based in Ahmedabad for my studies, originally from the vibrant city of Mehsana, Gujarat. My journey with computers started early, and it’s been a thrilling ride ever since. I’m a web developer specializing in the MERN stack and Next.js, with a knack for DevOps.\n
While I don't have any major public accomplishments to brag about just yet, I've worked on numerous freelance projects that I’m pretty proud of, even though they’re mostly private. However, I can definitely share my diploma final year project and a few other side projects that showcase my skills.\n
My educational path has been quite an adventure. After completing my schooling up to the 10th standard, I pursued a 3-year diploma in computer engineering and am now working towards a B.E in Computer Engineering. Throughout this journey, I've dived deep into the MERN stack (MongoDB, ExpressJS, React, Node), Next.js, and even dabbled in writing APIs in Go. My DevOps skills are also sharp, with experience in AWS, Docker, and Linux.\n
When I’m not coding or exploring new technologies, you can find me indulging in my other passions – creating fun projects, jamming out to some good music, and enjoying a good movie. I believe in making the most out of every moment and love to bring a bit of that fun and enthusiasm to my work.\n
Feel free to connect with me if you want to talk tech, collaborate on a project, or just chat about the latest in cinema!`;

export default function BioSection() {
  return (
    <section className="container p-10 mx-auto">
      <MacWindow className={""} title={"Arjun R. Mistry - Bio"}>
        <TextGenerateEffect className="font-semibold" words={words} />;
      </MacWindow>
    </section>
  );
}
