import { Application, Rectangle } from 'pixi.js';
import { Viewport } from 'pixi-viewport';
import GameConfig from './config/game.config';
import IScene from './types/IScene';
import Scene from './Scene';

class Game {
  public static application: Application;
  public static scene: Scene;
  private static viewport: Viewport;

  public static init() {
    this.application = new Application(GameConfig);
    this.viewport = new Viewport({
      screenWidth: this.application.screen.width,
      screenHeight: this.application.screen.height,
      ...GameConfig.world,
      interaction: this.application.renderer.plugins.interaction
    });

    this.application.stage.addChild(this.viewport);

    this.viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate();

    this.scene = new Scene();
  }

  public static start() {
    const root = document.getElementById('root') as HTMLElement;
    root.appendChild(this.application.view);
  }

  public static setScene(config: IScene) {
    this.viewport.removeChildren();

    this.scene = new Scene();
    this.scene.load(config);

    this.viewport.addChild(this.scene.container);
  }

  public static addUpdate(updateFunction: () => void) {
    this.application.ticker.add(updateFunction);
  }

  public static getScreen(): Rectangle {
    return this.application.screen;
  }
}

export default Game;
