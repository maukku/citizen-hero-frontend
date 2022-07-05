function RepresentativeItem({ representatives }) {
  return representatives.map((item) => (
    <div className="Politicians">
      <div className="Representative">
        <div className="Representative-img">
          <img className="Representative-img" src={item.imageUrl} alt="" />
        </div>
        <div className="Representative-text">
          <div>{item.fullName}</div>
          <div>{item.nationalPoliticalGroup}</div>
        </div>
      </div>
    </div>
  ));
}

export default RepresentativeItem;
