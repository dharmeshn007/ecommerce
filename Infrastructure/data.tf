data "aws_secretsmanager_secret_version" "github_token" {
  secret_id = "github_token"
}

# ------- Account ID -------
data "aws_caller_identity" "id_current_account" {}