// Original file: proto/user.proto


export interface User {
  'id'?: (number);
  'email'?: (string);
  'password'?: (string);
  'verify_code'?: (number);
  'invalid_verify_code'?: (number);
  'verify_code_send_time'?: (number)[];
  'used_size'?: (number);
  'total_drive'?: (number);
  '_verify_code'?: "verify_code";
}

export interface User__Output {
  'id': (number);
  'email': (string);
  'password': (string);
  'verify_code'?: (number);
  'invalid_verify_code': (number);
  'verify_code_send_time': (number)[];
  'used_size': (number);
  'total_drive': (number);
}
