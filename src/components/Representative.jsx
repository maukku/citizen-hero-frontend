

function Representative({representative}) {

  return (
    <>
      <img src={representative.imageUrl} alt="" />
      <p>{representative.fName + " " + representative.lName}</p>
      <p>{representative.partei}</p>
      <p>{representative.role}</p>
      
    </>
  )
}

export default Representative;
