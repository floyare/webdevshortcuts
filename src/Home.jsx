import CategoryItem from './Components/CategoryItem';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='content__wrapper'>
      <div className="categories__wrapper">
        <div className="categories__container">
          <Link to={"/category/colors"}><CategoryItem icon={<Icon icon="ic:baseline-color-lens"></Icon>} name={'Colors'} color={'151, 20, 31'} /></Link>
          <Link to={"/category/uxui"}><CategoryItem icon={<Icon icon="material-symbols:desktop-mac-outline" />} name={'UX/UI'} color={'121, 80, 21'} /></Link>
          <Link to={"/category/programming"}><CategoryItem icon={<Icon icon="material-symbols:code-blocks" />} name={'Programming'} color={'21, 180, 51'} /></Link>
          <Link to={"/category/assets"}><CategoryItem icon={<Icon icon="entypo:images" />} name={'Assets'} color={'91, 20, 151'} /></Link>
          <Link to={"/category/github"}><CategoryItem icon={<Icon icon="mdi:github" />} name={'Github'} color={'255, 255, 255'} /></Link>
        </div>
      </div>
    </div>
  )
}

export default Home
