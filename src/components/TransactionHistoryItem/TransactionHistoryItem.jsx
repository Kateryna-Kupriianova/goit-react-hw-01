import css from "./TransactionHistoryItem.module.css"
const TransactionHistoryItem = ({ type, amount, currency }) => {
    return (
        <tr>
          <td className={css.tdType}>{type}</td>
          <td className={css.tdAmount}>{amount}</td>
          <td className={css.tdCurrency}>{currency}</td>
        </tr>
    )
}

export default TransactionHistoryItem;