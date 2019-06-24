import Behaviour from './Behaviour';
import { Vector } from 'excalibur';

class Paddle extends Behaviour {
  public update() {
    this.setPosition(new Vector(15, 150));
  }
}

export default Paddle;
