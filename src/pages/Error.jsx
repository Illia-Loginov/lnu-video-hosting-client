import { useRouteError } from 'react-router-dom';

export default () => {
  const error = useRouteError();

  const errorStatus = error.response?.status || error.status;

  return (
    <main className="main">
      <section className="section">
        <h1 className="heading error">
          {errorStatus && errorStatus + ' '}Error
        </h1>
        <p className="error">
          {error.response?.data?.message || error.statusText || error.message}
        </p>
      </section>
    </main>
  );
};
