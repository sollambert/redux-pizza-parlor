import {useState} from 'react';
import './PizzaItem.css';
import { useDispatch } from 'react-redux';

function PizzaItem({pizza}) {

    const [added, setAdded] = useState(false);
    const dispatch = useDispatch();

    //handles click of add/remove button
    const handleClick = () => {
        setAdded(!added);
        dispatch({type: 'ADD_TO_CART' , payload: pizza});
        dispatch({type: 'REMOVE_FROM_CART' , payload: pizza});
    }



    return (
        <div className='pizza-item'>
            <img className='pizza-img' src={pizza.image_path}/>
            <h1>{pizza.name}</h1>
            {pizza.description}
            <h3>{pizza.price}</h3>
            <button onClick={handleClick}>{added ? "Remove" : "Add"}</button>
        </div>
    )

}

export default PizzaItem;