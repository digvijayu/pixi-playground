import * as PIXI from "pixi.js";

import images from "../../assets/mario.png";

export const animation = () => {
  let app = new PIXI.Application({
    width: 256,
    height: 256,
    resizeTo: window,
  });

  const loader = new PIXI.Loader();

  const sprites = {};

  loader.add("bunny", images);

  loader.load((loader, resources) => {
    sprites.mario = new PIXI.Sprite(resources.bunny.texture);
    sprites.mario.x = 300;
    sprites.mario.y = 300;
    sprites.mario.anchor.set(0.5);
    app.stage.addChild(sprites.mario);
  });

  app.ticker.add((delta) => {
    if (sprites.mario) {
      sprites.mario.rotation += delta / 100;
    }
  });

  return app.view;
};

animation.storyName = "2-animation";
