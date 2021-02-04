import React, {useEffect, useState } from "react"
import styled from "styled-components"
import Layout from '../components/layout'
import LandscapeCard from '../components/card/card'
import Container from '../components/Container'

export default function Home() {
  const font = ['Garamond']

  return <Layout>
    <LandscapeCard font={font} style={{fontFamily: font}} />
  </Layout> 
}

//custom Hook
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    debugger
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
