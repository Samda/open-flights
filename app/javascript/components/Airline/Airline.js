import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ViewForm from './ReviewForm'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child {
        background: #000;
    }
`

const Main = styled.div`
    left-padding: 50px;
`

const Airline = (props) => {
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const slug = props.match.params.slug
        const url = `/api/v1/airlines/${slug}`

        axios.get(url)
            .then(res => {
                setAirline(res.data)
                setLoaded(true)
            })
            .catch(res => console.log(res))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log('review', review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const scrfToken = document.querySelector('[name="csrf-token"]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = scrfToken

        const airline_id = airline.data.id
        axios.post('/api/v1/reviews', { review, airline_id})
            .then( res => {
                debugger 
            })
            .catch( res => console.log(res))
    }

    return (
        <Wrapper>
            {
                loaded && 
                <Fragment>
                    <Column>
                        <Main> 
                            <Header  
                                attributes={airline.data.attributes}
                                review={review}
                            />
                            <div className="reviews"></div>
                        </Main>
                    </Column>
                    <Column>
                        <ReviewForm 
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            attributes={airline.data.attributes}
                            review={review}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>
    )
}

export default Airline