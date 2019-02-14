import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';

const mockData = [
  { word: 'dolphin', team: 'red', isAssassin: false },
  { word: 'whiskey', team: 'blue', isAssassin: false },
  { word: 'television', team: 'blue', isAssassin: false },
  { word: 'anger', team: 'blue', isAssassin: false },
  { word: 'cheese', team: 'red', isAssassin: false },
  { word: 'opera', team: 'red', isAssassin: false },
  { word: 'thermometer', team: 'red', isAssassin: false },
  { word: 'glass', team: 'blue', isAssassin: false },
  { word: 'jizz', team: 'red', isAssassin: false },
]

const App = () => (
  <div>
    {mockData.map((cardInfo, idx) => (
      <Card
        key={idx}
        word={cardInfo.word}
        team={cardInfo.team}
        isAssassin={cardInfo.isAssassin}
      />
    ))}
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
