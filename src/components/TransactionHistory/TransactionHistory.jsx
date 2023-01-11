import PropTypes from 'prop-types';
import { Table, THead, TBody } from './TransactionHistory.styled';

export default function TransactionHistory({items}) {
    return <Table>
        <THead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </THead>

        <TBody>
            {items.map(({id, type, amount, currency}) => (
                <tr key = {id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
        </TBody>
    </Table>;
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),)
}