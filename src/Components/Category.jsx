import { useHistory, useParams } from "react-router-dom";
import WebsiteItem from "./WebsiteItem";
import { Icon } from '@iconify/react';
import websitesStatic from '../Websites.json';
import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const {name} = useParams();
  const history = useHistory();
  const [websites, setWebsites] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setWebsites(websitesStatic.filter(x => x.category === name));
    setIsLoading(false);
  },[])

  return ( 
    <div className="websites__wrapper">
      <button className="btn no-background" onClick={() => {history.push('/')}}><Icon icon="grommet-icons:revert" /> Go back</button>
      <div className="websites__container">
        {isLoading && <div className="loading__indicator">
          <div className="cube"><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>}
        {(websites && websites.length === 0) && <h4>No websites in this category :(</h4>}
        {websites && websites.map((web) => {
          return(
            <WebsiteItem data={web} key={web.id}/>
          );
        })}
      </div>
    </div>
  );
}
 
export default Category;