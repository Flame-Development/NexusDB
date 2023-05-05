class DatabaseError extends Error {
    constructor(message) {
        super(`\x1b[31m${message}\x1b[0m`);
    }
}

module.exports = DatabaseError;