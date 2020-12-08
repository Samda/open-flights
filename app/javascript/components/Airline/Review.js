import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
    border: 1px solid #ddd;
    bodrer-radius: 4px;
    padding: 20px;
    margin: 10px 20px 20px 10px;
`

const Title = styled.div`
    padding: 20px 0 0 0;
    font-size: 18px;
`

const Description = styled.div`
    padding: 20px 0 0 0;
    font-size: 14px;

`

const RatingContainer = styled.div`
    padding: 0 0  20px 0;
    font-size: 14px;
`

const Review = (props) => {

    const { score, title, description }  = props.attributes

    return (
        <Card>
            <div className="rating-container">
                <Rating score={score} />
            </div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </Card>
    )
}

export default Review