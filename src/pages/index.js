import React, {useEffect, useState } from "react"
import styled from "styled-components"
import Layout from '../components/layout'
import CardContainer from '../components/card/cardContainer'

import SEO from '../components/seo'

export default function Home() {

  let isLandscape = useMediaQuery('screen and (orientation: landscape)')

  return <Layout>
    <SEO />
    <CardContainer isLandscape={isLandscape} />
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
