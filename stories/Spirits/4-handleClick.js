import * as PIXI from "pixi.js";

import images from "../../assets/mario.png";

export const handleClick = () => {
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

    sprites.mario.interactive = true;
    sprites.mario.pointer = "cursor";
    sprites.mario.click = (e) => {
      sprites.mario.pivot.x += 20;
    };
  });

  return app.view;
};

handleClick.storyName = "4-handleClick";
