import { createContext, useState } from "react";

const RepresentativeContext = createContext();
const jsonData = require("../data/representativesList.json");
//const stringData = JSON.stringify(jsonData);
//const represenativesData = JSON.parse(stringData);
let myArray = [];
Object.keys(jsonData).forEach(function (key) {
  let value = jsonData[key];

  let mockObject = {
    fullName: value.fullName,
    nationalPoliticalGroup: value.nationalPoliticalGroup,
    imageUrl: value.imageUrl,
  };

  myArray.push(mockObject);
});

myArray = myArray.slice(0, 10);

export function RepresentativeProvider({ children }) {
  //all methods and states
  const [representative, setRepresentative] = useState(myArray);

  return (
    <RepresentativeContext.Provider value={{ representative }}>
      {children}
    </RepresentativeContext.Provider>
  );
}
export default RepresentativeContext;
