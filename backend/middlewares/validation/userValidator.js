import { body, validationResult } from "express-validator";

export const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};

export const validateUserDetails = [
	body("name")
		.optional()
		.isAlpha()
		.withMessage("Name must contain only alphabets"),
	body("addressLine1")
		.optional()
		.isString()
		.withMessage("address must be a valid string"),
	body("city")
		.optional()
		.isAlpha("en-US", { ignore: " " })
		.withMessage("city must contain only alphabets"),
	body("country")
		.optional()
		.isAlpha("en-US", { ignore: " " })
		.withMessage("Country must contain only alphabets"),
	validate,
];
