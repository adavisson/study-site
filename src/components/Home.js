import React from 'react';
import { Header } from 'semantic-ui-react';
import JavaScriptCard from './JavaScriptCard';
import RubyCard from './RubyCard';
import HtmlCssCard from './HtmlCssCard';
import TestingCard from './TestingCard';

const Home = () => {
  return (
    <div>
      <Header as="h1">Study Buddy</Header>
      <div className="card-container">
        <JavaScriptCard />
        <RubyCard />
        <HtmlCssCard />
        <TestingCard />
      </div>
    </div>
  );
}
 
export default Home;