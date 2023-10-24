console.log(`App.js is running`)

// JSX - JavaScript XML

var app = {
  title: 'Indecision App',
  subTitle: 'This is my subtitle'
}
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subTitle}</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </div>
);

function getLocation(location) {
  if (location) return <p>Location: {location}</p>
}
var user = {
  name: 'Sarath Raja',
  age: 28,
  location: 'Nellore'
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot) 