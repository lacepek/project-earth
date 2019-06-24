import { Vector, Actor } from 'excalibur';
import Behaviour from '../behaviours/Behaviour';
import IActorConfig from '../types/IGameObjectConfig';
import GameService from '../services/GameService';
import IGameObjectConfig from '../types/IGameObjectConfig';

class GameObject {
  private actor: Actor;
  private behaviours: Behaviour[];

  constructor(config?: IActorConfig) {
    this.actor = new Actor();
    this.behaviours = [];

    if (config) {
      this.config(config);
    }
  }

  public update() {
    this.behaviours.forEach(behaviour => {
      behaviour.update();
    });
  }

  public setPosition(position: Vector) {
    this.actor.pos = position;
  }

  public addActor() {
    GameService.addActor(this.actor);
  }

  private config(config: IGameObjectConfig) {
    const { dimensions, color, collisionType, behaviours } = config;
    this.actor = new Actor(dimensions.x, dimensions.y, dimensions.width, dimensions.height, color);

    if (collisionType) {
      this.actor.collisionType = collisionType;
    }

    this.actor.on('predraw', () => {
      this.update();
    })

    this.behaviours = behaviours;

    this.behaviours.forEach(behaviour => {
      return behaviour.setGameObject(this);
    });
  }
}

export default GameObject;
