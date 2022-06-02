\*Pipeline
circleci pipeline is triggered when a new commit is pushed to "main" branch
1.Install required software
-node: circleci/node@5.0.0 - aws-cli: circleci/aws-cli@2.0.6 - eb: circleci/aws-elastic-beanstalk@2.0.1
2.Build the project
-Install dependencies of front-end
-Install dependencies of back-end
-Build front-end
-Build back-end
-deploy front-end (upload front-end files to S3 Bucket)
-deploy back-end (upload back-end files to Elastic Beanstalk)
