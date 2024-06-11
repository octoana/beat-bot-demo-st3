// create a unit test for the searchMatrix function using the Jest testing framework
//  write 3 test cases to test the searchMatrix function

const searchMatrix = require("./searchMatrix");

test("searchMatrix function is defined", () => {
  expect(searchMatrix).toBeDefined();
});

test("searchMatrix function returns true", () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  const target = 3;
  const result = searchMatrix(matrix, target);
  expect(result).toBe(true);
});

test("searchMatrix function returns false", () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  const target = 13;
  const result = searchMatrix(matrix, target);
  expect(result).toBe(false);
});

test("searchMatrix function returns false", () => {
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  const target = 100;
  const result = searchMatrix(matrix, target);
  expect(result).toBe(false);
});