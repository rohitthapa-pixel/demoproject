// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import swipper1 from "../../src/assets/images/swipper1.jpg";
// import swipper2 from "../../src/assets/images/swipper2.jpg";
// import swipper3 from "../../src/assets/images/swipper3.jpg";

// const CarouselComponent = (Carousel as any).default || Carousel;

export default function Home() {
  // const responsive = {
  //   xl: { breakpoint: { max: 3000, min: 1280 }, items: 4 },
  //   lg: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
  //   md: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  //   sm: { breakpoint: { max: 768, min: 640 }, items: 2 },
  //   xs: { breakpoint: { max: 640, min: 0 }, items: 1 },
  // };

  return (
    <div className="w-full min-h-full px-6 py-10 bg-gray-600">
      {/* <CarouselComponent
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        arrows
        showDots
        draggable
        swipeable
      >
        {[swipper1, swipper2, swipper3].map((img, index) => (
          <div
  key={index}
  className="mx-3 h-[420px] rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105"
>
  <img
    src={img}
    alt={`slide-${index}`}
    className="w-full h-full object-cover"
  />
</div>

        ))}
      </CarouselComponent> */}
      Hello
    </div>
  );
}
