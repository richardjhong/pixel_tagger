import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const ImageCard = ({ image }: { image: any }) => {
  const {
    _id,
    _createdAt,
    views,
    author: { _id: authorId, name: authorName },
    description,
    src,
    categories,
    title,
  } = image;

  return (
    <li className="image-card group">
      <div className="flex-between">
        <p className="image_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/image/${_id}`}>
            <h3 className="text-26-semibold">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/image/${_id}`}>
        <p className="image-card_desc line-clamp-1">{description}</p>
        <Image
          src={src}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="placeholder"
        />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <ul>
          {categories.map((category: any, index: number) => (
            <li key={index}>
              <Link href={`/?query=${category.toLowerCase()}`}>
                <p className="text-14-normal !text-black">
                  {category}
                  {index < categories.length - 1 && <span>,</span>}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <Button
          className="image-card_btn"
          asChild
        >
          <Link href={`/image/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default ImageCard;
