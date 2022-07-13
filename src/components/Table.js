function Table()
{
    const Infoo = [
        {
            im: "one",
            ser: "Superman",
            Alpha:11
        },
        {
            im: "two",
            ser: "lusifer"
        },
        {
            im: "three",
            ser: "Dark",
            Alpha:22

        },
        {
            im: "four",
            ser: "Extra Curricular",
            Alpha:33

        },
        {
            im: "five",
            ser: "Stranger Things",
            Alpha:44

        },
        {
            im: "six",
            ser: "Black Friday",
            Alpha:55

        },
        {
            im: "seven",
            ser: "Chup Chupke",
            Alpha:66
        },
        {
            im: "eight",
            ser: "All The Best",
            Alpha:77

        }
    ]


    // let data = 0;
    // let card;
    // for (let index = 0; index < 20; index++) {
    //     card =   <tr>
    //         <td>"item "+ { data}</td>
    //      {/* <td>1</td>
    //      <td>one</td>          */}
    //     </tr>
    //     console.log(card,"hello");
        
    // }


//     if (10 === data ) {
//         card =   <tr>
//          <td>"item "+ data</td>
//          <td>1</td>
//          <td>one</td>
//         </tr>
//         console.log(card,"hello");
//         data++
// }

    fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(json => console.log(json))


    return (
        <>
    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
         {/* <td>{ response.name}</td> */}
         {/* <td>{response.id}</td> */}
         {/* <td>{json}</td>          */}
  </tr>

</table>

        </>
   );
}

export default Table;