/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fantasia1", "./Player/costumes/fantasia1.svg", {
        x: 72.8235740172399,
        y: 97.19688988671429
      })
    ];

    this.sounds = [new Sound("pop", "./Player/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "respawn" },
        this.whenIReceiveRespawn
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.y += -5;
      if (this.touching(Color.rgb(255, 0, 0))) {
        this.broadcast("Restart");
        for (let i = 0; i < 10; i++) {
          this.effects.ghost += 25;
          yield;
        }
        for (let i = 0; i < 10; i++) {
          this.effects.ghost += -25;
          yield;
        }
      }
      this.y += 5;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.goto(0, 0);
  }

  *whenIReceiveRespawn() {
    this.effects.ghost = 100;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += -10;
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.y += -5;
      if (this.touching(Color.rgb(255, 0, 0))) {
        this.broadcast("Restart");
      }
      this.y += 5;
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    if (this.touching(Color.rgb(0, 255, 156))) {
      this.broadcast("you won");
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      this.y += -5;
      if (this.touching(Color.rgb(255, 0, 187))) {
        this.broadcast("Restart");
      }
      this.y += 5;
      yield;
    }
  }
}
