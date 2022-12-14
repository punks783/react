import React from 'react'
import styled from 'styled-components'
import VID from '../assets/HomeVideo.mp4'

const VideoContainer = styled.div`
width: 100%;

video{
  width: 100%;
  height: auto;
}
`
const CoverVideo = () => {
  return (
    <VideoContainer>
    <video src={VID} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  )
}

export default CoverVideo