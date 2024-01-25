const Joi=require("joi");

module.exports.postSchema = Joi.object ({
    post:Joi.object({
        title:Joi.string().required(),
        description:Joi.string().trim().min(2).max(200).required(),
        likes:Joi.number().default(0),
        createdDate:Joi.date()
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review:Joi.object({
        comment:Joi.string().required().max(100).trim()
    }).required()
})

module.exports.messageSchema=Joi.object({
    message:Joi.object({
        text:Joi.string().required().max(150).trim()
    }).required()
})