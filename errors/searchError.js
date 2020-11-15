module.exports = {
  searchError(ERROR) {
    const error = `ERROR [searchError(search)] ~ ${ERROR}`;
    console.log(error);
    process.exit(1);
  },
};
