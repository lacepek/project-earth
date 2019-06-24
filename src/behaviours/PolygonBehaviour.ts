import Behaviour from './Behaviour';
import { IPoint, Polygon, Buffer, Mesh, Shader, Geometry } from 'pixi.js';

class PolygonBehaviour extends Behaviour {
  private points: number[];

  public constructor(points: number[]) {
    super();
    this.points = points;
  }

  public init() {
    const geometry = new Geometry().addAttribute('aVertexPosition', this.points);

    const shader = Shader.from(
      `

    precision mediump float;
    attribute vec2 aVertexPosition;

    uniform mat3 translationMatrix;
    uniform mat3 projectionMatrix;

    void main() {
        gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    }`,

      `precision mediump float;

    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }

`
    );

    this.gameObject.drawable = new Mesh(geometry, shader);
  }
}

export default PolygonBehaviour;
