import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  let login = true;
  let baseNum = 10;
  let IncNumBy = 4;
  let DecNumBy = 2;
  const [num, setNum] = useState(baseNum);
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);

  function Inc(n) {
    setNum(num + n);
  }

  function Dec(n) {
    setNum(num - n);
  }

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
      //console.log(res);
    }
    getData();
    document.title = `${state} Employees Online`;
  }, [state]);
  //above is called on Dependency

  return (
    <div>
      {/* {(() => {
        if (login) {
          return <h1>Login Allowed</h1>;
        } else {
          return <h1>Login Not Allowed</h1>;
        }
      })()} */}
      <h1>{num}</h1>
      {/* onClick={Inc} ==== For without param passing */}
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => setNum(num + IncNumBy)}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => Dec(DecNumBy)}
      >
        Decrement
      </button>
      <button
        type="button"
        className="btn btn-info"
        onClick={() => setState(state + 2)}
      >
        Click Me {state}
      </button>
      <table>
        <thead>
          <tr>
            <td>Row</td>
            <td>Fisrt Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td> <Link to={`/app/${element.id}`}>{element.firstName}</Link> </td>
                <td>{element.lastName}</td>
                <td>{element.email}</td>
              </tr>
            );
          })}
          <Outlet/>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
