import React, { useState } from 'react';
import { InfoIcon, DownArrowIcon } from '../assets/icons';
import Countdown from './Countdown';
import './Banner.css'
import './BannerExpanded.css'

export default function Banner() {
    const date = new Date("2022-12-05");
    const enddate = date.toLocaleDateString('en-US', {
        dateStyle: 'long'
    });
    const [expand, setExpand] = useState();
    return (
        <>
            <div className={expand ?  'banner collapse' : 'banner expand'}>
                <div className='banner-main-content'>
                    <div className='banner-content'>
                        <InfoIcon />
                        <div className='banner-text-content'>
                            <p className='banner-text'>My React App will be updated at {enddate}</p>
                            <a className='github-repo' href='https://github.com/amiralariska/my-react-app-web' target='_blank' rel='noopener noreferrer'>Please check this github repo</a>
                        </div>
                    </div>
                    <button className='expand-btn' onClick={() => {
                        setExpand(!expand)
                    }}>
                        <DownArrowIcon />
                    </button>
                </div>
                <Countdown />
            </div>
        </>
    )
}