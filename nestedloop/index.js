for (let f = 1; f <= 10; f++) {
  let bag = "";
  for (let s = 1; s <= 10; s++) {
    if (f == 1 || f == 10) {
      bag += "*";
    } else {
      if (s == 1 || s == 10) {
        bag += "*";
      } else {
        bag += " "
      }
    }
  } console.log(bag);
}
