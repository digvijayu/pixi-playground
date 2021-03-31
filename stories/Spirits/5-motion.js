import * as PIXI from "pixi.js";

import images from "../../assets/mario.png";

export const motion = () => {
  let app = new PIXI.Application({
    width: 256,
    height: 256,
    resizeTo: window,
  });

  const loader = new PIXI.Loader();

  const sprites = {};

  loader.add("mario", images);

  loader.load((loader, resources) => {
    sprites.mario = new PIXI.Sprite(resources.mario.texture);
    sprites.mario.x = 300;
    sprites.mario.y = 300;
    sprites.mario.pivot.x = sprites.mario.width / 2;
    sprites.mario.pivot.y = sprites.mario.height / 2;
    app.stage.addChild(sprites.mario);
  });

  app.ticker.add(() => {
    if (sprites.mario) {
      if (sprites.mario.x > window.innerWidth) sprites.mario.x = 0;
      sprites.mario.x += 1;
    }
  });

  return app.view;
};

motion.storyName = "5-motion";
