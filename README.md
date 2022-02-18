# Actsent

Booking system for artists to book events 

## How to Run the app 

### Cloning the respository

`$ git clone https://github.com/School-Of-Tech-Futures-UK/lucy-mullins.git`

### Setup front and back end

Run the following commands in the terminal 

``` 

$ cd back-end
$ npm install
$ cd ..

$ cd front-end
$ npm install
$ npm run build 
$ cd ..

```
### Allow access on your computer and Deploy

In the infrastructure file, go to line 28 and change the IP address to your public IP address for your computer. Save this file and continue running the following commands in the terminal.

```

$ cd infrastructure
$ aws-azure-login --profile <profile-type> --mode=gui

```
On this command a log in GUI will become available where you can enter details to your AWS account and following successful login enter the following command to deploy the app.

```
$ cdk --profile <profile-type> deploy
```

Click the link below (or available in the terminal) to launch Actsent.




