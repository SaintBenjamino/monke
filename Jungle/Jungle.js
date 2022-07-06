/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Jungle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Jungle/costumes/costume1.svg", {
        x: 411.32445355090016,
        y: 375.98837162493464
      })
    ];

    this.sounds = [new Sound("pop", "./Jungle/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Restart" },
        this.whenIReceiveRestart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Next Level" },
        this.whenIReceiveNextLevel
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.direction = 90;
    this.goto(-10, -500);
    this.stage.vars.dVel = 0;
    this.stage.vars.yVel = 0;
    while (true) {
      this.stage.vars.yVel += 1;
      if (
        this.keyPressed("right arrow") ||
        (this.mouse.x > this.x && this.mouse.down)
      ) {
        this.stage.vars.dVel += -0.2;
      }
      if (
        this.keyPressed("left arrow") ||
        (this.x > this.mouse.x && this.mouse.down)
      ) {
        this.stage.vars.dVel += 0.2;
      }
      this.stage.vars.dVel = this.stage.vars.dVel * 0.8;
      this.direction += this.stage.vars.dVel;
      if (this.touching(this.sprites["Player"].andClones())) {
        this.y += -1;
        if (this.touching(this.sprites["Player"].andClones())) {
          this.y += -1;
          if (this.touching(this.sprites["Player"].andClones())) {
            this.y += -1;
            if (this.touching(this.sprites["Player"].andClones())) {
              this.y += -1;
              if (this.touching(this.sprites["Player"].andClones())) {
                this.y += 4;
                this.direction += this.stage.vars.dVel * -1;
                this.stage.vars.dVel = 0;
              }
            }
          }
        }
      }
      this.y += this.stage.vars.yVel;
      if (this.touching(this.sprites["Player"].andClones())) {
        this.y += this.stage.vars.yVel * -1;
        this.stage.vars.yVel = 0;
      }
      this.y += 1;
      if (this.touching(this.sprites["Player"].andClones())) {
        if (
          this.keyPressed("up arrow") ||
          (this.mouse.y > 50 && this.mouse.down)
        ) {
          yield* this.startSound("Jump");
          this.stage.vars.yVel = -12;
        }
      }
      this.y += -1;
      yield;
    }
  }

  *whenIReceiveRestart() {
    this.direction = 90;
    this.goto(-10, -500);
    this.stage.vars.dVel = 0;
    this.stage.vars.yVel = 0;
  }

  *whenIReceiveNextLevel() {
    this.direction = 90;
    this.goto(-10, -500);
    this.stage.vars.dVel = 0;
    this.stage.vars.yVel = 0;
    this.costumeNumber += 1;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.visible = true;
      yield;
    }
  }
}
