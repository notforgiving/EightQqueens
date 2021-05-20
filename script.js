let size = 8;
let queens = Array(size);
for (let c = 0; c < size; c++) queens[c] = 0;
let nSolutions = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let random = getRandomInt(1, 92)

Solve();

function Solve(n) {
  if (n === undefined) n = 0;
  if (n >= size) {
    if (nSolutions++ === random) Show();
    return;
  }
  for (let r = 0, c; r < size; r++) {
    for (c = 0; c < n; c++)
      if (queens[c] === r || Math.abs(queens[c] - r) === n - c) break;
    if (c === n) {
      queens[n] = r;
      Solve(n + 1);
    }
  }
}

function Show() {
  document.write('<div class="board">');
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      let ch = queens[c] === r ? "&#9899;" : " ";
      let knd = 'class="cell ' + ((r + c) % 2 ? 'black"' : 'white"');
      document.write("<div ", knd, ">", ch, "</div>");
    }
    document.write("<br>");
  }
  document.write("</div>");
}


