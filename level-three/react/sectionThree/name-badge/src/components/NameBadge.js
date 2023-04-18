export default function NameBadge(props) {
    const index = props.index;
    const isEven = index % 2 === 0;
    const backgroundColor = isEven ? 'lightblue' : 'pink';
  
    const badgeStyle = {
      backgroundColor: backgroundColor,
    };
  
    return (
      <div className="name-badge-div">
        <h4 className="badgeTitle" style={badgeStyle}>Badge:</h4>
        <div className="name-badge">
          <p className="fullName">
            <b>Name:</b> {props.formData.fname} {props.formData.lname}
          </p>
          <p className="phoneNumber">
            <b>Phone:</b> {props.formData.phone}
          </p>
          <p className="placeOfBirth">
            <b>Place of Birth:</b> {props.formData.birthPlace}
          </p>
          <p className="favFood">
            <b>Favorite Food:</b> {props.formData.food}
          </p>
          <p className="emailAddress">
            <b>Email:</b> {props.formData.email}
          </p>
          <div className="enteredDescrip">{props.formData.description}</div>
        </div>
      </div>
    );
  }
  