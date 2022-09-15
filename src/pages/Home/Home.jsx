import { React,  useState } from "react";
import { Link } from "react-router-dom";
import Dummy from "../../pages/Dummy/dummy_data.json";
import Module from "../Home.module.css"

let Home = () => {
let [DataHome , setDataHome] = useState(Dummy);

return (
<div style={{marginTop:"50px"}}>
  <div className={Module.justifyCenter}>
      <div style={{width:"100%"}} >
        <ul >{DataHome.map((Dummy) => (
          <li   style={{marginBottom:"15px", borderRadius:"15px",padding:"20px",backgroundColor:"white"}}>
            <Link  key={Dummy.id} to={`/account/${Dummy.id}`}style={{textDecoration:"none"}} >
              <div className={Module.flex}>
                <img src={Dummy.image} alt="image" width={60} className="rounded-pill" style={{marginLeft:"10x"}} />
                  <div style={{marginLeft:"10px"}}
                    ><h5>@{Dummy.username}</h5><p style={{margin:"auto",padding:"auto"}}>Followers: {Dummy.follower}</p>
                  </div>
              </div>
            </Link>
          </li>))}
        </ul>
    </div>
  </div>
</div>
  );
};

export default Home;
