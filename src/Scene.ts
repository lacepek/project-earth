import { Container } from 'pixi.js';
import GameObject from './actors/GameObject';
import Game from './Game';
import IScene from './types/IScene';

class Scene {
  public container: Container;
  private gameObjects: GameObject[];

  constructor() {
    this.gameObjects = [];
    this.container = new Container();
    this.container.x = 0;
    this.container.y = 0;
    this.container.width = Game.getScreen().width;
    this.container.height = Game.getScreen().height;
  }

  public update() {
    this.gameObjects.forEach(gameObject => {
      gameObject.update();
    });
  }

  public addChild(gameObject: GameObject) {
    gameObject.init();
    if (gameObject.drawable) {
      this.container.addChild(gameObject.drawable);
      gameObject.awake();
    }
  }

  public load(config: IScene) {
    this.gameObjects = config.gameObjects.map(config => {
      return new GameObject(config);
    });

    for (let i = 0; i < this.gameObjects.length; i++) {
      const gameObject = this.gameObjects[i];
      this.addChild(gameObject);
    }
  }
}

export default Scene;
