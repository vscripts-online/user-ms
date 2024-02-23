// Original file: proto/user.proto


export interface User {
  'id'?: (number);
  'email'?: (string);
  'password'?: (string);
  'verifyCode'?: (number);
  'invalidVerifyCode'?: (number);
  'verifyCodeSendTime'?: (number)[];
  'usedSize'?: (number);
  'totalDrive'?: (number);
  '_verifyCode'?: "verifyCode";
}

export interface User__Output {
  'id': (number);
  'email': (string);
  'password': (string);
  'verifyCode'?: (number);
  'invalidVerifyCode': (number);
  'verifyCodeSendTime': (number)[];
  'usedSize': (number);
  'totalDrive': (number);
  '_verifyCode': "verifyCode";
}
