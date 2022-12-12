import'./Showitem.css';
function ShowItem (props) {
    const {itemShow , onClickItem} = props
    return (
                <div classNmae = "shoes-item">
                    <img src = {itemShow.picture} onClick ={()=>{onClickItem(itemShow)}}  className = 'item1' />  
                    <h4>{itemShow.title}</h4>
                  </div>
    );
}
export default ShowItem;

