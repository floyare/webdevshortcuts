import { useEffect, useState } from "react";
import axios from "axios";
const Navbar = () => {
  const [isDev, setIsDev] = useState(false);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('uxui');
  const [uploaded, setUploaded] = useState(false)

  useEffect(() => {
    setIsDev(!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
  },[])

  const addWebsite = () => {
    setUploaded(false)
    axios.get('https://api.jsonbin.io/v3/b/63bc0fda15ab31599e31dbca', {headers: {
      'X-Master-Key': import.meta.env.VITE_JSON_MASTER_KEY
    }}).then((res) => {
      const websites = res.data.record;
      const lastWebsite = websites[websites.length - 1];
      const newWebsite = {
        id: lastWebsite.id + 1,
        name: name,
        url: url,
        category: category,
        description: description
      }
      websites.push(newWebsite);
      axios.put('https://api.jsonbin.io/v3/b/63bc0fda15ab31599e31dbca', websites, {headers: {
        'X-Master-Key': import.meta.env.VITE_JSON_MASTER_KEY,
        'Content-Type': 'application/json'
      }},).then((res) => {
        setUploaded(true)
      })
    })
  }

  return (
    <>
      <div className="landing__wrapper">
        <div className="landing__container">
          <div className="landing__box">
            <div className="landing__object">
              <img src="/public/icon.png"></img>
            </div>
            <div className="landing__object">
              <h1>WebDevShortcuts</h1>
              <p>Website with everything you need to be better at web development.</p>
            </div>
            {isDev && 
              <>
                <input type="text" placeholder="name" onInput={(e) => {setName(e.target.value)}}></input>
                <input type="text" placeholder="url" onInput={(e) => {setUrl(e.target.value)}}></input>
                <input type="text" placeholder="description" onInput={(e) => {setDescription(e.target.value)}}></input>
                <select onChange={(e) => {console.log(e.target.options[e.target.selectedIndex].value); setCategory(e.target.options[e.target.selectedIndex].value)}}>
                  <option value="uxui">UxUi</option>
                  <option value="colors">colors</option>
                  <option value="programming">programming</option>
                  <option value="assets">assets</option>
                  <option value="github">github</option>
                </select>
                <button onClick={addWebsite}>add</button>
                {uploaded && <p style={{color: 'lightgreen'}}>Uploaded</p>}
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Navbar;