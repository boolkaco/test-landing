import arrow from '../../assets/arrow.svg';

function Toolbar(props) {
  return (
    <a href={props.link} className={`app-link ${props.isPrimary ? 'app-link--primary' : ''}`}>
      <h1 className='app-link__title'>{props.title}</h1>
      <img src={arrow} className="app-link__arrow" alt="logo"/>
    </a>
  );
}

export default Toolbar;
