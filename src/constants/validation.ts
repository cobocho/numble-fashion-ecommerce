const VALIDATION = Object.freeze({
  ID: {
    REGEXP: /^[a-z0-9]{6,14}$/,
    MESSAGE: '6자 이상 14자 이하의 영어 소문자와 숫자로 이루어진 ID을 입력해주세요!',
  },
  PASSWORD: {
    REGEXP: /^(?=.*[A-Za-z0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,}$/,
    MESSAGE: '8자 이상의 영어와 숫자, 특수문자가 포함된 비밀번호를 입력해주세요!',
  },
  NICKNAME: {
    REGEXP: /^.{2,8}$/,
    MESSAGE: '2자 이상 8자 이하의 닉네임을 입력해주세요!',
  },
});

export default VALIDATION;
