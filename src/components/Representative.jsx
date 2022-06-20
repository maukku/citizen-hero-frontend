function Representative({ representative }) {
  return (
    <div className="Representative">
      <div className="Representative-img">
        <img
          className="Representative-img"
          src={representative.imageUrl}
          alt=""
        />
      </div>
      <div className="Representative-text">
        <div>{representative.fName + " " + representative.lName}</div>
        <div>{representative.partei}</div>
      </div>
    </div>
  );
}

export default Representative;
