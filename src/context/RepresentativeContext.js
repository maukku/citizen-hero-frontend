import { createContext, useState,  useEffect} from "react";

const RepresentativeContext = createContext();





//dataList.push(mockObject);
//});

export function RepresentativeProvider({ children }) {






  //all methods and states
  const [representatives, setRepresentative] = useState([]);
useEffect(()=>{
getData();
}, [])


const url = "https://polar-mountain-34312.herokuapp.com/representatives";
 const getData=()=>{
fetch(url).then((res)=>res.json())
.then((data)=>{
let representativesData = data.map((item)=>({
fullName:item.fullName,
nationalPoliticalGroup: item.nationalPoliticalGroup,
constituencyZipCodes: item.constituencyZipCodes,
imageUrl: item.imageUrl,

}));
setRepresentative(representativesData.slice(0,20));
}

)};



  return (
    <RepresentativeContext.Provider
      value={{ representatives, setRepresentative }}
    >
      {children}
    </RepresentativeContext.Provider>
  );
}
export default RepresentativeContext;
