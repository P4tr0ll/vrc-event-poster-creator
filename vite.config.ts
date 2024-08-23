import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isProd = command === "build";

  return {
    ...(isProd && {
      base: "/vrc-event-poster-creator/",
    }),
    plugins: [react()],
    build: {
      outDir: "./docs",
    },
  };
});
