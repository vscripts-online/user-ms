// Original file: proto/user.proto


export interface UserRegisterResponseDTO {
  'id'?: (number);
  'email'?: (string);
  'verifyCode'?: (number);
  'invalidVerifyCode'?: (number);
  'verifyCodeSendTime'?: (number)[];
  'usedSize'?: (number);
  'totalDrive'?: (number);
  '_verifyCode'?: "verifyCode";
}

export interface UserRegisterResponseDTO__Output {
  'id': (number);
  'email': (string);
  'verifyCode'?: (number);
  'invalidVerifyCode': (number);
  'verifyCodeSendTime': (number)[];
  'usedSize': (number);
  'totalDrive': (number);
  '_verifyCode': "verifyCode";
}
