import { useHistory, useParams } from "react-router-dom";
import WebsiteItem from "./WebsiteItem";
import { Icon } from '@iconify/react';
import websites from '../Websites.json';
import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const {name} = useParams();
  const history = useHistory();
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://api.jsonbin.io/v3/b/63bc0fda15ab31599e31dbca', {headers: {
      'X-Master-Key': import.meta.env.VITE_JSON_MASTER_KEY
    }}).then((res) => {
      console.warn(res)
      const result = res.data.record.filter(x => x.category === name);
      setCategories(result);
      setIsLoading(false);
    })
  },[])

  return ( 
    <div className="websites__wrapper">
      <button className="btn no-background" onClick={() => {history.push('/')}}><Icon icon="grommet-icons:revert" /> Go back</button>
      <div className="websites__container">
        {isLoading && <div className="loading__indicator">
          <div className="cube"><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>}
        {(categories && categories.length === 0) && <h4>No websites in this category :(</h4>}
        {categories && categories.map((web) => {
          return(
            <WebsiteItem data={web} key={web.id}/>
          );
        })}
      </div>
    </div>
  );
}
 
export default Category;