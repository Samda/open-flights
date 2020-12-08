import React, { Fragment } from 'react'
import styled from 'styled-components'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'

const RatingContainer = styled.div`
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 40px 0 10px 0;
    border: 1px solid #e6e6e6;
    background: #fff;
`
const RatingBox = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    position: relative;
    input {
        display: none;
    }
    label {
        cursor: pointer;
        width: 40px;
        height: 40px;
        background-image: url("data:image/svg+xml;charset=UTF-8, ${Gray}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 60%;
    }

    input:checked ~ label,
    input:checked ~ label ~ label {
        background-image: url("data:image/svg+xml;charset=UTF-8, ${Selected}");
    }

    input:not(:checked) ~ label:hover,
    input:not(:checked) ~ label:hover ~ label {
        background-image: url("data:image/svg+xml;charset=UTF-8, ${Selected}");
    }
`

const Field = styled.div`
    border-radius: 4px;
    margin: 0 auto;
    input {
        min-height: 50px;
        border-radius: 4px;
        border: 1px solid #e6e6e6;
        margin: 12px 0;
        padding: 12px;
        width: 95%;

    }

    textarea {
        row: 20;
        min-height: 100px;
        border-radius: 4px;
        border: 1pxx solid #e6e6e6;
        margin: 12px 0;
        padding: 12px;
        width: 95%;
    }
`

const Wrapper = styled.div`
    padding: 20px;
    background: #000;
    height: 100vh;
    padding-top: 100px;
`

const SubmitBtn = styled.div`
    button {
        color: #fff;
        background: #009999;
        border-radius: 4px;
        padding: 12px;
        font-size: 18px;
        cursor: pointer;
        transition: ease-in-out 0.1s;
        width: 100%;
        margin-top: 20px;
        box-sizing: border-box;
        margin-bottom: 20px;
        border: none;
    }
    
    button:hover {
        background: #009678;
        color: #fff;
        border: none;
    }
`

const Headline = styled.div`
    padding: 20px;
    font-size: 20px;
    font-weight: bold;   
    color: #fff; 
`

const RatingTitle = styled.div`
    font-size: 20px;
    padding-bottom: 20px;
    font-weight: bold;
    width: 100%
`


const ReviewForm = (props) => {

    const ratingOptions = [5,4,3,2,1].map( (score, index) => {
        return (
            <Fragment>
                <input type="radio" 
                value={score} 
                checked={props.review.score == score} 
                name="rating" 
                onChange={() => console.log('selected:', score)} 
                id={`rating-${score}`} />
                <label onClick={props.setRating.bind(this, score)}></label>
            </Fragment>
        )
    })

    return (
        <Wrapper>
            <form onSubmit={props.handleSubmit}>
                <Headline> Have an experience with {props.attributes.name}? Share your review!</Headline>
                <Field>
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title" />
                </Field>
                <Field>
                    <input onChange={props.handleChange} value={props.review.description} type="textarea" name="description" placeholder="Review Description" />
                </Field>
                <Field>
                    <RatingContainer>
                        <RatingTitle> Rate this Airline </RatingTitle>
                        <RatingBox>
                            {ratingOptions}
                        </RatingBox>
                    </RatingContainer>
                </Field>
                <SubmitBtn>
                    <button type="submit">Submit Your Review</button>
                </SubmitBtn>
            </form>
        </Wrapper>
    )
}

export default ReviewForm