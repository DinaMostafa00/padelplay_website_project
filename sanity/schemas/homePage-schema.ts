const HomePage = {
  name: "homePage",
  title: "home-Page",
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
      name: "heroText",
      title: "Hero-Text",
      type: "text",
    },
    {
      name: "introText",
      title: "intro-Text",
      type: "text",
    },
    {
      name: "introSubText",
      title: "Hero-Sub-Text",
      type: "text",
    },
    {
      name: "featuresTitle",
      title: "Features-Title",
      type: "text",
    },
    {
      name: "featuresHeader1",
      title: "Features-header1",
      type: "text",
    },
    {
      name: "featuresText1",
      title: "Features-Text1",
      type: "text",
    },
    {
      name: "featuresHeader2",
      title: "Features-header2",
      type: "text",
    },
    {
      name: "featuresText2",
      title: "Features-Text2",
      type: "text",
    },
    {
      name: "featuresHeader3",
      title: "Features-header3",
      type: "text",
    },
    {
      name: "featuresText3",
      title: "Features-Text3",
      type: "text",
    },
    {
      name: "featuresHeader4",
      title: "Features-header4",
      type: "text",
    },
    {
      name: "featuresText4",
      title: "Features-Text4",
      type: "text",
    },
    {
      name: "featuresHeader5",
      title: "Features-header5",
      type: "text",
    },
    {
      name: "featuresText5",
      title: "Features-Text5",
      type: "text",
    },
    {
      name: "featuresHeader6",
      title: "Features-header6",
      type: "text",
    },
    {
      name: "featuresText6",
      title: "Features-Text6",
      type: "text",
    },
    {
      name: "priceTextBasic",
      title: "price-text-Basic",
      type: "text",
    },
    {
      name: "priceTextEssential",
      title: "price-text-Essential",
      type: "text",
    },
    {
      name: "priceTextPremium",
      title: "price-text-Premium",
      type: "text",
    },
  ],
};

export default HomePage;
