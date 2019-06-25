import GameObject from '../actors/GameObject';
import { IPoint, interaction } from 'pixi.js';

class Behaviour {
  protected gameObject: GameObject;

  constructor() {
    this.gameObject = new GameObject();
  }

  public init(): void {}

  public postInit(): void {
    if (this.gameObject.drawable) {
      const event = 'pointertap';
      this.gameObject.drawable.on(event, this.onClick);
    }
  }

  public awake(): void {}

  public update(): void {}

  public setGameObject(gameObject: GameObject): void {
    this.gameObject = gameObject;
  }

  protected onClick = (event: interaction.InteractionEvent) => {
    console.log(this.gameObject);
  };
}

export default Behaviour;
