import "../css/styles.css";
import { useEffect, useState } from "react";
import FilterSlider from "../FilterSlider";
import { useFetchAge } from "../hooks/fetchAge";

const Dashboard = () => {
  const headers = ["Id", "Name", "Gender", "Age", "Address", "Phone"];
  const URL = `http://hapi.fhir.org/baseR4/Patient?_pretty=true`;
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(0);
  const actualData = useFetchAge(URL, minVal, maxVal);
  const [filteredData, setFilteredData] = useState(actualData);
  useEffect(() => {
    let dataCopy = [];
    actualData.forEach((item) => {
      let temp = { ...item };
      temp.age = item?.age === 0 ? "NA" : item.age;
      if (item.age >= minVal && item.age <= maxVal) {
        dataCopy.push(temp);
      }
    });
    setFilteredData(dataCopy);
  }, [actualData, maxVal, minVal]);
  const getRange = (min, max) => {
    setMinVal(min);
    setMaxVal(max);
  };
  return (
    <div className="filterCont">
      <div className="fliterSlide">
      <h4>Filter by age</h4>
      <FilterSlider getRange={getRange} />
      </div>
      <div className="mainContainer">
        <div className="mainContainer-inner">
          <table className="table">
            <thead className="tableHeader">
              <tr>
              {headers.map((item) => (
                  <th
                    key={item}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 &&
                filteredData.map((item) => (
                  <tr key={item.id}>
                    {item &&
                      Object.keys(item).map((x) => (
                        <td>{item[x]}</td>
                      ))}
                  </tr>
                ))}
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
