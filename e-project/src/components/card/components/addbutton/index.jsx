import Button from '../../../button'
import { addToCard } from '~/stores/cart/actions'

function AddButton({item}) {
    const addProduct = (item) => {
        addToCard(item);
    };
    return(
    <>
    <Button
        onClick={() =>  (
            addProduct(item) 
        ) } 
        size='full'
        >
        Add to cart
    </Button>
    </>    
    )
}

export default AddButton