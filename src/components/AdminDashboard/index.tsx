import { Studio, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import ENV from "../../../env";
import SchemaTypes from "../../sanity/schema";

const AdminDashboard = () => {
  const sanityConfig = defineConfig({
    projectId: ENV.SANITY.PROJECT_ID,
    dataset: ENV.SANITY.DATASET,
    basePath: "/studio",
    plugins: [structureTool(), visionTool()],
    schema: {
      types: SchemaTypes,
    },
  });

  return <Studio config={sanityConfig} />;
};

export default AdminDashboard;
