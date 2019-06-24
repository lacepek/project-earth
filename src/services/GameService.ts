import Game from '../Game';
import testScene from '../scenes/test-scene';
import { Actor } from 'excalibur';
import GameObject from '../actors/GameObject';
import IScene from '../types/IScene';

class GameService {
  public static init() {
    this.setScene(testScene);
  }

  public static start () {
    Game.start();
  }

  public static setScene(scene: IScene) {
    scene.gameObjects.forEach(config => {
      const gameObject = new GameObject(config);
      gameObject.addActor();
    });
  }

  public static addActor(actor: Actor) {
    Game.add(actor);
  }

  public static addActors(actors: Actor[]) {
    actors.forEach(actor => {
      this.addActor(actor);
    });
  }
}

export default GameService;
