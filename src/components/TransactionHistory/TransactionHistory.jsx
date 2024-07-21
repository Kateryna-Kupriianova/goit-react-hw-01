import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem"
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th className={css.thText}>Type</th>
                    <th className={css.thText}>Amount</th>
                    <th className={css.thText}>Currency</th>
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