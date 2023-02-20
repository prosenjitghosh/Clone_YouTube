import React from 'react';
import { ButtonList } from './ButtonList';
import { VideoContainer } from './VedioContainer';

export default function MainContainer() {
  return (
        <div className="basis-full pl-6 pt-2">
            <ButtonList/>
            <VideoContainer/>
        </div>
  )
}
