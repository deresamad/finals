import React from 'react';
import Counter from '../components/Counter';
import TodoList from '../components/TodoList';
import Navigation from '../components/Navigation';
import PostsFetcher from '../components/PostsFetcher';

export default function TestPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>CPAN 144 Final Exam Components</h1>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Counter Component (State Management)</h2>
        <Counter />
      </section>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Todo List Component (Event Handling)</h2>
        <TodoList />
      </section>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>API Data Fetching Component</h2>
        <PostsFetcher />
      </section>
      
      <section style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>Navigation Component (Routing)</h2>
        <Navigation />
      </section>
    </div>
  );
}