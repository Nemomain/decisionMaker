import { useState } from "react";

export default function Result({result}) {

const impossible = result.impossible
const {Important, Mid, Meh} = result


return (
<>
{console.log(result.rush.meh)}
{console.log({result})}

{Object.entries(result.impossible).length > 0 && <p>

{Object.entries(impossible).map(([key, value]) => 
<span key={key}>{key+', '}</span>

)}is/are Impossible</p>}

{Object.entries(result.rush).length > 0 && <p>

{Object.entries(result.rush.important).map(([key, value]) => 
<span key={key}>{key+', '}</span>)}


{Object.entries(result.rush.mid).map(([key, value]) => 
<span key={key}>{key+', '}</span>)}


{Object.entries(result.rush.meh).map(([key, value]) => 
<span key={key}>{key+', '}</span>

)}is/are rush</p>}

{Object.entries(result.noRush).length > 0 && <p>

{Object.entries(result.noRush.important).map(([key, value]) => 
<span key={key}>{key+', '}</span>

)}
{Object.entries(result.noRush.mid).map(([key, value]) => 
<span key={key}>{key+', '}</span>

)}
{Object.entries(result.noRush.meh).map(([key, value]) => 
<span key={key}>{key+', '}</span>

)}is/are NoRush</p>}



</>


)
}