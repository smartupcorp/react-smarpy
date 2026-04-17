import react from "@vitejs/plugin-react-swc";
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import preserveDirectives from "rollup-preserve-directives";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/react-smarpy.ts"),
      name: "ReactSmarpy",
      fileName: "react-smarpy",
      formats: ["es"],
    },
    sourcemap: true,
    rollupOptions: {
      plugins: [preserveDirectives()],
      external: [
        "react",
        "react/jsx-runtime",
        "@emotion/react",
        "@emotion/react/jsx-runtime",
      ],
      input: Object.fromEntries(
        glob
          .sync("src/**/*!(*.d).{ts,tsx}", {
            ignore: ["src/**/*.stories.tsx", "src/**/*.test.{ts,tsx}"],
          })
          .map((file) => [
            relative("src", file.slice(0, file.length - extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        globals: {
          react: "React",
          "@emotion/react/jsx-runtime": "EmotionReactJsxRuntime",
          "@emotion/react": "EmotionReact",
        },
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
    },
  },
  css: {
    modules: {
      globalModulePaths: [/.*\/src\/base\/Smarpy\/.*/],
    },
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    libInjectCss(),
    dts({ include: ["src"] }),
  ],
});
