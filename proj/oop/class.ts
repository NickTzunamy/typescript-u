class Shape {
  public locationX: number = 0;
  public locationY: number = 0;
  public height: number = 0;
  public width: number = 0;
  constructor() {}
  public draw() {}
  public resize(height: number, width: number) {
    this.height = height;
    this.width = width;
  }
  public move(x: number, y: number) {
    this.locationX = x;
    this.locationY = y;
  }
}
var shapeInstance = new Shape();
var otherShape = new Shape();
shapeInstance.move(30, 35);
otherShape.resize(15, 15);
