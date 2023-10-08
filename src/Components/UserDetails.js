
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const {userid} = useParams()
  console.log(userid);
  const [empdata, setEmpData] = useState([]);

  useEffect(() => {
    async function getEmpData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=1&id=${userid}`
      );
      const res = await get.json();
      setEmpData(res[0]);
      //console.log(res);
    }
    getEmpData();
  }, []);

  let firstName =""
  let lastName =""
  let email =""
  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <td>Row</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{empdata.firstName}</td>
            <td>{empdata.lastName}</td>
            <td>{empdata.email}</td>
          </tr>        
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
