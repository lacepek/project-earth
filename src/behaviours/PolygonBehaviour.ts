import Behaviour from './Behaviour';
import { Buffer, Mesh, Shader, MeshGeometry, DRAW_MODES } from 'pixi.js';

class PolygonBehaviour extends Behaviour {
  private points: number[];

  public constructor(points: number[]) {
    super();
    this.points = points;
  }

  public init() {
    const index = [];
    for(let i = 0; i < (this.points.length / 2) - 2; i++) {
      index.push(0);
      index.push(i + 1);
      index.push(i + 2);
    }
    const geometry = new MeshGeometry(new Float32Array(this.points), new Float32Array([0,0,1,0,1,1,0,1]), new Uint16Array(index));

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
        gl_FragColor = vec4(1.0, 0.0, 0.0, 0.5);
    }

`
    );

    const mesh = new Mesh(geometry, shader);
    console.log(mesh.geometry);
    mesh.drawMode = DRAW_MODES.TRIANGLE_FAN;

    this.gameObject.drawable = mesh;
  }
}

export default PolygonBehaviour;
