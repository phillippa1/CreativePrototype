import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build"
  },
  server: {
    host:"0.0.0.0",
    port:300,
    strictPort: true,
    hmr: {
      clientPort: 300 // Run the websocket server on the SSL port
    }
  }
});
