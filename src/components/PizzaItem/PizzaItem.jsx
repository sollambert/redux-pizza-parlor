import {useState} from 'react';
import './PizzaItem.css';

function PizzaItem({pizza}) {

    const [added, setAdded] = useState(false);

    //handles click of add/remove button
    const handleClick = () => {
        setAdded(!added);
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