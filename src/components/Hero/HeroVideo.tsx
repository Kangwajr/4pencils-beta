import HeroVideo from "../../assets/videos/Comp1_1.mp4";

const HeroVideoComponent = () => {
  return (
    <>
      <div className="absolute inset-0 z-[1] h-[1400px]" />

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full min-h-max object-cover"
        // poster="/4pencil-utils1/thumbnails/4pencils-hero-thumbnail.svg"
      >
        <source src={HeroVideo} type="video/mp4" />
      </video>
    </>
  );
};

export default HeroVideoComponent;