import React from 'react'

const BasicCom = ({clear,minus,percent,handleClick,calculate}) => {
    return (
        <div>
            <div className="inputpad">
            <button onClick={clear} id="whiteBtn">AC</button>
            <button id="whiteBtn" onClick={minus}>+/-</button>
            <button onClick={percent} id="whiteBtn">%</button>
            <button name="/" onClick={handleClick} id="operator" className="yellow">&divide;</button>
            <button name="7" onClick={handleClick} className="number">7</button>
            <button name="8" onClick={handleClick} className="number">8</button>
            <button name="9" onClick={handleClick} className="number">9</button>
            <button name="*" onClick={handleClick} id="operator" className="yellow">&times;</button>
            <button name="4" onClick={handleClick} className="number">4</button>
            <button name="5" onClick={handleClick} className="number">5</button>
            <button name="6" onClick={handleClick} className="number">6</button>
            <button name="-" onClick={handleClick} id="operator" className="yellow">&ndash;</button>
            <button name="1" onClick={handleClick} className="number">1</button>
            <button name="2" onClick={handleClick} className="number">2</button>
            <button name="3" onClick={handleClick} className="number">3</button>
            <button name="+" onClick={handleClick} id="operator" className="yellow">+</button>
            <button name="0" onClick={handleClick} id="zero" className="number">0</button>
            <button name="." onClick={handleClick} className="number">,</button>
            <button onClick={calculate} id="operator" className="yellow">=</button>
      </div>
        </div>
    )
}

export default BasicCom
