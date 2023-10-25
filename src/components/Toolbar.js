import logo from '../assets/logo.svg';
import AppLink from "./common/AppLink";

function Toolbar() {
  return (
    <div className="app-toolbar">
      <div className="app_toolbar__logo-wrp">
        <img
          src={logo}
          className="app-toolbar__logo"
          alt="logo"
        />
      </div>

      <div className="app-toolbar__links">
        <AppLink
          title='GitHub'
          link='https://github.com/'
        />
        <AppLink
          title='Docs'
          link='https://github.com/'
        />
        <AppLink
          isPrimary
          title='Open the App'
          link='https://github.com/'
        />
      </div>
    </div>
  );
}

export default Toolbar;
