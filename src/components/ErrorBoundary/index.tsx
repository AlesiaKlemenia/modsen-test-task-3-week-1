import { isRouteErrorResponse, useRouteError } from 'react-router';

const ErrorBoundary = (): JSX.Element => {
  const error = useRouteError();

  return isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>{error.message}</h1>
  );
};

export default ErrorBoundary;