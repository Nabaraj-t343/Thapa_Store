const verifyEmailTemplate = ({ name, url }) => `
  <p>Dear ${name},</p>
  <p>Thank you for registering at Kiranahub.</p>
  <a href="${url}" style="color:white;background:blue;padding:10px 20px;text-decoration:none;">Verify Email</a>
`;
export default verifyEmailTemplate;

