function RepresentativesList({ reprList }) {
  return reprList.map((item) => (
    <div>
      <div className="Representative">
        <div className="Representative-img">
          <img className="Representative-img" src={item.imageUrl} alt="" />
        </div>
        <div className="Representative-text">
          <div>{item.fName + " " + item.lName}</div>
          <div>{item.partei}</div>
        </div>
      </div>
    </div>
  ));
}

export default RepresentativesList;
