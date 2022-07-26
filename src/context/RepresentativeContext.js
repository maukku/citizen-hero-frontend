import { createContext, useState, useEffect } from "react";

const RepresentativeContext = createContext();

//dataList.push(mockObject);
//});

export function RepresentativeProvider({ children }) {
  const [loading, setLoading] = useState(false);
  //all methods and states
  const [representatives, setRepresentative] = useState([]);
  useEffect(() => {
    getData();
    <h1>Loading..</h1>;
  }, []);

  const url = "https://polar-mountain-34312.herokuapp.com/representatives";
  const getData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let representativesData = data.map((item) => ({
          fullName: item.fullName,
          nationalPoliticalGroup: item.nationalPoliticalGroup,
          constituencyZipCodes: item.constituencyZipCodes,
          imageUrl: item.imageUrl,
        }));
        setLoading(true);
        setRepresentative(representativesData);
      });
  };

  return (
    <RepresentativeContext.Provider
      value={{ representatives, setRepresentative, loading }}
    >
      {children}
    </RepresentativeContext.Provider>
  );
}
export default RepresentativeContext;
