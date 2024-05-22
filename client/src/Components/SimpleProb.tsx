import ProsColumn from "./ProsColumn"
import { useState } from "react";
// @ts-ignore
import {simpleProb} from "../../../utils/ProblemBool.js"


export default function SimpleProb() {
    const [rowNum, setRowNum] = useState(3)
    const [rowNum2, setRowNum2] = useState(3)
    //testing var
    const [msg, setMsg] = useState('')

    function submit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const parsedData = Object.fromEntries(formData.entries())
        const negative = []
        const positive = []
        for (const [name, value] of Object.entries(parsedData)) {
            if (/pronum/i.test(name)) positive.push(value)
            if (/connum/i.test(name)) negative.push(value)
        }
        setMsg(simpleProb({ positive, negative }))
    }

    return (
        <>
            <form action="#" onSubmit={submit}>
                <ProsColumn identity={"pro"} rowNum={rowNum} setRowNum={setRowNum}></ProsColumn>
                <ProsColumn identity={"con"} rowNum={rowNum2} setRowNum={setRowNum2}></ProsColumn>
                <input type="submit" />
            </form>
        </>
    )
}