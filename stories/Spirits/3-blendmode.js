import * as PIXI from "pixi.js";

import images from "../../assets/mario.png";

export const blendmode = () => {
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

    sprites.mario.tint = 0xaaee99;
  });

  return app.view;
};

blendmode.storyName = "3-blendmode";
