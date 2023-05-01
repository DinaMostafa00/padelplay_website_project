import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemas } from "./sanity/schemas";
// import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "default",
  title: "padelplay_sanity",

  projectId: "wi5l8juj",
  dataset: "production",
  basePath: "/admin",

  plugins: [deskTool()],
  schema: { types: schemas },
});
