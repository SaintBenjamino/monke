/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Jungle background",
        "./Stage/costumes/Jungle background.svg",
        { x: 300.2552552552552, y: 225.1914414414415 }
      )
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.myVariable = 0;
    this.vars.cloneId = 1;
    this.vars.loved = 0;
    this.vars.love = false;
    this.vars.faved = 0;
    this.vars.fav = false;
    this.vars.dVel = 0;
    this.vars.yVel = 0;
  }
}
