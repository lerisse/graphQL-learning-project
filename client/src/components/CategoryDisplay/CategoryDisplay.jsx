import React, { useState } from 'react'
import "./CategoryDisplay.css"
import { Container } from 'react-bootstrap'
import animals from '../../assets/images'
import { Link } from "react-router-dom"
import {useQuery, gql} from '@apollo/client'

const CATEGORIES_QUERY = gql`
{
    categories {
        id
        category
        image
        slug
    }
}`


function CategoryDisplay() {

    const { loading, error, data } = useQuery(CATEGORIES_QUERY)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    return (
        <div className="CategoryDisplay">
            <Container className="CategoryDisplay-container">
                {data.categories.map(category => {
                    return (
                        <Link to={`/products/${category.slug}`} className="CategoryDisplay-card-container">
                            <div className="CategoryDisplay-card">
                                <img src={animals[category.image]} /> 
                            </div>
                            <h3>{category.category}</h3>
                        </Link>
                    )
                })}
            </Container>
        </div>
    )
}

export default CategoryDisplay
