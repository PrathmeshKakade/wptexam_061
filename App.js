import { useState } from "react";

import axios from "axios";

export default function App() {
  return (
    <div>
      <MyFun />
    </div>
  );
}

function MyFun() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    setMsg(e.target.value);
  };

  const sendMsg = () => {
    const newList = [...list, msg];
    setList(newList);

    setMsg("");
  };

  return (
    <div className="container-fluid">
      <div className="row text-light bg-dark p-3 sticky-top ">
        <div className="col">My Chat App</div>
        <div className="col">By - Gaurav sonawane_042_Kh</div>
      </div>
      <div className="row mt-3">
        <input
          className="col-9 form-control-lg mx-3"
          type="text"
          value={msg}
          placeholder="Lets chat here.."
          onChange={handleInput}
        />
        <input className="col-2" type="button" value="Send" onClick={sendMsg} />
      </div>
      {list.map((item, index) => (
        <div key={index} className="form-control my-3 alert-info">
          {item}
        </div>
      ))}
    </div>
  );
}
