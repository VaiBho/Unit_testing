import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "./redux/actions";
import { getData } from "./helper";

const App = props => (
  <div className="App">
    <button
      className="loadButton"
      onClick={() => getUsers(this.props.dispatch)}
      disabled={props.users.loading}
    >
      Load Users
    </button>

    {props.users.users && props.users.users.length > 0 && (
      <ul>
        {this.props.users.users.map(user => {
          return <User user={user} key={user.id} />;
        })}
      </ul>
    )}
    {props.users.error && <div>A network error occurred</div>}
  </div>
);

const User = ({ user }) => <div>{user.name}</div>;

export default connect(state => ({ users: state.users }))(App);
