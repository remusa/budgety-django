import PropTypes from 'prop-types'
import React from 'react'

interface Item {
    id: string
    note: string
    category: string
    total: number
    date: string
}

interface Props {
    data: Item[]
}

const List: React.FC<Props> = ({data}) => {
    return (
        <div>
            <ul>
                {data.map(item => (
                    <div key={item.id}>
                        <h2>{item.note}</h2>
                        <p>{item.category}</p>
                        <p>{item.total}</p>
                        <p>{item.date}</p>
                    </div>
                ))}
            </ul>
        </div>
    )
}

List.propTypes = {
    data: PropTypes.array.isRequired,
}

export default List
