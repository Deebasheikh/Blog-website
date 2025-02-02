'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';


const postsData: BlogProps  = {
  'exploring-the-enchanting-northern-areas-of-pakistan': {
    title: 'Exploring the Enchanting Northern Areas of Pakistan',
    content: [
      { id: 'post1-para1', text: 'The northern areas of Pakistan are a treasure trove of natural beauty, cultural richness, and adventure.' },
      { id: 'post1-para2', text: 'Nestled in the lap of the mighty Himalayas, Karakoram, and Hindu Kush mountain ranges, this region offers breathtaking landscapes, vibrant traditions, and experiences that leave visitors spellbound.' },
      { id: 'post1-para3', text: 'A Paradise for Nature Lovers' },
      { id: 'post1-para4', text: 'The northern areas boast some of the world\'s most stunning scenery. From lush green valleys like Swat, Hunza, and Kaghan to the towering peaks of K2 and Nanga Parbat, nature’s grandeur is on full display.' },
      { id: 'post1-para5', text: 'The region’s serene lakes, such as Saif-ul-Malook, Attabad, and Sheosar, reflect the beauty of the surrounding mountains and create a mesmerizing ambiance.' },
    ],
    images: [
      { id: 'post1-img1', src: '/post1-1.jpg' },
      { id: 'post1-img2', src: '/post1-2.jpg' },
      { id: 'post1-img3', src: '/post1-3.jpg' },
      { id: 'post1-img4', src: '/post1-4.jpg' },
      { id: 'post1-img5', src: '/post1-5.jpg' },
      { id: 'post1-img6', src: '/post1-6.jpg' },
      { id: 'post1-img7', src: '/post1-7.jpg' },
      { id: 'post1-img8', src: '/post1-8.jpg' },
    ],
  },
  'beautiful-cities-and-their-specialties': {
    title: 'Beautiful Cities and Their Specialties',
    content: [
      { id: 'post2-para1', text: 'Hunza' },
      { id: 'post2-para2', text: 'Known as the "Heaven on Earth," Hunza is famous for its majestic landscapes, including Rakaposhi, Passu Cones, and the Baltit and Altit Forts.' },
      { id: 'post2-para3', text: 'Skardu' },
      { id: 'post2-para4', text: 'Often referred to as the "Gateway to the Karakoram," Skardu is a haven for adventure enthusiasts.' },
      { id: 'post2-para5', text: 'Gilgit' },
      { id: 'post2-para6', text: 'A hub for mountaineers and trekkers, Gilgit offers scenic beauty and historical landmarks like the Kargah Buddha.' },
      { id: 'post2-para7', text: 'Chitral' },
      { id: 'post2-para8', text: 'Home to the unique Kalash Valley, Chitral is celebrated for its rich culture and traditions.' },
      { id: 'post2-para9', text: 'Swat' },
      { id: 'post2-para10', text: 'Dubbed the "Switzerland of the East," Swat is known for its lush green meadows and Malam Jabba ski resort.' },
      { id: 'post2-para11', text: 'Naran and Kaghan' },
      { id: 'post2-para12', text: 'These twin towns are famous for their enchanting landscapes, alpine meadows, and rivers.' },
    ],
    images: [
      { id: 'post2-img1', src: '/post1-1.jpg' },
      { id: 'post2-img2', src: '/post1-2.jpg' },
      { id: 'post2-img3', src: '/post1-3.jpg' },
      { id: 'post2-img4', src: '/post1-4.jpg' },
      { id: 'post2-img5', src: '/post1-5.jpg' },
      { id: 'post2-img6', src: '/post1-6.jpg' },
      { id: 'post2-img7', src: '/post1-7.jpg' },
      { id: 'post2-img8', src: '/post1-8.jpg' },
    ],
  },
  'cultural-diversity-and-adventures': {
    title: 'Cultural Diversity and Adventures',
    content: [
      { id: 'post3-para1', text: 'A Hub of Cultural Diversity' },
      { id: 'post3-para2', text: ` Home to diverse ethnic groups, the northern areas are rich in cultural heritage. The people of Hunza, Gilgit, and 
      Chitral are known for their hospitality and unique traditions. Festivals like the Shandur Polo Festival and the Kalash 
      Spring Festival offer a glimpse into the vibrant local culture, showcasing music, dance, and colorful attire.`},
      { id: 'post3-para3', text: 'Adventures Await' },
      { id: 'post3-para4', text: `For thrill-seekers, the northern areas are a dream come true. Trekking trails, such as the Fairy Meadows leading to 
      Nanga Parbat Base Camp, attract adventurers from around the globe. The Karakoram Highway, often called the “Eighth 
      Wonder of the World,” provides a thrilling journey through awe-inspiring mountain landscapes.` },
    ],
    images: [
      { id: 'post3-img1', src: '/post1-1.jpg' },
      { id: 'post3-img2', src: '/post1-2.jpg' },
      { id: 'post3-img3', src: '/post1-3.jpg' },
      { id: 'post3-img4', src: '/post1-4.jpg' },
      { id: 'post3-img5', src: '/post1-5.jpg' },
      { id: 'post3-img6', src: '/post1-6.jpg' },
      { id: 'post3-img7', src: '/post1-7.jpg' },
      { id: 'post3-img8', src: '/post1-8.jpg' },
    ],
  },
  'a-photographers-haven-and-sustainable-tourism': {
    title: 'A Photographer’s Haven and Sustainable Tourism',
    content: [
      { id: 'post4-para1', text: 'A Photographer’s Haven' },
      { id: 'post4-para2', text: 'With its dramatic landscapes, vibrant autumn colors, and starry nights, the northern areas are a paradise for photographers.' },
      { id: 'post4-para3', text: 'Sustainable Tourism and Challenges' },
      { id: 'post4-para4', text: 'While the northern areas are gaining popularity as a tourist destination, sustainable tourism practices are essential.' },
    ],
    images: [
      { id: 'post4-img1', src: '/post1-1.jpg' },
      { id: 'post4-img2', src: '/post1-2.jpg' },
      { id: 'post4-img3', src: '/post1-3.jpg' },
      { id: 'post4-img4', src: '/post1-4.jpg' },
      { id: 'post4-img5', src: '/post1-5.jpg' },
      { id: 'post4-img6', src: '/post1-6.jpg' },
      { id: 'post4-img7', src: '/post1-7.jpg' },
      { id: 'post4-img8', src: '/post1-8.jpg' },
    ],
  },
  'plan-your-journey': {
    title: 'Plan Your Journey',
    content: [
      { id: 'post5-para1', text: 'Whether you seek solace in nature, an adrenaline rush, or an opportunity to explore rich cultural heritage, the northern areas of Pakistan have something for everyone.' },
      { id: 'post5-para2', text:`   Whether you seek solace in nature, an adrenaline rush, or an opportunity to explore rich cultural heritage, the northern 
      areas of Pakistan have something for everyone. Plan your journey today and experience the magic of this enchanting region.

      The northern areas of Pakistan are a reminder of the beauty and diversity our world has to offer. A visit here is not just 
      a trip; it’s a journey into a world of wonder and serenity.` },
    ],
    images: [
      { id: 'post5-img1', src: '/post1-1.jpg' },
      { id: 'post5-img2', src: '/post1-2.jpg' },
      { id: 'post5-img3', src: '/post1-3.jpg' },
      { id: 'post5-img4', src: '/post1-4.jpg' },
      { id: 'post5-img5', src: '/post1-5.jpg' },
      { id: 'post5-img6', src: '/post1-6.jpg' },
      { id: 'post5-img7', src: '/post1-7.jpg' },
      { id: 'post5-img8', src: '/post1-8.jpg' },
    ],
  },
};


export default function Post() {
  const params = useParams();
  const slug = params?.slug;

  // Ensure `slug` is a string
  if (!slug || Array.isArray(slug)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-600">Post not found!</h1>
      </div>
    );
  }

  const post = postsData[slug as string]; // Explicitly cast `slug` as a string

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-600">Post not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-green-800 mb-4">{post.title}</h1>
        <article className="prose prose-lg prose-green mb-6">
  {post.content.map((section) => (
    <p key={section.id}>{section.text}</p>
  ))}
</article>


       {/* Image Gallery */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
  {post.images.map((image) => (
    <div key={image.id} className="relative w-full h-48">
      <Image
        src={image.src}
        alt={`Gallery image ${image.id}`}
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-md"
      />
    </div>
  ))}
</div>


        <Link
          href="/blog"
          className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
