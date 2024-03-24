import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "src/components", replacement: "@/components" },
      { find: "src/types", replacement: "@/types" },
      { find: "src/utils", replacement: "@/utils" },
      { find: "src/hooks", replacement: "@/hooks" },
    ],
  },
});
