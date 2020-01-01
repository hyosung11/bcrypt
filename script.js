const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.hash('soup', saltRounds, function(err, hash) {
  console.log(hash);
  // Store hash in your password DB.
});

// Load hash from your password DB.
bcrypt.compare('soup', '$2b$10$TZx18GNnFJ3XytRvjjgvpOPaTUH.ZnZWvMaxlFd.ibEmSq/krWDeO', function(err, res) {
  console.log(res);
    // res == true
});
