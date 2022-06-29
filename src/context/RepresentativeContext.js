import { createContext, useState } from "react";

const RepresentativeContext = createContext();
const jsonData = require("../data/representativesList.json");
//const stringData = JSON.stringify(jsonData);
//const represenativesData = JSON.parse(stringData);
let dataList = [];
Object.keys(jsonData).forEach(function (key) {
  let value = jsonData[key];

  let mockObject = {
    fullName: value.fullName,
    nationalPoliticalGroup: value.nationalPoliticalGroup,
    imageUrl: value.imageUrl,
  };

  dataList.push(mockObject);
});

dataList = dataList.slice(0, 10);

export function RepresentativeProvider({ children }) {
  //all methods and states
  const [representatives, setRepresentative] = useState(dataList);

  return (
    <RepresentativeContext.Provider value={{ representatives }}>
      {children}
    </RepresentativeContext.Provider>
  );
}
export default RepresentativeContext;
