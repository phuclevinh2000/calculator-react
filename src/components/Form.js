import React from 'react'

const Form = ({result, onChangeHandle}) => {
    return (
        <form>
            <input className="inputArea" type="text" value={result} onChange={onChangeHandle}></input>
        </form>
    )
}

export default Form