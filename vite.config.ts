<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
>>>>>>> f43d1ad558962532cb6ae53b0abd24890f71966e

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
})
=======
  resolve: {
    alias: [
      { find: "src/components", replacement: "@/components" },
      { find: "src/types", replacement: "@/types" },
      { find: "src/utils", replacement: "@/utils" },
      { find: "src/hooks", replacement: "@/hooks" },
    ],
  },
});
>>>>>>> f43d1ad558962532cb6ae53b0abd24890f71966e
