import Image from 'next/image';

const About = () => {
  return (
    <section id='about' className="container min-h-screen flex flex-col justify-between px-4 py-12 gap-12">
      {/* Top section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col capitalize">
          <h2 className="title text-4xl sm:text-5xl font-sora">One shot,</h2>
          <h2 className="title text-4xl sm:text-5xl font-sora">One moment</h2>
        </div>

        <div className="max-w-full md:max-w-md font-cabin">
          <p className="text-base sm:text-lg md:text-xl">
            My journey began with a simple idea: to capture the world not as it is, but as it feels.
            <span className="text-secondary pl-1">
              This mission drives every shot I take. From the sweeping landscapes of nature to the intimate emotion of
              a portrait, each image tells a story—your story.
            </span>
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-8">
        <Image
          src="/about.JPG"
          alt="about"
          width={600}
          height={500}
          className="w-full md:w-1/2 rounded-xl object-cover"
        />

        <div className="max-w-full md:max-w-md font-cabin">
          <p className="text-sm md:text-base">
            My photo philosophy is rooted in simplicity and elegance. Each image is a balance of light, composition
            and subject, offering a clean, minimalist approach
            <span className="text-secondary pl-1">
              that puts the focus where it belongs—on the emotion and story of the moment.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
