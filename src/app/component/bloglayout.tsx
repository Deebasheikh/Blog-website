export default interface BlogProps {
  [slug: string]: {
    title: string;
    content: { id: string; text: string }[];
    images: { id: string; src: string }[];
  };
  };
