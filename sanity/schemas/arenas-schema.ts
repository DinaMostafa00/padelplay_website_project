const arenas = {
  name: "arenas",
  title: "Arenas",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      maxLengh: 50,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      maxLengh: 50,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
};

export default arenas;
