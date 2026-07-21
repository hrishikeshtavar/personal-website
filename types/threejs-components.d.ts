// threejs-components ships prebuilt effect bundles (e.g. build/cursors/*.min.js)
// as plain JS with no accompanying type declarations. This just tells
// TypeScript the shape we actually use in components/ui/cursor-trail.tsx —
// a default-exported factory function — rather than erroring on the import.
declare module "threejs-components/build/cursors/tubes1.min.js" {
  type TubesCursorOptions = {
    tubes?: {
      colors?: string[];
      lights?: {
        intensity?: number;
        colors?: string[];
      };
    };
  };

  type TubesCursorApp = {
    dispose?: () => void;
  };

  const TubesCursor: (
    canvas: HTMLCanvasElement,
    options?: TubesCursorOptions
  ) => TubesCursorApp;

  export default TubesCursor;
}
