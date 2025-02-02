import Image from "next/image";
import { StaticImageData } from "next/image";

interface BlogProps {
    p?: string;
    color?: string;
    image: string | StaticImageData; // Allow both types
    name: string;
    price: string;
  }