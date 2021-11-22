import './App.css';
import { Route, Switch } from 'react-router';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

// const HatsPage = () => <div>hello</div>;

// const TopicDetail = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1> HEllO {props.match.params.topicId}</h1>
//       <button onClick={() => props.history.push('/topics')}> Topics</button>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
        {/* <Route path='/topics/:topicId' component={TopicDetail} /> */}
      </Switch>
    </div>
  );
}

export default App;
