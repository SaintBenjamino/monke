import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Jungle from "./Jungle/Jungle.js";
import Player from "./Player/Player.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Jungle: new Jungle({
    x: -10,
    y: -393,
    direction: 129.06524950715166,
    costumeNumber: 1,
    size: 200,
    visible: true
  }),
  Player: new Player({
    x: 0,
    y: 0,
    direction: -90,
    costumeNumber: 1,
    size: 30,
    visible: true
  }),
  Thumbnail: new Thumbnail({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
