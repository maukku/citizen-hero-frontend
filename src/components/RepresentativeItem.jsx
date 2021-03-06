function RepresentativeItem({ representatives }) {
  return representatives.map((item) => (
    <div className="Representative ">
      <div className="Representative-img">
        <img
          className="Representative-img"
          src={item.imageUrl}
          alt={item.fullName}
        />
      </div>
      <div className="Representative-text">
        <div>{item.fullName}</div>
        <div>{item.nationalPoliticalGroup.toString()}</div>
      </div>
    </div>
  ));
}

export default RepresentativeItem;
