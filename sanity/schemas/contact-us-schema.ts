const contacUstPage = {
  name: "contactUs",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "text",
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
      name: "address",
      title: "Address",
      type: "text",
    },
    {
      name: "email1",
      title: "E-mail1",
      type: "text",
    },
    {
      name: "email2",
      title: "E-mail2",
      type: "text",
    },

    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "text",
    },
  ],
};

export default contacUstPage;
