import Image from "next/image";

const images = [
  "/imagea.png",
  "/imageb.png",
  "/imagec.png",
  "/imaged.png",
  "/imagee.png",
  "/imagef.png",
];

export default function ImageGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-6 md:grid-cols-3 auto-rows-fr">
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full h-64 rounded-2xl overflow-hidden">
            <Image
              src={src}
              alt={`Image ${idx + 1}`}
              fill
              className=""
              sizes="(min-width: 768px) 33vw, 100vw"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
