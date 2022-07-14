import { useState } from "react";

function Todo02() {
    const [input, setInput] = useState()
    const [count, setCount] = useState([])
    const [edit,setEdit] =useState(true)
    const [lis,setlis] =useState("")

    function Save(e) {
        setInput(e.target.value)
        console.log(input)
    }

    function Add() {
        setCount([...count, input])
        console.log(count)
    }

    function Delet(id) {
        console.log(id,"hhhh")
        const remove =count.filter((t)=>
        {return t.id!=id
    })
        setCount(remove)
}


    return (
        <>
            <input type="text" onChange={Save}></input>
            <button onClick={Add}>Add</button>
            {
                count.map((e, i) => {
                    return (
                        <div key={i}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td width="230px"><input value={e} readOnly={edit} ></input></td>
                                        <td><button onClick={()=>{setEdit(!edit)}}>Edit</button></td>
                                        <td><button onClick={()=>{Delet(e.i);}}>Delete</button></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                }
                )
            }
        </>
    )
}
export default Todo02;