enum Direction {
  up = "Up",
  down = "Down",
  left = "Left",
  right = "Right",
}

function doSomthing(command: Direction): void {
  console.log(`Going ${command}`);
}

doSomthing(Direction.down);
