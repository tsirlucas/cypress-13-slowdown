import { defineConfig } from "cypress";

export default defineConfig({
  experimentalWebKitSupport: true,
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
