import './Search.css'

import { FaSearch } from "react-icons/fa";
function Search (props) {

    const {value , onChangeText} = props;
    return (
        <div className='search'>
                <FaSearch size='2rem'/><input className='search-input'
                  type = 'text'
                  placeholder='กรอกชื่อสินค้าที่ต้องการ'
                  value={value}
                  onChange={(e)=>{onChangeText(e.target.value)}}
                  />
              </div>
    );
}
export default Search;