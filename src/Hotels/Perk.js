import React from "react";

/* functional component
    - accepts a boolean prop `hasPerk`
    - if true, renders a span element
    - if false, doesn't render anything
*/
const Perk = (props) => {
  if (props.hasPerk) {
    return <span className="hotel__perks">{props.perk}</span>;
  } else {
    return null;
  }
};

export default Perk;
