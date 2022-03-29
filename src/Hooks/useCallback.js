import { useState, useCallback } from 'react';

const App = () => {
  const [firstName, setFirstName] = useState('junha');
  const [lastName, setLastName] = useState('kim');

  const getfullName = useCallback(() => {
    return `계산 오래걸림: ${firstName} ${lastName}`;
  }, [firstName, lastName]);

  return (
    <>
      {getfullName()}
      <button onClick={() => setFirstName('준하')}>버튼</button>
    </>
  );
};
export default App;
