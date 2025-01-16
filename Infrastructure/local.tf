locals {
  github_token = data.aws_secretsmanager_secret_version.github_token.secret_string
}