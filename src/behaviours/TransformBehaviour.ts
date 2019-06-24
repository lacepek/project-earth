import Behaviour from './Behaviour';
import { Point } from 'pixi.js';

class TransformBehaviour extends Behaviour {
  private position: Point;

  public constructor(position?: Point) {
    super();
    this.position = position ? position : new Point(0, 0);
  }

  public init() {
    if (this.gameObject.drawable) {
      this.gameObject.drawable.position = this.position;
    }
  }

  public update() {
    if (this.gameObject.drawable) {
      this.gameObject.drawable.position = this.position;
    }
  }

  public set(position: Point): void {
    this.position = position;
  }

  public get(): Point {
    return this.position;
  }
}

export default TransformBehaviour;
