import { Paragraph } from './Paragraph';

const EOL = <span>END OF LINE</span>;

export const App = () => {
  const DUMMY_NAME = 'John Doe';
  const a = ['hey', 'hi'];

  function b(e) {
    return (
      <p>
        {e} {EOL}
      </p>
    );
  }

  return (
    <div className='App'>
      <h1>{DUMMY_NAME}</h1>
      <Paragraph />
      <ul>{a.map(b)}</ul>
    </div>
  );
};
