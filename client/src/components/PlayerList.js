import React from 'react';


export default class PlayerList extends React.Component {


render() {

    return (
<div className="playerListContainer">

<h2>{this.props.theplayers.name}</h2>
<p>{this.props.theplayers.country}</p>
<p>{this.props.theplayers.searches}</p>


</div>

  
);
}
}