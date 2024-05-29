import { useRouteError } from 'react-router-dom';

export default () => {
  const error = useRouteError();

  const errorStatus = error.response?.status || error.status;

  return (
    <main>
      <h1>{errorStatus && errorStatus + ' '}Error</h1>
      <p>
        {error.response?.data?.message || error.statusText || error.message}
      </p>
    </main>
  );
};
