const REGEXP = {
  ID: /^[a-z0-9]{6,14}$/,
  PASSWORD: /^(?=.*[A-Za-z0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/,
  NICKNAME: /^.{2,8}$/,
};

export default REGEXP;
