import Behaviour from './Behaviour';
import { Texture, Sprite, interaction } from 'pixi.js';

class SpriteBehaviour extends Behaviour {
  private texture: Texture;

  public constructor(texture: Texture) {
    super();
    this.texture = texture;
  }

  public init() {
    this.gameObject.drawable = Sprite.from(this.texture);
  }
}

export default SpriteBehaviour;
