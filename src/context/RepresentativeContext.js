import { createContext, useState } from "react";

const RepresentativeContext = createContext();
const jsonData = require("../data/representativesList.json");
//const stringData = JSON.stringify(jsonData);
//const represenativesData = JSON.parse(stringData);
//let dataList = [];
//Object.keys(jsonData).forEach(function (key) {
//let value = jsonData[key];

let mockObject = [
  {
    fullName: "Mauro Risso",
    nationalPoliticalGroup: "lorem Ipsum party",
    constituencyZipCodes: [22222],
    imageUrl:
      "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
  },
  {
    fullName: "Kanye West",
    nationalPoliticalGroup: "Kanye West party",
    constituencyZipCodes: [11111],
    imageUrl:
      "https://image.stern.de/31896734/t/v4/v2/w1440/r1.7778/-/25--rapper-reaktiviert-instagram-account---16-9---spoton-article-1022862.jpg",
  },
  {
    fullName: "Die Mutti",
    nationalPoliticalGroup: "CDU",
    constituencyZipCodes: [33333],
    imageUrl:
      "https://cdn.prod.www.spiegel.de/images/56032691-0001-0004-0000-000001449964_w920_r1.778_fpx49_fpy40.jpg",
  },
  {
    fullName: "Kanye West",
    nationalPoliticalGroup: "Kanye West party",
    constituencyZipCodes: [11111, 22222],

    imageUrl:
      "https://image.stern.de/31896734/t/v4/v2/w1440/r1.7778/-/25--rapper-reaktiviert-instagram-account---16-9---spoton-article-1022862.jpg",
  },
  {
    fullName: "Die Mutti",
    nationalPoliticalGroup: "CDU",
    constituencyZipCodes: [33333],
    imageUrl:
      "https://cdn.prod.www.spiegel.de/images/56032691-0001-0004-0000-000001449964_w920_r1.778_fpx49_fpy40.jpg",
  },
  {
    fullName: "Mauro Risso",
    nationalPoliticalGroup: "lorem Ipsum party",
    constituencyZipCodes: [22222],
    imageUrl:
      "https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg",
  },
];

//dataList.push(mockObject);
//});

export function RepresentativeProvider({ children }) {
  //all methods and states
  const [representatives, setRepresentative] = useState(mockObject);

  return (
    <RepresentativeContext.Provider
      value={{ representatives, setRepresentative }}
    >
      {children}
    </RepresentativeContext.Provider>
  );
}
export default RepresentativeContext;
