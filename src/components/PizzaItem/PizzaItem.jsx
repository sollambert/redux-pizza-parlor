import {useState} from 'react';
import './PizzaItem.css';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



function PizzaItem({pizza}) {

    const [added, setAdded] = useState(false);
    const dispatch = useDispatch();
    

    //handles click of add/remove button
    const handleClick = () => {
        setAdded(!added);

        if (added) {
            dispatch({type: 'REMOVE_FROM_CART' , payload: pizza})
        } else {
            (dispatch({type: 'ADD_TO_CART' , payload: pizza}))
        }
    }


    // return (
    //     // <>
    //     // <div className='pizza-item'>
    //     //     <img className='pizza-img' src={pizza.image_path}/>
    //     //     <h1>{pizza.name}</h1>
    //     //     {pizza.description}
    //     //     <h3>{pizza.price}</h3>
    //     //     <button onClick={handleClick}>{added ? "Remove" : "Add"}</button>

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={pizza.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={pizza.image_path}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {pizza.description} 
        </Typography>
        <Typography fontWeight='bold'>
        {pizza.price}
        </Typography>
        <Button variant="outlined" 
        onClick={handleClick}>{added ? "Remove" : "Add"} </Button>
      </CardContent>
    </Card>
  );
}


export default PizzaItem;