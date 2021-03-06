import './App.css';

import Container from './Component/Container/Container';
import Profile from './Component/Profile/Profile';
import Statistics from './Component/Statistics/Statistics';
import FriendList from './Component/Friends-list/Friends-list';
import TransactionHistory from './Component/transactions/Transaction-history';

import user from './data/user.json';
import statisticalData from './data/statistics.json';
import friends from './data/friends.json';
import transactionData from './data/transactions.json';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactionData} />
    </Container>
  );
}

export default App;
