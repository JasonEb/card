import React, {useEffect, useState } from "react"
import LandscapeCard from './landscapeCard'
import PortraitCard from './portraitCard'

const CardContainer = ({isLandscape}) => {
    const [font, setFont] = useState('Garamond')

    let card = isLandscape ? <LandscapeCard font={font} style={{fontFamily: font}} /> : <PortraitCard font={font} style={{fontFamily: font}} />
    
    return card
}

export default CardContainer