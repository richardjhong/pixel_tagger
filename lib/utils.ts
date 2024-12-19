import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import clientPromise from "./mongodb";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function fetchImages() {
  const client = await clientPromise;
  const db = client.db("images");
  const images = db.collection("modified-images").find({}).toArray();
  return images;
}
