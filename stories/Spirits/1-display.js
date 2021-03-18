import * as PIXI from "pixi.js";

import images from "../../assets/mario.png";

export const spiritDisplay = () => {
  let app = new PIXI.Application({
    width: 256,
    height: 256,
    resizeTo: window,
  });

  const loader = new PIXI.Loader();

  const sprites = {};

  // Chainable `add` to enqueue a resource
  loader.add("bunny", images);

  // Chainable `pre` to add a middleware that runs for each resource, *before* loading that resource.
  // This is useful to implement custom caching modules (using filesystem, indexeddb, memory, etc).
  //   loader.pre(cachingMiddleware);

  // Chainable `use` to add a middleware that runs for each resource, *after* loading that resource.
  // This is useful to implement custom parsing modules (like spritesheet parsers, spine parser, etc).
  //   loader.use(parsingMiddleware);

  // The `load` method loads the queue of resources, and calls the passed in callback called once all
  // resources have loaded.
  loader.load((loader, resources) => {
    // resources is an object where the key is the name of the resource loaded and the value is the resource object.
    // They have a couple default properties:
    // - `url`: The URL that the resource was loaded from
    // - `error`: The error that happened when trying to load (if any)
    // - `data`: The raw data that was loaded
    // also may contain other properties based on the middleware that runs.
    sprites.bunny = new PIXI.Sprite(resources.bunny.texture);
    // sprites.spaceship = new PIXI.TilingSprite(resources.spaceship.texture);
    // sprites.scoreFont = new PIXI.TilingSprite(resources.scoreFont.texture);
    app.stage.addChild(sprites.bunny);
  });

  // throughout the process multiple signals can be dispatched.
  loader.onProgress.add(() => {}); // called once per loaded/errored file
  loader.onError.add(() => {}); // called once per errored file
  loader.onLoad.add(() => {}); // called once per loaded file
  loader.onComplete.add(() => {}); // called once when the queued resources all load.

  const graphics = new PIXI.Graphics();

  // Rectangle
  graphics.beginFill(0xde3249);
  graphics.drawRect(50, 50, 100, 100);
  graphics.endFill();

  // Rectangle + line style 1
  graphics.lineStyle(2, 0xfeeb77, 1);
  graphics.beginFill(0x650a5a);
  graphics.drawRect(200, 50, 100, 100);
  graphics.endFill();

  // Rectangle + line style 2
  graphics.lineStyle(10, 0xffbd01, 1);
  graphics.beginFill(0xc34288);
  graphics.drawRect(350, 50, 100, 100);
  graphics.endFill();

  // Rectangle 2
  graphics.lineStyle(2, 0xffffff, 1);
  graphics.beginFill(0xaa4f08);
  graphics.drawRect(530, 50, 140, 100);
  graphics.endFill();

  // Circle
  graphics.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
  graphics.beginFill(0xde3249, 1);
  graphics.drawCircle(100, 250, 50);
  graphics.endFill();

  // Circle + line style 1
  graphics.lineStyle(2, 0xfeeb77, 1);
  graphics.beginFill(0x650a5a, 1);
  graphics.drawCircle(250, 250, 50);
  graphics.endFill();

  // Circle + line style 2
  graphics.lineStyle(10, 0xffbd01, 1);
  graphics.beginFill(0xc34288, 1);
  graphics.drawCircle(400, 250, 50);
  graphics.endFill();

  // Ellipse + line style 2
  graphics.lineStyle(2, 0xffffff, 1);
  graphics.beginFill(0xaa4f08, 1);
  graphics.drawEllipse(600, 250, 80, 50);
  graphics.endFill();

  // draw a shape
  graphics.beginFill(0xff3300);
  graphics.lineStyle(4, 0xffd900, 1);
  graphics.moveTo(50, 350);
  graphics.lineTo(250, 350);
  graphics.lineTo(100, 400);
  graphics.lineTo(50, 350);
  graphics.closePath();
  graphics.endFill();

  // draw a rounded rectangle
  graphics.lineStyle(2, 0xff00ff, 1);
  graphics.beginFill(0x650a5a, 0.25);
  graphics.drawRoundedRect(50, 440, 100, 100, 16);
  graphics.endFill();

  // draw star
  graphics.lineStyle(2, 0xffffff);
  graphics.beginFill(0x35cc5a, 1);
  graphics.drawRoundedRect(360, 370, 5, 50);
  graphics.endFill();

  // draw star 2
  graphics.lineStyle(2, 0xffffff);
  graphics.beginFill(0xffcc5a, 1);
  graphics.drawRoundedRect(280, 510, 7, 50);
  graphics.endFill();

  // draw star 3
  graphics.lineStyle(4, 0xffffff);
  graphics.beginFill(0x55335a, 1);
  graphics.drawRoundedRect(470, 450, 4, 50);
  graphics.endFill();

  // draw polygon
  const path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];

  graphics.lineStyle(0);
  graphics.beginFill(0x3500fa, 1);
  graphics.drawPolygon(path);
  graphics.endFill();

  // app.stage.addChild(graphics);

  graphics.x = 200;

  app.stage.addChild(graphics);

  return app.view;
};

spiritDisplay.storyName = "1. Display";
