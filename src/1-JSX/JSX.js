import React from 'react'

const JSX = () => {
    const myElement = <h1>I love JSX</h1>
    const myElement2 = <h1>React is {5 + 5} times better with JSX</h1>
    const myElement3 = (
        <ul>
            <li>Aplee</li>
            <li>bananas</li>
            <li>cherries</li>



        </ul>
    )

    const myElement4 = <input type="text"/>
    const myElement5 = <h1 className="myclass">hello world</h1>

    const x=11
    const myElement6= <h1>{x<10 ? "x 10 dan küçüktür" : "x 10 dan büyüktür"}</h1>
  return (
    <div>
        {myElement}
        {myElement2}
        {myElement3}
        {myElement4}
        {myElement5}
        {myElement6}
        {myElement6}
        <h1>{x<10 ? "x 10 dan küçüktür" : "x 10 dan büyüktür"}</h1>
    </div>
  )
}

export default JSX
