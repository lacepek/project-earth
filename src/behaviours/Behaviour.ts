import { Vector } from 'excalibur';
import GameObject from '../actors/GameObject';

class Behaviour {
  protected gameObject: GameObject;

  constructor() {
    this.gameObject = new GameObject();
  }

  public awake() {}

  public update() {}

  public setGameObject(gameObject: GameObject) {
    this.gameObject = gameObject;
  }

  protected setPosition(position: Vector) {
    this.gameObject.setPosition(position);
  }
}

export default Behaviour;
