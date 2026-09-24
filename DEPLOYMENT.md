# CI/CD Deployment Setup

This project uses GitHub Actions for automatic deployment to a VPS when code is pushed to the `main` branch.

## Required GitHub Secrets

Configure the following secrets in your GitHub repository (Settings → Secrets and variables → Actions):

### 1. VPS_HOST
- **Description**: The IP address or domain name of your VPS
- **Example**: `192.168.1.100` or `your-vps-domain.com`

### 2. VPS_USERNAME
- **Description**: The SSH username on your VPS
- **Example**: `root` or `ubuntu`

### 3. SSH_PRIVATE_KEY
- **Description**: The private SSH key for authentication to your VPS
- **How to generate** (if you don't have one):
  ```bash
  ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_deploy_key
  ```
- **How to add to VPS**:
  ```bash
  ssh-copy-id -i ~/.ssh/github_deploy_key.pub user@your-vps-host
  ```
- **Important**: Copy the entire private key content (including `-----BEGIN` and `-----END` lines) into the secret

### 4. DISCORD_WEBHOOK_URL (Optional)
- **Description**: Discord webhook URL for deployment notifications
- **How to create**:
  1. Go to your Discord server settings
  2. Create a webhook in a channel
  3. Copy the webhook URL
- **Note**: This secret is optional - if not set, notifications will be skipped

## VPS Setup Requirements

Before deployment, ensure your VPS has:

1. **Git installed**: To pull the latest code
   ```bash
   sudo apt update && sudo apt install git -y
   ```

2. **Docker and Docker Compose installed**:
   ```bash
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   sudo usermod -aG docker $USER
   ```

3. **Application directory**: Create the directory where your app will be deployed
   ```bash
   mkdir -p /path/to/your/app
   cd /path/to/your/app
   git clone <your-repo-url> .
   ```

4. **Update the deployment path**: Edit `.github/workflows/deploy.yml` and change `/path/to/your/app` to your actual application directory on the VPS

## Deployment Flow

1. Push code to `main` branch
2. GitHub Actions triggers automatically
3. Workflow connects to VPS via SSH
4. Pulls latest code from GitHub
5. Rebuilds Docker containers
6. Restarts the application
7. Cleans up unused Docker resources

## Application Details

- **Container Name**: devxbd
- **Internal Port**: 3000
- **External Port**: 8001
- **Access URL**: `http://your-vps-host:8001`

## Manual Deployment (Optional)

If you need to deploy manually without pushing to main:

```bash
ssh user@your-vps-host
cd /path/to/your/app
git pull origin main
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## Troubleshooting

- **SSH connection fails**: Verify the SSH private key is correct and the public key is added to VPS `~/.ssh/authorized_keys`
- **Docker build fails**: Check that Docker and Docker Compose are installed on the VPS
- **Port conflicts**: Ensure port 8001 is not in use by another service on the VPS
