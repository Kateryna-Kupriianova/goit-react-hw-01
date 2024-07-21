import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem"

const TransactionHistory = ({ items }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <TransactionHistoryItem
                        key={items.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;