export const FormSuccess = ({ message }: { message?: string }) => {
  if (!message) return null;
  return <p className="text-sm text-green-500">{message}</p>;
};
