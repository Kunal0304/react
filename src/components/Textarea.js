import React, {useState} from 'react'

export default function Textarea(props) {

    const handleupclick = ()=>{
        let con=text.toUpperCase()
        setText(con)
    }

    const handledownclick = ()=>{
        let con=text.toLowerCase()
        setText(con)
    }
    const handleclearclick =()=>{
        let con=""
        setText(con)
    }
      
    const handlecopy = ()=>{
        const text=document.getElementById('mybox');        
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleextspace = ()=>{
        let ext=text.split(/[ ]+/);
        setText(ext.join(" "))
    }
    
const handleonchange =(event)=>{
    setText(event.target.value)
}
const [text,setText] = useState('');
return (
    <div style={{color: props.mode ==='dark'?'white':'black'}}>
        <div>
            <div className="container mb-3 ">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark'?'#0d2d4c':'white',color: props.mode ==='dark'?'white':'black'}} onChange={handleonchange} id="mybox" rows="10"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleupclick}>convert to uppercase</button>

            <button className='btn btn-primary mx-4' onClick={handledownclick}>convert to lowercase</button>

            <button className='btn btn-primary mx-4' onClick={handleclearclick}>clear</button>

            <button className='btn btn-primary mx-4' onClick={handlecopy}>Copy</button>

            <button className='btn btn-primary mx-4' onClick={handleextspace}>extra space</button>
        </div>
        <div className="container" >
            <h2 >your text summary</h2>
            <p>total text is {text.split(" ").length} and character is{text.length}</p>
            <p>you can read this massage in {.08 * text.split(" ").length} sec</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter your text to preview it here"}</p>
        </div>
        </div>
    )
}
