import React from 'react'
import Card from './card'

const CardList = (props) => (
    <div>
        {props.profileList.map(profile => <Card profile={profile} />)}
    </div>
);

export default CardList;