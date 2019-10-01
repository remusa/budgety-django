import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'

const TableStyles = styled.table`
    text-align: center;
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
                {data.map(item => (
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
                                <tr>
                                    <th key={item.id}></th>
                                    <td>{item.note}</td>
                                    <td>{item.category}</td>
                                    <td>{item.total}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </TableStyles>
                ))}
            </ul>
        </div>
    )
}

List.propTypes = {
    data: PropTypes.array.isRequired,
}

export default List
