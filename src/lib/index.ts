// place files you want to import through the `$lib` alias in this folder.
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

const config = {
    "aws_project_region": "eu-north-1",
    "aws_cognito_identity_pool_id": "eu-north-1:f9f8e691-fd5d-4b9c-a5e1-d04a261083b8",
    "aws_cognito_region": "eu-north-1",
    "aws_user_pools_id": "eu-north-1_S8yLIHJ4J",
    "aws_user_pools_web_client_id": "5ff25k84fnd24dl91m529v6c4v",
    "oauth": {},
    "aws_cognito_username_attributes": [
      "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
      "SMS"
    ],
    "aws_cognito_password_protection_settings": {
      "passwordPolicyMinLength": 8,
      "passwordPolicyCharacters": [
        "REQUIRES_LOWERCASE",
        "REQUIRES_NUMBERS",
        "REQUIRES_SYMBOLS",
        "REQUIRES_UPPERCASE"
      ]
    },
    "aws_cognito_verification_mechanisms": [
      "EMAIL"
    ],
    "aws_user_files_s3_bucket": "elope-storage-45bad612204838-staging",
    "aws_user_files_s3_bucket_region": "eu-north-1",
    "aws_appsync_graphqlEndpoint": "https://kybhfx5x4vhszepls5lzr6i6ke.appsync-api.eu-north-1.amazonaws.com/graphql",
    "aws_appsync_region": "eu-north-1",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-ocw5gxbz2jafbcre3ihfrzwleq"
  };
  
Amplify.configure(config);

export const client = generateClient();