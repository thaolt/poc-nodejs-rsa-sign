const crypto = require('crypto');
var EC = require('elliptic').ec;

// Create and initialize EC context
// (better do it once and reuse it)
var ec = new EC('secp256k1');

// Generate keys
var key = ec.genKeyPair();

// Sign the message's hash (input must be an array, or a hex-string)
const sha256 = crypto.createHash('SHA256');

const data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Fusce nisl magna, dictum ac lorem et, pellentesque vehicula magna. 
Quisque gravida massa velit, eu tristique mi placerat ac. Suspendisse 
ut massa at urna vestibulum vulputate. Vivamus orci lectus, aliquet 
a vehicula vel, sodales at tellus. Nullam dignissim sem quis lacus 
tempor ornare. Nullam id vehicula ipsum, nec rhoncus diam. Sed porttitor 
justo at justo placerat, nec laoreet neque iaculis.`;

let hash = sha256.update(data, 'utf8').digest('hex');

console.log('data =', data);
console.log('hash =', hash);
console.log('private key =', key.getPrivate('hex'));

var signature = key.sign(hash);

// Export DER encoded signature in Array
var derSign = signature.toDER('hex');
console.log('DER signature =', derSign, typeof derSign);

// Verify signature (with privatekey)
console.log('verify with private key =', key.verify(hash, derSign));

// CHECK WITH NO PRIVATE KEY

var pubPoint = key.getPublic();
var x = pubPoint.getX();
var y = pubPoint.getY();

var pub = pubPoint.encode('hex');
console.log('public key =', pub);

// Import public key
var pubkey = ec.keyFromPublic(pub, 'hex');

// Verify signature
console.log('verify with public key =', pubkey.verify(hash, derSign));