import './ShowPost.css';

function ShowPost (props) {

    const {itemShow , onItemClose } = props
    return (
        <div className = 'show-post'>
            <div className = 'show-post-bg' onClick={onItemClose}/>
            <div className = 'show-post-conent'>
                <img src = {itemShow.picture}/>
                <h4>{itemShow.title}</h4>
            </div>
        </div>
    ); 
}
export default ShowPost;