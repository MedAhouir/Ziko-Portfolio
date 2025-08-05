// app/[category]/page.tsx

import { photosByCategory } from "@/constants";
import { notFound } from "next/navigation";

// 👇 This function tells Next.js what values for [category] to pre-render
export async function generateStaticParams() {
  return Object.keys(photosByCategory).map((category) => ({
    category,
  }));
}

type Props = {
  params: {
    category: string;
  };
};

export default function CategoryPage({ params }: Props) {
  const { category } = params;
  const photos = photosByCategory[category];

  if (!photos) return notFound();

  return (
    <div className="p-6">
      <h2 className="title text-4xl sm:text-5xl font-sora">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${category} photo ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
