import React, {useState} from "react"
// import PropType from "prop-types"

const Navbar=(props)=>{

  // const [mode, setMode] = useState(`light`)

  // const handleMode=()=>{
  //   if(mode==`light`){
  //     setMode({})
  //   }
  // }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
        </li>
      </ul>
      <div className="d-flex">
      <div onClick={()=>{props.changeMode(`danger`)}} style={{width:`25px`, height:`25px`, cursor:`pointer`}} className="bg-danger me-2"></div>
      <div onClick={()=>{props.changeMode(`info`)}} style={{width:`25px`, height:`25px`, cursor:`pointer`}} className="bg-info me-2"></div>
      <div onClick={()=>{props.changeMode(`success`)}} style={{width:`25px`, height:`25px`, cursor:`pointer`}} className="bg-success me-2"></div>
      <div onClick={()=>{props.changeMode(`warning`)}} style={{width:`25px`, height:`25px`, cursor:`pointer`}} className="bg-warning me-2"></div>
      </div>
      <div className={`form-check form-switch mx-3 text-${props.mode===`light`?`dark`:`light`}`}>
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
    <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable {props.mode===`light`?`dark`:`light`} Mode</label>
    </div>
    </div>
  </div>
</nav>
)
  }

Navbar.defaultProps = {
  name  : `set Title here`
}

export default Navbar