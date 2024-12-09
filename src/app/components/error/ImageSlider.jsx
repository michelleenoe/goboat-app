import Image from "next/image";

export default function ImageSlider({ selectedError }) {
  const images = selectedError.img_url ? JSON.parse(selectedError.img_url) : [];

  if (images.length === 0) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold">Billeder:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-64">
            <Image
              src={img}
              alt={`Step ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
