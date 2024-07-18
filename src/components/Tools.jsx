import { useStore } from "@nanostores/react";
import { theme } from "../states/theme";
import "../styles.css"

function Tools({ title, src }) {
  return (
    <div
      id={title}
      className="text-center place-content-center w-fit mx-6 sm:mx-12 lg:mx-16 xl:mx-20 2xl:mx-20"
    >
      <img
        src={src}
        alt={title}
        className="h-12 w-12 min-h-12 min-w-12 sm:min-h-20 sm:min-w-20 lg:min-h-24 lg:min-w-24 xl:min-h-28 xl:min-w-28 2xl:min-h-32 2xl:min-w-32 m-auto"
      />
      <p className="xl:text-sm font-semibold text-bunker-900 dark:text-bunker-300 mt-2">
        {title}
      </p>
    </div>
  );
}

function Slider() {
  const $theme = useStore(theme);
  return (
    <>
      <div id="tools-slide">
        <Tools src="/javascript.svg" title="Javascript" />
        <Tools src="/html.svg" title="HTML5" />
        <Tools src="/css-3.svg" title="CSS" />
        <Tools src="/tailwind.svg" title="Tailwind" />
        <Tools src="/react.svg" title="React" />
        <Tools src="/vite.svg" title="Vite" />
        {$theme == "dark" ? (
          <Tools src="/astro-dark.svg" title="Astro" />
        ) : (
          <Tools src="/astro-light.svg" title="Astro" />
        )}
        <Tools src="/node.svg" title="Node" />
        <Tools src="/nginx.svg" title="Nginx" />
        <Tools src="/electron.svg" title="Electron" />
        <Tools src="/bootstrap.svg" title="Bootstrap" />
        <Tools src="/python.svg" title="Python" />
      </div>
    </>
  );
}

export { Slider };

