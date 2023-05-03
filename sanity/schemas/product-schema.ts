const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLengh: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "headerInfo",
      title: "Header info",
      type: "text",
    },
    {
      name: "videoUrl",
      title: "Video",
      type: "file",
      options: {
        accept: "video/mp4",
      },
    },
    {
      name: "text1",
      title: "Text1",
      type: "text",
    },
    {
      name: "image1",
      title: "Image1",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "image2",
      title: "Image2",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "text2",
      title: "Text2",
      type: "text",
    },
    {
      name: "image3",
      title: "Image3",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "text3",
      title: "Text3",
      type: "text",
    },
  ],
};

export default product;
