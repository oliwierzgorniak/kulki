// https://github.com/fireship-io/163-typescript-decorators-examples/blob/master/src/app/ice-cream/ice-cream.component.ts
function RotateLeft() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const result = original.apply(this, ["rotate(-90deg)"]);
      return result;
    };
    return descriptor;
  };
}

export default class Board {
  @RotateLeft()
  static rotate(rotation: string = "rotate(90deg)") {
    const boardElement: boardElementType = document.querySelector("#board");
    if (!boardElement) {
      console.error("!this.boardElement is true");
      return;
    }
    boardElement.style.transform = rotation;
  }
}
