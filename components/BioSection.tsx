import MacWindow from "./ui/MacWindow";
import TextGenerateEffect from "./ui/text-generate-effect";

const words = `Hey there! I'm Arjun R Mistry, a passionate computer engineering student currently based in Ahmedabad for my studies, originally from the vibrant city of Mehsana, Gujarat. My journey with computers started early, and it’s been a thrilling ride ever since. I’m a web developer specializing in the MERN stack and Next.js, with a knack for DevOps.`;
const word2 = `While I don't have any major public accomplishments to brag about just yet, I've worked on numerous freelance projects that I’m pretty proud of, even though they’re mostly private. However, I can definitely share my diploma final year project and a few other side projects that showcase my skills.`;
const word3 = `My educational path has been quite an adventure. After completing my schooling up to the 10th standard, I pursued a 3-year diploma in computer engineering and am now working towards a B.E in Computer Engineering. Throughout this journey, I've dived deep into the MERN stack (MongoDB, ExpressJS, React, Node), Next.js, and even dabbled in writing APIs in Go. My DevOps skills are also sharp, with experience in AWS, Docker, and Linux.`;
const word4 = `When I’m not coding or exploring new technologies, you can find me indulging in my other passions – creating fun projects, jamming out to some good music, and enjoying a good movie. I believe in making the most out of every moment and love to bring a bit of that fun and enthusiasm to my work.`;
const word5 = `Feel free to connect with me if you want to talk tech, collaborate on a project, or just chat about the latest in cinema!`;

const data: { title: string; content: string }[] = [
  {
    title: "Introduction and Background",
    content:
      "Hey there! I'm Arjun R Mistry, a passionate and dedicated computer engineering student currently based in Ahmedabad for my studies. Originally from the vibrant city of Mehsana, Gujarat, my journey with computers started early, and it’s been a thrilling ride ever since. As a web developer specializing in the MERN stack (MongoDB, ExpressJS, React, Node.js) and Next.js, I have also developed a strong knack for DevOps, mastering tools like AWS, Docker, and Linux. ",
  },
  {
    title: "Freelance Experience and Projects",
    content:
      "While I don't have any major public accomplishments to brag about just yet, I've worked on numerous freelance projects that I’m pretty proud of, even though they’re mostly private. However, I can definitely share my diploma final year project and a few other side projects that showcase my skills.",
  },
  {
    title: "Educational Journey",
    content:
      "My educational path has been quite an adventure. After completing my schooling up to the 10th standard, I pursued a 3-year diploma in computer engineering and am now working towards a B.E in Computer Engineering. Throughout this journey, I've dived deep into the MERN stack (MongoDB, ExpressJS, React, Node), Next.js, and even dabbled in writing APIs in Go. My DevOps skills are also sharp, with experience in AWS, Docker, and Linux.",
  },
  {
    title: "Passions Beyond Coding",
    content:
      "When I’m not coding or exploring new technologies, you can find me indulging in my other passions – creating fun projects, jamming out to some good music, and enjoying a good movie. I believe in making the most out of every moment and love to bring a bit of that fun and enthusiasm to my work.",
  },
  {
    title: "Connect with Me",
    content:
      "Feel free to connect with me if you want to talk tech, collaborate on a project, or just chat about the latest in cinema!",
  },
];

export default function BioSection() {
  return (
    <section className="container p-10 mx-auto">
      <div className="grid grid-rows-6 grid-cols-8 gap-6 h-full">
        <MacWindow
          title={data[0].title}
          className="row-start-1 col-start-1 row-end-5 col-end-5"
        >
          <TextGenerateEffect
            textStyle="text-2xl font-bold"
            className=""
            words={data[0].content}
          />
        </MacWindow>
        <MacWindow
          title={data[1].title}
          className="row-start-1 col-start-5 row-end-3 col-end-9"
        >
          <TextGenerateEffect words={data[1].content} className="text-base" />
        </MacWindow>
        <MacWindow
          title={data[2].title}
          className="row-start-3 col-start-5 row-end-5 col-end-9"
        >
          <TextGenerateEffect className="text-base" words={data[2].content} />
        </MacWindow>
        <MacWindow
          title={data[3].title}
          className="row-start-5 col-start-1 row-end-7 col-end-6"
        >
          <TextGenerateEffect className="text-base" words={data[3].content} />
        </MacWindow>
        <MacWindow
          title={data[4].title}
          className="row-start-5 col-start-6 row-end-7 col-end-9"
        >
          <TextGenerateEffect className="text-base" words={data[4].content} />
        </MacWindow>
      </div>
    </section>
  );
}
