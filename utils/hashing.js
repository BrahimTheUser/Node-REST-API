const { hash, compare } = require('bcryptjs');

exports.doHash = (value, saltValue) => {
	// returns a hashed value based on the input value and salt (number of rounds) meaning the complexity of the hashing
	const result = hash(value, saltValue); 
	return result;
};

exports.doHashValidation = (value, hashedValue) => {
	const result = compare(value, hashedValue);
	return result;
};

exports.hmacProcess = (value, key) => {
	const result = createHmac('sha256', key).update(value).digest('hex');
	return result;
};