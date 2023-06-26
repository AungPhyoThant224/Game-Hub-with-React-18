import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // server: {
    //   host: true,
    //   port: 9000,
    //   open: true,
    // },
  };
});
