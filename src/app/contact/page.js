import Image from "next/image";
import linkedin from "/public/linkedin.png";
import github from "/public/github.png";
import mail from "/public/mail.png";
import chat from "/public/lets-chat.png";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full my-32 h-screen sm:mt-12 flex flex-col justify-center items-center"
    >
      <Image
        src={chat}
        alt="two people talking"
        className="w-72 h-64 sm:w-96 sm:h-96"
      />
      <div className="sm:flex sm:flex-row sm:justify-center sm:w-2/3">
        <div className="my-5 text-end">
          <h3 className="text-lg mb-2 tracking-widest px-6">get in touch</h3>
          <p className="text-sm px-6 tracking-wider">
            hello, let me know if you have any questions or just wants to say hi
          </p>
        </div>
        <div className="flex flex-row justify-center text-center sm:justify-start items-center">
          <a href="mailto:mlbaldevieso@gmail.com">
            <Image
              className="w-16 h-16 mr-5"
              src={mail}
              alt="send an email to lea"
            />
          </a>
          <a href="https://github.com/marianlea">
            <Image
              className="w-16 h-16 mr-5"
              src={github}
              alt="link to lea's github"
            />
          </a>
          <a href="https://www.linkedin.com/in/leabaldevieso/">
            <Image
              className="w-16 h-16"
              src={linkedin}
              alt="link to lea's linkedin"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
