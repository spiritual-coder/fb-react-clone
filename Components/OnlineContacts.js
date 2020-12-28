import React from "react";
function OnlineContacts({ contactsName, contactsImage }) {
  return (
    <>
      <div className="contactBand">
        <div className="contactImg">
          <img alt="contactsImage." src={contactsImage} />
        </div>
        <div className="contactNm">
          <h3>{contactsName}</h3>
        </div>
      </div>
    </>
  );
}

export default OnlineContacts;
