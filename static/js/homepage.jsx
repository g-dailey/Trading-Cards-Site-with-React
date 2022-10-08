'use strict';

function Homepage() {
  return (
    <React.Fragment>
    <p>Welcome!</p>
    <a href="/cards">Go to the cards page.</a>
    <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
    )
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
