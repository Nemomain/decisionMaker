import { useState } from "react";
import { planner } from "../../../utils/Planning.js"


export default function ComplexProb() {
    const [rowNum, setRowNum] = useState(3)

    function renderNewRow() {
        setRowNum(rowNum + 1)
    }

    function eraseRow() {
        if (rowNum > 1) setRowNum(rowNum - 1)
    }

    function submit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const parsedData = Object.fromEntries(formData.entries())
        const result = {};

        for (const [key, value] of Object.entries(parsedData)) {
            if (key.match(/^name(\d+)$/)){
                const match = key.match(/^(name)(\d+)$/)
                const name = value.replace(' ', '_')
                if (!result[name]){
                    result[name] = {
                        priority: parsedData["prio" + match[2]],
                        timeNeeded: parsedData["needT" + match[2]],
                        timeAvailable: parsedData["availT" + match[2]]
                    }
                }
                
            }
        }
        console.log(planner(result))
    }

    return (
        <form action="#" onSubmit={submit}>
            <button type="button" onClick={renderNewRow}> + </button>
            <button type="button" onClick={eraseRow}> - </button>
            <table>
                <tr>
                    <td>Name</td>
                    <td>Priority</td>
                    <td>Time Needed</td>
                    <td>Time Available</td>
                </tr>
                {Array.from({ length: rowNum }, (val, ind) => (
                    <tr key={"CompProbRow" + ind}>
                        <td><input type="text" name={'name' + ind} required /></td>
                        <td><input type="number" name={'prio' + ind} required /></td>
                        <td><select name={'needT' + ind} required>
                            <option value="1">0 - 1 days</option>
                            <option value="2">2 - 7 days</option>
                            <option value="3">1 - 2 weeks</option>
                            <option value="4">3 - 4 weeks</option>
                            <option value="5">1 - 3 months</option>
                            <option value="6">3 - 6 monts</option>
                            <option value="7">&lt; 1 year</option>
                            <option value="8">&gt; 1 year</option>
                        </select></td>
                        <td><select name={'availT' + ind} required>
                            <option value="1">0 - 1 days</option>
                            <option value="2">2 - 7 days</option>
                            <option value="3">1 - 2 weeks</option>
                            <option value="4">3 - 4 weeks</option>
                            <option value="5">1 - 3 months</option>
                            <option value="6">3 - 6 monts</option>
                            <option value="7">&lt; 1 year</option>
                            <option value="8">&gt; 1 year</option>
                        </select></td>
                    </tr>

                ))}
            </table>
            <input type="submit" />
        </form>
    )
}