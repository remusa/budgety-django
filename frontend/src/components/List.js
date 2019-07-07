import React from 'react'
import PropTypes from 'prop-types'

const List = ({ data }) => (
    <div>
        <ul>
            {data.map(el => (
                <div key={el.id}>
                    <h2>{el.note}</h2>
                    <p>{el.category}</p>
                    <p>{el.total}</p>
                    <p>{el.date}</p>
                </div>
            ))}
        </ul>
    </div>
)

List.propTypes = {
    data: PropTypes.array.isRequired,
}

export default List
