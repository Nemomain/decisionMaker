/* eslint-disable indent */
export function planner(object) {
    const impossible = {}
    const rush = { important: {}, mid: {}, meh: {} }
    const noRush = { important: {}, mid: {}, meh: {} }

    for (const [key, value] of Object.entries(object)) {
        if (value.timeNeeded > value.timeAvailable) {
            impossible[key] = value
        } else {
            console.log("need", value.timeNeeded, "avail", value.timeAvailable)
            if (value.priority > 7 && (value.timeAvailable - value.timeNeeded) <= 2){
                rush.important[key] = value
            } else if (value.priority > 3 && (value.timeAvailable - value.timeNeeded) <= 2) {
                rush.mid[key] = value
            } else if ((value.timeAvailable - value.timeNeeded) <= 2){
                rush.meh[key] = value
            } else if (value.priority > 7) {
                noRush.important[key] = value
            } else if (value.priority > 3) {
                noRush.mid[key] = value
            } else {
                noRush.meh[key] = value
            }
        }
    }
    return { impossible: impossible, rush: rush, noRush: noRush }
}

//module.exports = planner