import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import Homepage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // console.log(user);
      // createUserProfileDocument(user);

      // this.setState({ currentUser: user });
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot);
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
        // console.log(this.state);
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
          {/* <Route path='/topics/:topicId' component={TopicDetail} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
