import { Profile } from "./Profile";
import user from '../data/user.json';
import data from '../data/data.json';
import { Statistics } from "./Statistics";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#BFBFBF'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}>
      </Profile>

      <Statistics
        stats={data.stats}
      ></Statistics>
    </div>
    
  );
};
