import React from 'react'

const TypeBadge = ({offerAdvert}) => {
    
    if (offerAdvert === true) {
        return (
            <span>
                Ofrecen
            </span>
        )
    }else{
        return(
            <span>
                Buscan
            </span>
        )
    }
}

export default TypeBadge