import { useState } from "react"
function Header()
{
       const [showMsg, setShowMsg] = useState(false);
    return(
        <>
<div className="d-flex flex-wrap align-item-center  justify-content-between ">
        <h3>Szabist Student portal </h3>
        <button type="button" className="btn btn-info btn-sm fw-bold px-4  rounded-pill" 
        style={{width: 150}}
        onClick={() => setShowMsg(!showMsg)}
        >
            Add student
</button>
</div>
{
    showMsg && (
        <div className="alert alert-info mt-3 role= alert">
         <p> coming soon! this feature under Development</p>
        <button type="button" className ="btn-close float-end "  onClick={() => setShowMsg(false)} ></button>
        </div>
    )
}
        </>
    )
}
export default Header