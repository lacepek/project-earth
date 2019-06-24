import { Actor } from 'excalibur';
import IActorConfig from '../types/IGameObjectConfig';
import Behaviour from '../behaviours/Behaviour';

class LoadService {
  public static loadGameObject(config: IActorConfig): { actor: Actor; behaviours: Behaviour[] } {
    const { dimensions, color, collisionType, behaviours } = config;
    const actor = new Actor(dimensions.x, dimensions.y, dimensions.width, dimensions.height, color);

    if (collisionType) {
      actor.collisionType = collisionType;
    }

    return { actor, behaviours };
  }

  public static loadGameObjects(configs: IActorConfig[]) {
    return configs.map(config => {
      return this.loadGameObject(config);
    });
  }
}

export default LoadService;
