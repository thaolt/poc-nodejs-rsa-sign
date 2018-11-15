const crypto = require('crypto');
const sign = crypto.createSign('SHA256');
const verify = crypto.createVerify('SHA256');
const sha256 = crypto.createHash('SHA256');

const data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
Fusce nisl magna, dictum ac lorem et, pellentesque vehicula magna. \
Quisque gravida massa velit, eu tristique mi placerat ac. Suspendisse \
ut massa at urna vestibulum vulputate. Vivamus orci lectus, aliquet \
a vehicula vel, sodales at tellus. Nullam dignissim sem quis lacus \
tempor ornare. Nullam id vehicula ipsum, nec rhoncus diam. Sed porttitor \
justo at justo placerat, nec laoreet neque iaculis.';

const hash = sha256.update(data, 'utf8').digest('hex');

console.log('data =', data);
console.log('hash =', hash);

sign.write(hash);

sign.end();

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpQIBAAKCAQEA2dPSTFlgiYsllxOUjCfyJbTPZFbaep5/A+OmMIJpHc8+Ezgc
L7yQOUcZycVQS7J56lfh0ZKx1DQN4CVSbb4FqtmZcJ6Vue4hrbXSW6DwMjpfOSSu
7lSKA+oy2G/JjSLoxyj+xzKKpCkKW8p/X8NCk1falKup5gMoUorMKvOeg301ZOTc
xQ2TMQ5Zp2WJVCrlkjXNB1/2RKKBhV755mKSzx03QT18QSHPbmHPSaIXAO/Lz/r3
ZOCMgWRSMxrNjbL/HqWucGPSofJTRdv7yKQZ6p18eO01WxYHN82cO0NjBbgMf33M
sdiPY2FU9TGwtv3FEYZMwGtNyfuNEY2Jrfbb4QIDAQABAoIBADrFLc4vpx41DrVO
MRwHgwutVu9Jh7Thon9YInSgGuBSE/t3fhNbGsZ5annH5LwnsUEK6QB0RcptKPk6
2JyHUlwgTYfXIaqCl0+Y6OKT73p9yUdPoGrpIDuiKom+z3Bm5MsnQmZYOpPEBulx
HyClPAcpAu5tym8mlvB+RkuoYzIyTGs1mxK+stw7mcYSIf5I0hYv2hTfS7ZgvmPc
3snquuI4ZaGdolwNpu087h0EPMzlqOJ1noctyIDCFoZGw0S7Wv9N4ixeiHwSM9I2
hdV6/RlMI+WrIsFuoQs0JuPJNh2I537AqtLxlDOv64YUn5L39BJdk1O30kaZEV3m
ZSc+HWECgYEA+ApB2j3AJiw3ezIJgYNui6am0MPq4a+Sp/zX3x29s6bJulvgBur9
0L9R/TPWFOx2X2QNvbCFIB8yXE1nApLFPrq8JUNxeMNicUoYp9aY/ntngkqoinpF
vxcuYr7N7SX8y3tmWyAuiB+dMQ86Z3VolDgv3npGTyVCW7ph5/gGav0CgYEA4NFb
IxHrCgE9+zAC38NgECeV0KybCIMpFpe9iFAbb1g60ct1yCBPrN7IilU8AzjHShP6
4Nsf7GPlHyeAK8IqeebeE6sgb8fDg0qThVgox1eQl54GACU3cfE7joB7dK0LL8Nf
YF/w3fvssKdGKtRPRqXyIbITayKxBxRmvp0xQ7UCgYEAg6MF8eoFuPyMcVBL5TU4
jNrj+zWOyTmhro+sjVe+XsKsmr+5tFIwZAG1ZJiHDFG2PMff1wUAkdycoInfmmkE
T1dRFMGnTfz7mL5HOYPVbHFXrLksm1lq/JAz6On0ZeBcOi2CU+hPaaTFiszXJSMV
Xlw3Y24nNEfE4OOYpEBoP40CgYEAweZPQHQXz806dAb4s52CoOxDXnNAU5ssOPwu
z/6nauUh9ggRUcXsciDDveu9ktnJqK6K1pynb+7IkpIzDYqtr+3a5APYOhCFJBuS
GJPst+FiKCJ28nEm3PM+dq2BzSPiXhOXkzusNwktHz9mWVI7/abqqv03mlOVc5G4
+/X/o3ECgYEAxNFPCXQIYsOjdlanl9Ch21YRRM6yMMXFaAyFN2KmR6ZUAGRA4QYl
Ng9UVRftidee9edoytEiZ7EI9DUXUd8YLaNo/J2YuuT5CMGjKGxI7mrmnHq+TAdb
LG8gPeCz44SqLPYjqWPimfVQOTWyGDmKgJ405TtupaOQG81hyWo9424=
-----END RSA PRIVATE KEY-----`;

const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MIIBCgKCAQEA2dPSTFlgiYsllxOUjCfyJbTPZFbaep5/A+OmMIJpHc8+EzgcL7yQ
OUcZycVQS7J56lfh0ZKx1DQN4CVSbb4FqtmZcJ6Vue4hrbXSW6DwMjpfOSSu7lSK
A+oy2G/JjSLoxyj+xzKKpCkKW8p/X8NCk1falKup5gMoUorMKvOeg301ZOTcxQ2T
MQ5Zp2WJVCrlkjXNB1/2RKKBhV755mKSzx03QT18QSHPbmHPSaIXAO/Lz/r3ZOCM
gWRSMxrNjbL/HqWucGPSofJTRdv7yKQZ6p18eO01WxYHN82cO0NjBbgMf33MsdiP
Y2FU9TGwtv3FEYZMwGtNyfuNEY2Jrfbb4QIDAQAB
-----END RSA PUBLIC KEY-----`;

const signature = sign.sign(privateKey);

console.log('signature =', signature.toString('hex'));

verify.update(hash);

console.log('verify =', verify.verify(publicKey, signature));
