import { isRouteErrorResponse, useRouteError } from 'react-router';

const ErrorBoundary = (): JSX.Element => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <h1>
        {error.status} {error.statusText}
      </h1>
    );
  }
  return <h1>{error.message}</h1>;
};

export default ErrorBoundary;
