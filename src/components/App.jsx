//========== components ==========
import AppTitle from "./AppTitle/AppTitle";
import Section from "./Section/Section";
import Wrapper from "./Wrapper/Wrapper";
import Profile from "./Profile/Profile";
import List from "./List/List";
import Statistics from "./Statistics/Statistics";
import FriendListItem from "./FriendListItem/FriendListItem";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

//========== data ==========
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions  from 'data/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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


          <List>
            <Statistics
              stats={data} />
          </List>

          <List>
            <FriendListItem
              friends={friends} />
          </List>

          <TransactionHistory
            items={transactions} />
    </div>
  );
};
console.log(App);
