import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'

type Props = {}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h4 className="produt-title">iPhone X</h4>
                <div className="produt-description">This is Iphone X</div>
                <div className="product-product">Type: phone</div>
                <div className="product-features">Capacity: 65GB</div>
                <div className="product-price">$ 500</div>
                <CardActions>
                    <Button variant='contained'>Add to cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ProductListItem
