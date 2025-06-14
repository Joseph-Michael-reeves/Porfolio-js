export const SendEmail = async ({ to, subject, body }) => {
  console.log("Pretend sending email to:", to);
  console.log("Subject:", subject);
  console.log("Body:", body);
  return Promise.resolve();
};
