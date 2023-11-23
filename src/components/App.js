import Profile from '../Profile/Profile';
import user from '../user.json';
import Statistics from 'Statistics/Statistics';
import data from '../data.json';
import FriendList from '../Friend/FriendList';
import friends from '../friends.json';
import TransactionHistory from '../Transaction/TransactionHistory';
import transactions from '../transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
