/* eslint-disable no-undef */
const simpleProb = require('../utils/ProblemBool')

test.skip('basic positive', () => {
  expect(simpleProb({positive: [1, 5, 6, 7, 8, 2.5], negative: [2, 9, 2, 10, 5]})).toBe('Positive')
})

test.skip('basic no solution', () => {
  expect(simpleProb({positive: [1, 5, 6, 7, 8, 2], negative: [2, 9, 3, 10, 5]})).toBe('No Solution')
})

test.skip('basic negative', () => {
  expect(simpleProb({positive: [1, 5, 6, 7], negative: [2, 9, 2, 10, 5]})).toBe('Negative')
})