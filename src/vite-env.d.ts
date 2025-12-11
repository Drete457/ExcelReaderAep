/// <reference types="vite/client" />
/// <reference types="@testing-library/jest-dom" />

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
