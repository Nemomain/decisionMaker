/* eslint-disable indent */
function simpleProb(object) {
    const { positive, negative } = object
    const res = positive.reduce((partialSum, a) => partialSum + a, 0) - negative.reduce((partialSum, a) => partialSum + a, 0)
    if (res === 0) {
        return 'No Solution'
    } else if (res > 0) {
        return 'Positive'
    } else {
        return 'Negative'
    }
}
module.exports = simpleProb