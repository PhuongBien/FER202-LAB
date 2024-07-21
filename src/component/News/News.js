import React, { useContext, useState } from 'react'
import {Tab, Tabs } from 'react-materialize'
import './News.css'
import { ThemeContext } from '../ThemeContext'

export default function News() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div >
            <Tabs
                className={`tab-demo z-depth-1 ${dark ? 'news-header-dark' : 'news-header-light'}`}
                scope="tabs-22"
            >
                <Tab
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false,
                    }}
                    title={<div className={`${dark ? 'news-header-dark' : 'news-header-light'}`}>News 1</div>}
                    className={`news-content ${dark ? 'news-header-dark' : 'news-header-light'}`}
                >
                    <div className={`news-info ${dark ? 'news-header-dark' : 'news-header-light'}`}>
                    HOT!!! A new orchid species named Dendrobium farinatum has been discovered and confirmed as endemic to Vietnam, specifically in Hon Ba conservation area, Khanh Hoa.
                    </div>
                    
                </Tab>
                <Tab
                    active
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title={<div className={`${dark ? 'news-header-dark' : 'news-header-light'}`}>News 2</div>}
                    className={`news-content ${dark ? 'news-header-dark' : 'news-header-light'}`}
                >
                    <div className={`news-info ${dark ? 'news-header-dark' : 'news-header-light'}`}>
                    Found a new species of orchid with fragile pink and white petals like "woven from glass"<br/>
                    
                    </div>
                </Tab>
                <Tab
                    options={{
                        duration: 300, //thời lượng chuyển tab = 3s
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title={<div className={`${dark ? 'news-header-dark' : 'news-header-light'}`}>News 3</div>}
                    className={`news-content ${dark ? 'news-header-dark' : 'news-header-light'}`}
                >
                    <div className={`news-info ${dark ? 'news-header-dark' : 'news-header-light'}`}>
                    A pot of mutant Dendro orchids by an artist in Long An province won a special prize
                    </div>
                </Tab>
                
            </Tabs>
        </div>
    )
}
