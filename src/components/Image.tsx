import Image from "next/image";

const gridItems = [
  { src: "/imageb.jpg", title: "Warm up and cool down" },
  { src: "/imagea.jpg", title: "Gym session" },
  { src: "/imagec.jpg", title: "Nutrition plan"},
  { src: "/imaged.jpg", title: "Indoor and Outdoor session"}
];

export default function ImageGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-6 md:grid-cols-2 auto-rows-fr">
        {gridItems.map((item, index) => (
          <div key={index} className="relative rounded-2xl overflow-hidden group">
            <Image
              src={item.src}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-[80vh] max-sm:h-[60vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end text-white">
              <h3 className="font-semibold text-xl ">{item.title}</h3>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
