import Addheader from './components/Addheader';
import './App.css';
import ShowItem from './components/Showitem';
import dataItem from './data/items';
import {useState} from 'react'
import ShowPost from './components/ShowPost'
import Search from './components/Search';


function App() {
  const [selectedItem,setSelectedItem] = useState(null);
  const [searchText,setSearchText] =useState('');

  function onItemopenClick(theItem) {
    setSelectedItem(theItem);
  }

  function onItemCloseItem () {
    setSelectedItem(null);
  }

  const showItems = dataItem.filter((itemShow)=>{
    return itemShow.title.includes(searchText);
  }).map((itemShow,index)=>{
    return <ShowItem key = {index} itemShow={itemShow} onClickItem = {onItemopenClick}/>;
  });

  let showPost = null;
  if(!!selectedItem){
    showPost = <ShowPost itemShow ={selectedItem} onItemClose = {onItemCloseItem}/>
  }

  return (
    <div className="App">
              <Addheader/>
                <Search value = {searchText} onChangeText = {setSearchText}/>
                      <div className = 'app-grid'> 
                        {showItems}      
                      </div>
                        {showPost}
                 
    </div>
  );
}

export default App;
