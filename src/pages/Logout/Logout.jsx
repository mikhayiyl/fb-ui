import { Component } from "react";
import { logout } from "../../components/services/authService"
export default class Logout extends Component {
  componentDidMount() {
    logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}
