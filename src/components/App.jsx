//========== components ==========
import Section from "./Section/Section";
import Wrapper from "./Wrapper/Wrapper";
import Profile from "./Profile/Profile";
import List from "./List/List";
import Statistics from "./Statistics/Statistics";
import FriendListItem from "./FriendListItem/FriendListItem";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

//========== data ==========
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions  from '../data/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Section title="goit-react-hw-01-components">

        <Wrapper title="Task-1">
          <Profile
            userName={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats} />
        </Wrapper>

        <Wrapper title="Task-2">
          <List>
            <Statistics
              stats={data} />
          </List>
        </Wrapper>

        <Wrapper title="Task-3">
          <List>
            <FriendListItem
              friends={friends} />
          </List>
        </Wrapper>

        <Wrapper title="Task-4">
          <TransactionHistory
            items={transactions} />
        </Wrapper>

      </Section>
      
    </div>
  );
};
console.log(App);
