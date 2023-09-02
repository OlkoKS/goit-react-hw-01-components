import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import { TransactionsItem } from './TransactionsItem';

export const TransactionHistory = ({items}) => {
    return (
        <table className={css['transaction-history']}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={css.transactionTableBody}>
                {items.map(TransactionsItem)}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}