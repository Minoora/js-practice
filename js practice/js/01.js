countTheLetter("Count The Letter The Practice For Daneshkar Bootcamp");
function countTheLetter(str) {
  const letterCount = [...str].reduce((prev, cur) => {
    if (cur in prev) {
      prev[cur]++;
    } else {
      prev[cur] = 1;
    }
    return prev;
  }, {});

  console.log(letterCount);
}
