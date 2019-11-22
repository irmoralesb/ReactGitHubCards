import React from 'react'
import Card from './card'

const CardList = (props) => (
    <div>
        {props.profileList.map(profile => <Card key={profile.id} profile={profile} />)}
    </div>
);

export default CardList;