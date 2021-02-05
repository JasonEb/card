import React, {useEffect, useState } from "react"
import styled from "styled-components"
import Layout from '../components/layout'
import LandscapeCard from '../components/card/landscapeCard'
import PortraitCard from '../components/card/portraitCard'

export default function Home() {
  const [font, setFont] = useState('Garamond')

  let isLandscape = useMediaQuery('screen and (orientation: landscape)')

  console.log("Landscape: ", isLandscape)

  let card = isLandscape ? <LandscapeCard font={font} style={{fontFamily: font}} /> : <PortraitCard font={font} style={{fontFamily: font}} />

  return <Layout>
    {card}
  </Layout> 
}

//custom hook for detecting device and orientation
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };

    //ToDo: update addListener, it is deprecated
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
