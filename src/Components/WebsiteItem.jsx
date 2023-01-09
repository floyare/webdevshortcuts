import faviconFetch from 'favicon-fetch';
import analyze from 'rgbaster-plus'
import { useState, useEffect } from 'react';
const WebsiteItem = ({data}) => {
  const [color, setColor] = useState(null);
  const [iconSrc, setIconSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const setFavIcon = async (url) => {
    const result = await faviconFetch({hostname: url, size: 'small'});
    setIconSrc(result);
  }

  const setMainColor = async (url) => {
    const result = await analyze(url, { ignore: ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(1,1,1)"] })
    const modColor = result[0].color.replace('rgb(', '').replace(')', '');
    setColor(modColor);
    setIsLoading(false);
  }

  useEffect(() => {
    setFavIcon(data.name)
  }, []);

  useEffect(() => {
    if(iconSrc !== null){
      setMainColor(iconSrc);
    }
  }, [iconSrc]);

  return (
    <a href={data.url} target="_blank">
      <div className="website__box" key={data.id} style={
        {
          background: `linear-gradient(135deg, rgba(155,155,155,0.1) ${isHovered ? '30%' : '40%'}, rgba(${color}, 0.4) ${isHovered ? '100%' : '100%'}`, 
          filter: isHovered ? 
            `drop-shadow(1px 1px 5px rgba(${color}, 0.4))` 
            : 
            ''
        }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {isLoading && <div className="loading__indicator">
          <div className="cube"><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>}
        <div className="icon__container">
          <img src={iconSrc} crossOrigin="anonymous" placeholder='blur'></img>
        </div>
        <div className="details__container">
          <p className='website__name'>{data.name}</p>
          <p className='website__desc'>{data.description}</p>
        </div>
      </div>
    </a>
  );
}
 
export default WebsiteItem;