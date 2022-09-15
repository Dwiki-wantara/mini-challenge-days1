import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DataAcccount from "../../pages/Dummy/dummy_data.json";

let Account = () => {
let navigate = useNavigate();
let {id} = useParams();

let [data, setData] = useState({});

useEffect(() => {
  setData(DataAcccount.find((data) => data.id == id));
}, []);

  return (
    <div style={{marginTop:"30px"}}>
      <div className="row" style={{padding:"0px 400px"}}>
        <div style={{ backgroundColor:"white", padding:"10px"}}>
          <div className="flex-column align-items-center" style={{bagroundColor:"white", display:"flex"}}>
            <img src={data.image} width={200} height={190} className="rounded-circle"/>
            <p style={{fontSize:"30px"}} >@{data.username}</p>
            <div className="d-flex">
              <div className="flex-column" style={{display:"flex", textAlign:"center",margin:"5px"}}>
                <p style={{fontSize:"25px"}}>Followers</p>
                <p style={{fontWeight:"bold"}}>{data.follower}</p>
              </div>
              <div className="flex-column"style={{display:"flex", textAlign:"center",margin:"5px"}}>
                <p style={{fontSize:"25px"}}>Following</p>
                <p style={{fontWeight:"bold"}}>{data.following}</p>
              </div>
            </div>
              <button  onClick={() => navigate("/")}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
