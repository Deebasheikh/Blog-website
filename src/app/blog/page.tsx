import Link from "next/link";

const BlogSummaries = [
  {
    slug: 'exploring-the-enchanting-northern-areas-of-pakistan',
    title: 'Exploring the Enchanting Northern Areas of Pakistan',
    summary: 'Discover the natural beauty, cultural richness, and adventure in Pakistan\'s northern areas, surrounded by the mighty mountain ranges.',
  },
  {
    slug: 'beautiful-cities-and-their-specialties',
    title: 'Beautiful Cities and Their Specialties',
    summary: 'Explore Hunza, Skardu, Gilgit, Chitral, Swat, and Kaghan, each with its unique charm and breathtaking landscapes.',
  },
  {
    slug: 'cultural-diversity-and-adventures',
    title: 'Cultural Diversity and Adventures',
    summary: 'Learn about the diverse cultures and thrilling adventures that make the northern areas a hub for explorers and culture enthusiasts.',
  },
  {
    slug: 'a-photographers-haven-and-sustainable-tourism',
    title: 'A Photographer’s Haven and Sustainable Tourism',
    summary: 'Capture the beauty of dramatic landscapes and promote sustainable tourism in this mesmerizing region.',
  },
  {
    slug: 'plan-your-journey',
    title: 'Plan Your Journey',
    summary: 'Start your adventure in the northern areas of Pakistan, where wonders and serenity await.',
  },
];

export default function Blog() {
  return (
    <div className="bg-gray-100 p-1 md:p-2 lg:p-4 xl:p-[17.5px]">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center
       text-green-700 mb-1 md:mb-2 lg:mb-3 xl:mb-4">
        Blog on Northern Areas of Pakistan
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 cursor-pointer">
        {BlogSummaries.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className="bg-white rounded-lg shadow-md p-2 md:p-2 lg:p-3 xl:p-3 
            transform transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-base md:text-md lg:text-xl font-semibold text-green-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm md:text-base mb-2 md:mb-1 xl:mb-2">{post.summary}</p>
            <button className="text-blue-500 hover:underline">Read More</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

