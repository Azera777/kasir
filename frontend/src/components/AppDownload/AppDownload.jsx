import React from 'react'
import "./AppDownload.css";
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better experience download <br /> Caffeine App </p>
        <div className="app-download-platforms">
            <img src={assets.googleplay} alt="" />
            <img src={assets.appstore} alt="appstore" />
        </div>
    </div>
  )
}

export default AppDownload