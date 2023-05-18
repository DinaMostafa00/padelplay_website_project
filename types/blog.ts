import { PortableTextBlock } from "sanity";

export type blog = {
  _id: string;
  createdAt: Date;
  name: string;
  alt: string;
  slug: string;
  imgCredit: string;
  image: string;
  content: PortableTextBlock[];
};
