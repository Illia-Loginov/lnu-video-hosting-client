import { useRouteError } from 'react-router-dom';

export default () => {
  const error = useRouteError();

  console.log(JSON.stringify(error));
  console.error(error);

  return (
    <main>
      <h1>{error.status && error.status + ' '}Error</h1>
      <p>{error.statusText || error.message}</p>
    </main>
  );
};
