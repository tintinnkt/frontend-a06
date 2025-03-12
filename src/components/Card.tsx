import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

interface CardProps {
  venueName: string;
  imgSrc: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <InteractiveCard>
      <Image
        src={imgSrc}
        alt="Card Image"
        height={200}
        width={300}
        className="h-[15vh] mb-2 rounded-t-lg"
      />
      <p className="text-gray-800 px-10">{venueName}</p>
    </InteractiveCard>
  );
}
