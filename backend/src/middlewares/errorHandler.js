function errorHandler(error, _req, res, _next) {
	const statusCode = error.statusCode || 500;

	res.status(statusCode).json({
		ok: false,
		message: error.message || "Internal server error",
	});
}

module.exports = {
	errorHandler,
};
