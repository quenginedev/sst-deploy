# SST Deploy JS action

This action deploys your serverless stack application

## Inputs

### `access-key-id`
**Required** AWS ACCESS_KEY_ID.

### `secret-access-key`
**Required** AWS SECRET_ACCESS_KEY

### `region`
**Optional** AWS Region - [ us-east-1 ]

### `stage`
**Optional** Staging environment - [ production ]

### `pkg-manger`
**Optional** Package mangers for your lock file. options are npm, yarn - [ yarn ]

### `envs`
**Optional** Environmental variables for your sst application


## Outputs
```
Using stage: production
  Preparing your SST app
  
  Deploying stacks
  
   ✅  production-sst-deploy-demo-MyStack (no changes)
  
  
  Stack production-sst-deploy-demo-MyStack
    Status: no changes
    Outputs:
      ApiEndpoint: https://xxxxxxxxx.execute-api.us-east-1.amazonaws.com

```


## Example usage

```
on: [push]

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: A job to SST to prod
    steps:
    
    - name: Checkout
      uses: actions/checkout@v2
      with:
        path: "./"

    - name: Install Dependencies
      uses: actions/setup-node@v3
      with:
        node-version: 16

    - name: Deploy SST app
      id: deploy
      uses: quenginedev/sst-deploy@main
      with:
        access-key-id:  ${{ secrets.AWS_ACCESS_KEY_ID }}
        secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        region: ${{ secrets.AWS_DEFAULT_REGION }}
        path: './'
```