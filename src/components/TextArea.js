import React, {useState} from "react"

const TextArea = (props)=>{

    const handleUpClick=()=>{
        // console.log(`onclick is click`)
        setText(text.toUpperCase())
    }
    const clearText=()=>{
      setText(``)
    }

    const handleChange=(e)=>{
        // console.log(`onclick is click2`)
        setText(e.target.value)
    }

    const [text, setText] = useState(``)


    return (
    <>
    <div className='mb-3 container' style={{color : props.mode===`dark`?`white`:`black`}}>
  <h2>{props.heading}</h2>
  <textarea type="email" className="form-control" id="exampleFormControlInput1" value={text} onChange={handleChange} placeholder="name@example.com" rows="5" style={{backgroundColor : props.mode===`dark`?`#c0b3b3`:`white`,color : props.mode===`dark`?`white`:`black` }}></textarea>
  <button className="btn my-3 btn-primary me-2" onClick={handleUpClick}>Convert to upperacse</button>
  <button className="btn my-3 btn-primary" onClick={clearText}>Clear text</button>
  </div>
  <div className='container my-3' style= {{color: props.mode===`dark`?`white`:`black`}}>
    <h2>Your text summary</h2>
    <p>your textarea conatains {text.split(/\s+/).filter((element)=>(element.length!==0)).length} words and {text.length} characters</p>
  </div>
 
    </>
    )
}

TextArea.defaultProps = {
    heading : `Enter text here`
}

export default TextArea