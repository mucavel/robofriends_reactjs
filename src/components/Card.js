import React from 'react';

const Card = ({name, email, id}) =>{
    return(
        <div className='card bg-light-green dib br3 pa3 ma2 grow tc'>
            <div className='robo-image'>
                <img src={`https://robohash.org/${id}?200x200`} alt='Robot'/>
            </div>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;
