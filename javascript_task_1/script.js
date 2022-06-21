const A = [100, 200, 100, 150];
const B = [50, 100, 100, 120];

// const X = 95;
// const Y = 100;

const X = 100;
const Y = 100;

// const X = 140;
// const Y = 110;

// const X = 300;
// const Y = 110;


function inRange(x, min, max) {
  return (x - min) * (x - max) <= 0;
}

function solution(A, B, X, Y) {
  let cases = [];
  let index;
  for (let i = 0; i < A.length; i++) {
    cases.push(
      inRange(X, A[i] - 10, A[i] + 10) && inRange(Y, B[i] - 10, B[i] + 10)
    );
  }

  for (let i = 0; i < cases.length; i++) {
    // console.log(cases);

    if (cases[i] == true) {
      index = i;
      break;
    }
  }

  if (index + 1) {
    return index;
  }
  if (index === undefined) {
    return -1;
  }
}

// solution(A, B, X, Y);
console.log(solution(A, B, X, Y));
