import React from 'react';

function FreeDeliveryMsg() {
  const freeDeliveryMsg = 'Parabéns, sua compra tem frete grátis !';

  return (
    <span
      data-testid="free-delivery-msg"
      className="free-delivery-msg"
    >
      {`${freeDeliveryMsg}`}
    </span>
  );
}

export default FreeDeliveryMsg;
