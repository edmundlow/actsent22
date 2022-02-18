# Actsent

Booking system for artists to book events 

## How to Run the app 

### Cloning the respository

`https://github.com/School-Of-Tech-Futures-UK/actsent22.git`

### Setup and start the server

Run the following commands in the terminal 

``` 

$ cd back-end
$ npm install
$ node local.js
$ cd ..

$ cd front-end
$ npm install
$ npm run build 
$ cd ..

```
### Allow access on your computer and Deploy
Go to line 28 in infrastructure/lib/infrastructure-stack.js and change the IP address to your public IP address for your computer. Save this file and continue running the following commands in the terminal.

```

$ cd infrastructure
$ npm install
$ aws-azure-login --profile <profile-type> --mode=gui

```
On this command a log in GUI will become available where you can enter details to your AWS account and following successful login enter the following command to deploy the app.

```
$ cdk --profile <profile-type> deploy
```

Click the link below (or available in the terminal) to launch Actsent.

http://actsent-website.s3-website.eu-west-2.amazonaws.com




