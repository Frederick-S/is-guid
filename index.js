module.exports = function (value) {
    if (typeof value !== 'string') {
        return false;
    }
    
    return /^\{?[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}?$/.test(value);
};