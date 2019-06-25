import Behaviour from '../behaviours/Behaviour';
import IActorConfig from '../types/IGameObjectConfig';
import IGameObjectConfig from '../types/IGameObjectConfig';
import { Sprite, IPoint, DisplayObject } from 'pixi.js';
import Game from '../Game';
import SpriteBehaviour from '../behaviours/SpriteBehaviour';
import TransformBehaviour from '../behaviours/TransformBehaviour';

class GameObject {
  public drawable: DisplayObject;
  private behaviours: Behaviour[];

  constructor(config?: IActorConfig) {
    this.drawable = new DisplayObject();
    this.behaviours = [];

    if (config) {
      this.config(config);
    }
  }

  public awake(): void {
    this.behaviours.forEach(behaviour => {
      behaviour.awake();
    });
  }

  public update(): void {
    this.behaviours.forEach(behaviour => {
      behaviour.update();
    });
  }

  private config(config: IGameObjectConfig): void {
    const { position, behaviours, isInteractive } = config;

    this.behaviours = behaviours;

    this.behaviours.push(new TransformBehaviour(position));

    this.behaviours.forEach(behaviour => {
      behaviour.setGameObject(this);
      behaviour.init();
      behaviour.postInit();
      Game.addUpdate(() => {
        behaviour.update();
      });
    });
    
    console.log({ gameObject: this, drawable: this.drawable });
    if (isInteractive) {
      this.drawable.interactive = true;
    }
  }
}

export default GameObject;
