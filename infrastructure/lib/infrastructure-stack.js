const { Stack, CfnOutput, RemovalPolicy } = require('aws-cdk-lib');
const s3 = require('aws-cdk-lib/aws-s3');
const iam = require('aws-cdk-lib/aws-iam');
const s3deploy = require('aws-cdk-lib/aws-s3-deployment');

class InfrastructureStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);
    const myBucket = new s3.Bucket(this, 'FileBucket', {
      bucketName: 'actsent-website',
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
    });
    myBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        principals: [new iam.StarPrincipal()],
        actions: ['s3:*'],
        resources: [
          myBucket.bucketArn,
          `${myBucket.bucketArn}/*`
        ],
        conditions: {
          "IpAddress": {
            "aws:SourceIp": "92.40.172.141"
          }
        }
      }),
    );
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset('../front-end/build')],
      destinationBucket: myBucket,
    });
    new CfnOutput(this, 'WebsiteURL', {
      value: myBucket.bucketWebsiteUrl,
    });
  }
}

module.exports = { InfrastructureStack }