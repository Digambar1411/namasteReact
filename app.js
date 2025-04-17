const parent1 = React.createElement(
  'div',
  {id:'parent'}, 
  React.createElement('p',{id:'child'},'Hello world from React'), 
);

const parent2 = React.createElement(
  'div',
  {id:'parent2'},
  [
    React.createElement('p',{id:'child'},'child 1 of parent 2'), 
    React.createElement('p',{id:'child'},'child 2 of parent 2'), 
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render([parent1, parent2]);