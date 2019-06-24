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

  public init() {
    this.behaviours.forEach(behaviour => {
      behaviour.init();
    });
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
    const { position, behaviours } = config;

    // this.position = new TransformBehaviour(position);

    this.behaviours = behaviours;

    // this.behaviours.push(this.position);

    this.behaviours.forEach(behaviour => {
      behaviour.setGameObject(this);

      Game.addUpdate(() => {
        behaviour.update();
      });
    });

    if (this.drawable) {
      this.drawable.position = position;
    }
  }
}

export default GameObject;
