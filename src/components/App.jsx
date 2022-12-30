//========== components ==========
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from './FriendList/FriendList';
import TransactionHistory from "./TransactionHistory/TransactionHistory";

//========== data ==========
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

//========== App ==========
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        gridTemplateColumns: 'repeat(2, 300px)',
        gridAutoRows: 450,
        gridAutoFlow: 'row',
        gap: 30,
        alignItems: 'center',
        fontSize: 14,
        fontWeight: 500,
        color: '#010101'
      }}
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />

      <Statistics
        title="Upload stats"
        stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory
        items={transactions} />
      
    </div>
  );
};
console.log(App);
