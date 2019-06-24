import { Color, CollisionType } from 'excalibur';
import IDimensions from './IDimensions';
import Behaviour from '../behaviours/Behaviour';

interface IGameObjectConfig {
  dimensions: IDimensions;
  color: Color;
  collisionType: CollisionType;
  behaviours: Behaviour[];
}

export default IGameObjectConfig;
