import Behaviour from '../behaviours/Behaviour';
import { Texture, IPoint } from 'pixi.js';

interface IGameObjectConfig {
  position: IPoint;
  behaviours: Behaviour[];
  isInteractive?: boolean;
  texture?: Texture,
  points?: IPoint[],
}

export default IGameObjectConfig;
