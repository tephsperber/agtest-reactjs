import React from "react";

//Import css
import "./ItemDetail.css";

//Import Card and Image
import { Image, Card } from "semantic-ui-react";

export function ItemDetail({ getItems }) {
  return (
    <div className="centerItem">
      <div className="itemDetail">
        <div className="imgItem">
          <Image src={getItems.picture} />
        </div>
        <Card.Header className="cardHeaderItem">{getItems.title}</Card.Header>
        <Card.Description className="cardDescriptionItem">
          {getItems.description}
        </Card.Description>
        <Card.Description className="cardDescriptionItem">
          {getItems.certificate}
        </Card.Description>
        <Card.Description className="cardDescriptionItem">
          Precio correspondiente a domicilio dentro de{" "}
          <span className="spanItem">{getItems.location}</span>.
        </Card.Description>
        <Card.Meta className="cardPriceItem">
          <div className="textPrice">${getItems.price}</div>
        </Card.Meta>
      </div>
    </div>
  );
}

export default ItemDetail;
