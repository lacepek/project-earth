import Game from '../Game';
import { Color, CollisionType } from 'excalibur';
import Paddle from '../behaviours/Paddle';

const testScene = {
  gameObjects: [
    {
      dimensions: { x: 150, y: Game.drawHeight - 500, width: 200, height: 20 },
      color: Color.Chartreuse,
      collision: CollisionType.Fixed,
      behaviours: [new Paddle()]
    }
  ]
};

export default testScene;
