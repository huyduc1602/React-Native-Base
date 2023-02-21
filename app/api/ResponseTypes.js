export type BaseResponse = {
  statusCode: ?string,
  results: ?string,
};

export type BaseErrorResponse = {
  status: ?string,
  code: ?string,
  message: ?string,
};
