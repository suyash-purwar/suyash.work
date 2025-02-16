import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import ENV from "../../env";
import SchemaTypes from "./schema";

const sanityConfig = defineConfig({
  projectId: ENV.SANITY.PROJECT_ID,
  dataset: ENV.SANITY.DATASET,
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: SchemaTypes,
  },
});

export default sanityConfig;
