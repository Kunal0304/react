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
    const handlefirclick =()=>{
        let te=text.charAt(0)
        let con=te.toUpperCase()
        setText(con + text.slice(1))
    }
    
    const handlecapclick =()=>{
        const words=text.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }              
    }

//     function uppercase(text)
// {
//   var array1 = text.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));
    
    const handleextspace = ()=>{
        let ext=text.split(/[ ]+/);
        setText(ext.join(" "))
    }
    
const handlecopy = ()=>{
    const text=document.getElementById('mybox');        
    text.select();
    navigator.clipboard.writeText(text.value);
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

            <button className='btn btn-primary mx-4' onClick={handlefirclick}>Manage</button>

            <button className='btn btn-primary mx-4' onClick={handlecapclick}>Capitalize</button>

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
