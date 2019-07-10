# How to Use

## How to setup Elastic Beanstalk

### Install the elastic beanstalk cli

```bash
pip3 install awsebcli --upgrade --user
```

### Configure your AWS Settings on your Environment

Put your api keys for aws in ~/.aws/config on linux based systems

Windows will have a similar location

### Configure your AWS IAM

In your AWS account, ensure that your IAM user has the policy AWSElasticBeanstalkFullAccess

### Deploy to Existing Development Environment

We have already configured a development environment. You can deploy the code on your machine
using the following command

```bash
eb deploy development
```

When it deploys, you can observe the result with the following command

```bash
eb open
```

### Create a New Environment

If you need to create a new environment you can use the following command

```bash
eb create development
```

This will create a new evironment called "development"

You can deploy it with the following command

```bash
eb deploy development
```

When it deploys, you can observe the result with the following command

```bash
eb open
```

## List of Commands 

We use yarn as our automation tool. 

Do not use npm.

### Start Development Server

```bash
yarn start
```

### Start React Storybook

```bash
yarn storybook
```

### Create Production Bundle

```bash
yarn build:prod
```