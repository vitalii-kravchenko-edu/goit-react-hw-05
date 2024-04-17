const ErrorMessage = ({
  message = "Oops! Something went wrong. Please reload the page...",
}) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
