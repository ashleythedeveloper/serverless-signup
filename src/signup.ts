export const handleSignup = async (
  event: { body: any },
  context: any,
  callback: any
) => {
  const response = {
    result: "success",
    message: "payment processed correctly",
  };
  return { statusCode: 200, body: JSON.stringify(response) };
};
