import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React from 'react'
// import classes from './ProductListItem.module.scss'
import './ProductListItem.scss'

export type ProductProps = {
    id?: number
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

const ProductListItem = ({
    name,
    description,
    type,
    capacity,
    price,
    image,
}: ProductProps) => {
    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <h3 className="produt-title">{name}</h3>
                <div className="produt-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity {capacity} GB</div>
                <div className="product-price">Price: {price} $</div>
                <div className="product-quantity">
                    <Button variant="contained">-</Button>
                    <TextField size="small" value={1} variant="outlined" />
                    <Button variant="contained">+</Button>
                </div>
                <CardActions className="btn-wrap">
                    <Button variant="contained">Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
