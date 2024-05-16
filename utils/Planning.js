/* eslint-disable indent */
function planner(object) {
    const impossible = {}
    const rush = {}
    const noRush = {}
    for (const [key, value] of Object.entries(object)) {
        if (value.timeNeeded > value.timeAvailable) {
            impossible[key] = value
        } else {
            if (value.priority > 7)
            switch (value) {
                // Rush
                case value.priority > 7 && (value.timeNeeded - value.timeAvailable) < 2:
                    rush.important.push(value)
                    break
                case value.priority > 3 && (value.timeNeeded - value.timeAvailable) < 2:
                    rush.mid.push(value)
                    break
                case value.timeNeeded - value.timeAvailable < 2:
                    rush.meh.push(value)
                    break
                // Norush
                case value.priority > 7:
                    noRush.important.push(value)
                    break
                case value.priority > 3:
                    noRush.mid.push(value)
                    break
                default:
                    noRush.meh.push(value)
                    break
            }
        }
    }
    return { impossible: impossible, rush: rush, noRush: noRush }
}

module.exports = planner