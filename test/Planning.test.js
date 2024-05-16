/* eslint-disable indent */
/* eslint-disable no-undef */
const planner = require('../utils/Planning')

test('basic planning', () => {
    const input = {
        wat:
        {
            name: 'Prob1',
            priority: 2,
            timeNeeded: 2,
            timeAvailable: 2
        },
        wet:
        {
            name: 'Prob2',
            priority: 7,
            timeNeeded: 1,
            timeAvailable: 2
        },
        wit: {
            name: 'Prob3',
            priority: 9,
            timeNeeded: 4,
            timeAvailable: 2
        },
        wot: {
            name: 'Prob4',
            priority: 6,
            timeNeeded: 6,
            timeAvailable: 7
        }
    }
    const output = {
        impossible: {
            wit: {
                name: 'Prob3',
                priority: 9,
                timeNeeded: 4,
                timeAvailable: 2
            }
        },
        rush: {
            mid: [{
                name: 'Prob2',
                priority: 7,
                timeNeeded: 1,
                timeAvailable: 2
            }, {
                name: 'Prob4',
                priority: 6,
                timeNeeded: 6,
                timeAvailable: 7
            }], meh: {
                name: 'Prob1',
                priority: 2,
                timeNeeded: 2,
                timeAvailable: 2
            }
        },
        noRush: {}
    }
    expect(planner(input)).toEqual()
})

test.skip('basic no solution', () => {
    expect(planner({ positive: [1, 5, 6, 7, 8, 2], negative: [2, 9, 3, 10, 5] })).toBe('No Solution')
})

test.skip('basic negative', () => {
    expect(planner({ positive: [1, 5, 6, 7], negative: [2, 9, 2, 10, 5] })).toBe('Negative')
})