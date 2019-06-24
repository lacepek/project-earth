import worldMap from '../textures/world-map';
import { Texture } from 'pixi.js';
import SpriteBehaviour from '../../behaviours/SpriteBehaviour';
import PolygonBehaviour from '../../behaviours/PolygonBehaviour';

const testScene = {
  gameObjects: [
    {
      position: { x: 1000, y: 1000 },
      behaviours: [new SpriteBehaviour(Texture.from(worldMap))]
    },
    {
      position: { x: 400, y: 300 },
      behaviours: [new PolygonBehaviour([-100, -50, 100, -50, 0, 100])]
    }
  ]
};

export default testScene;
