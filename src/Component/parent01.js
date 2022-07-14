import Func14 from "./Func14"

function Func13() {

    function fun(Datt) {
        // console.log("kunal")
        alert(Datt)
    }
    return(
        <>        
        <h1>function 13 parent</h1>
        {/* <Func14 name="ram ram"/> */}
        <Func14 altt={fun}/>

        </>

    )
}
export default Func13