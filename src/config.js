export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: 'scene-bucket'
  },
  apiGateway: {
    URL: 'https://ew6j61zae8.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    USER_POOL_ID : 'us-east-1_acjGgXCiE',
    APP_CLIENT_ID : '2lbt4lulrrib3avnrpcjgldgf1',
    REGION: 'us-east-1',
    IDENTITY_POOL_ID: 'us-east-1:ba2f3b19-9e60-4668-a3a8-b1d137a37d85',
  }
};
