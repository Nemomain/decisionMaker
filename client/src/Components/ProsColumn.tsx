


export default function ProsColumn({ identity, rowNum, setRowNum }) {

    function renderNewRow() {
        setRowNum(rowNum + 1)
    }

    function eraseRow() {
        if (rowNum > 1) setRowNum(rowNum - 1)
    }

    return (
        <div>
            <button type="button" onClick={renderNewRow}> + </button>
            <button type="button" onClick={eraseRow}> - </button>
            {Array.from({ length: rowNum }, (val, ind) => (
                <div key={ identity + ind } className="">
                    <input type="text" name={ identity + 'name' + ind } placeholder={ identity + ind }/>
                    <input type="number" name={ identity + 'num' + ind } placeholder={rowNum} />
                </div>
            ))}
        </div>
    )
}