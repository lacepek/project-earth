import worldMap from '../textures/world-map';
import { Texture } from 'pixi.js';
import SpriteBehaviour from '../../behaviours/SpriteBehaviour';
import PolygonBehaviour from '../../behaviours/PolygonBehaviour';

const testScene = {
  gameObjects: [
    {
      position: { x: 400, y: 300 },
      isInteractive: true,

      behaviours: [new SpriteBehaviour(Texture.from(worldMap))]
    },
    {
      position: { x: 400, y: 300 },
      isInteractive: true,
      behaviours: [
        new PolygonBehaviour([
          25,
          -25,
          -60,
          -125,
          -15,
          -133,
          15,
          -105,
          25,
          -117,
          65,
          -110,
          75,
          -70,
          100,
          -35,
          125,
          -35,
          110,
          -5,
          85,
          20,
          90,
          60,
          70,
          75
        ])
      ]
    }
  ]
};

export default testScene;
