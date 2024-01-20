import Profile from './Profile/Profile.js';
import user from '../json/user.json';

import Statistics from './Statistics/Statistics.js';
import data from '../json/data.json';

import FriendList from './FriendList/FriendList.js';
import friends from '../json/friends.json';

// import TransactionHistory from './TransactionHistory/TransactionHistory.js';
// import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
      {/* <TransactionHistory item={transactions} /> */}
    </div>
  );
};

export default App;
