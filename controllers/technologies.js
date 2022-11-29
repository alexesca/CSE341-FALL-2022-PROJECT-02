const Technologies = require("./../db/models/technologies.js") //

exports.index = async (req, res) => {
    // #swagger.tags = ['Technology']
    // #swagger.summary = 'Find all technology.'
    // #swagger.description = 'This endpoint returns a list with all the technology in the database.'
    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/Technology' }
} */
    const conditions = {
        _userId: req.user._id
    }
    const technology = await Technologies.find(conditions)
    res.send(technology)
};

exports.id = async (req, res, next) => {
    // #swagger.tags = ['Technology']
    // #swagger.summary = 'Find technology by ID.'
    // #swagger.description = 'This endpoint returns a technology found with the provided ID'
    /* #swagger.parameters['_id'] = {
        description: "Id of the desired technology.",
        required: true,
        type: "string",
        schema: "636c889a2a02ef8e6e9f50e6"
} */

    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/Technology' }
} */
    const conditions = {
        _id: req.params._id,
        _userId: req.user._id
    }
    const technology = await Technologies.findOne(conditions);
    if(technology) {
        res.send(technology);
    } else {
        next("Technology not found.");
    }
};

exports.create = async (req, res) => {
    // #swagger.tags = ['Technology']
    // #swagger.summary = 'Create technology and return ID. All fields are required.'
    // #swagger.description = 'This endpoint creates a technology and returns the newly created technology ID.'
    /*  #swagger.parameters['Technology'] = {
                    in: 'body',
                    description: 'Model of the new technology.',
                    schema: { $ref: '#/definitions/Technology' }
            } */
    /* #swagger.responses[201] = {
    description: 'User successfully created.',
    schema: "Newly created Technology ID"
} */
    try {
        const technology = await Technologies.create(req.body);
        res.status(201).send(technology._id);
    } catch (e) {
        throw new Error("There was an error creating the technology.")
    }
};

exports.update = async (req, res) => {
    // #swagger.tags = ['Technology']
    // #swagger.summary = 'Update technology.'
    // #swagger.description = 'This endpoint updates a technology. All fields are required for a successful update.'
    /*  #swagger.parameters['Technology'] = {
                in: 'body',
                description: 'Model of the new technology.',
                schema: { $ref: '#/definitions/Technology' }
        } */
    const conditions = {
        _id: req.params._id,
        _userId: req.user._id
    }
    await Technologies.findOneAndUpdate(conditions, req.body);
    res.sendStatus(204)
};

exports.delete = async (req, res) => {
    // #swagger.tags = ['Technology']
    // #swagger.summary = 'Delete technology.'
    // #swagger.description = 'This endpoint deletes a technology if a valid ID is passed.'
    const conditions = {
        _id: req.params._id,
        _userId: req.user._id
    }
    await Technologies.findOneAndDelete(conditions);
    res.sendStatus(200)
};
