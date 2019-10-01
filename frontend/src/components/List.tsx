import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'

const TableStyles = styled.table`
    text-align: center;
    overflow-y: scroll;
    max-height: 500px;

    border-spacing: 0;
    box-shadow: 0 5px 15px 0 hsla(0, 0, 0, 0.9);
    border-radius: 4px;
    margin: 0 auto;
    padding: 8px;

    thead {
        font-size: 1rem;
        padding: 4px;
    }

    td,
    th {
        font-size: 1.2rem;
        padding: 4px;
        position: relative;

        label {
            padding: 8px 4px;
            display: block;
        }
    }

    tr {
        &:hover,
        &:focus {
            border-radius: 3px;
        }
    }
`

interface Item {
    id: number
    note: string
    category: string
    total: number
    date: string
}

interface Props {
    data: Item[]
}

const List: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <ul>
                <TableStyles>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Concept</th>
                            <th>
                                <abbr title="Category">CAT</abbr>
                            </th>
                            <th>Total</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.note}</td>
                                <td>{item.category}</td>
                                <td>{item.total}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </TableStyles>
            </ul>
        </div>
    )
}

List.propTypes = {
    data: PropTypes.array.isRequired,
}

export default List
