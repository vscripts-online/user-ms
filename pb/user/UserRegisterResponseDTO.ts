// Original file: proto/user.proto


export interface UserRegisterResponseDTO {
  'id'?: (number);
  'email'?: (string);
  'verify_code'?: (number);
  'invalid_verify_code'?: (number);
  'verify_code_send_time'?: (number)[];
  'used_size'?: (number);
  'total_drive'?: (number);
  '_verify_code'?: "verify_code";
}

export interface UserRegisterResponseDTO__Output {
  'id': (number);
  'email': (string);
  'verify_code'?: (number);
  'invalid_verify_code': (number);
  'verify_code_send_time': (number)[];
  'used_size': (number);
  'total_drive': (number);
}
