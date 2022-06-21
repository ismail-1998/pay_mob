function solution(num) {
  for (let row = 0; row < num; row++) {
    for (let col = 0; col < row; col++) {
      console.log("L");
    }
    console.log("\n");
  }
}

solution(4);
