data "aws_secretsmanager_secret_version" "github_token" {
  secret_id = "github_token"
}