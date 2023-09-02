import PropTypes from 'prop-types';

export const TransactionsItem = ({ id, type, amount, currency }) => {
    return (
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}

TransactionsItem.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
}