const Scripts = require("./../db/models/scripts") //

exports.index = async (req, res) => {
    // #swagger.tags = ['Scripts']
    // #swagger.summary = 'Find all scripts.'
    // #swagger.description = 'This endpoint returns a list with all the scripts in the database.'
    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/Scripts' }
} */
    const scripts = await Scripts.find()
    res.send(scripts)
};

exports.id = async (req, res, next) => {
    // #swagger.tags = ['Scripts']
    // #swagger.summary = 'Find script by ID.'
    // #swagger.description = 'This endpoint returns a script found with the provided ID'
    /* #swagger.parameters['_id'] = {
        description: "Id of the desired script.",
        required: true,
        type: "string",
        schema: "636c889a2a02ef8e6e9f50e6"
} */

    /* #swagger.responses[200] = {
        description: 'User successfully obtained.',
        schema: { $ref: '#/definitions/Contact' }
} */

    const script = await Scripts.findById(req.params._id);
    if(script) {
        res.send(script);
    } else {
        next("Contact not found.");
    }
};

exports.create = async (req, res) => {
    // #swagger.tags = ['Scripts']
    // #swagger.summary = 'Create script and return ID. All fields are required.'
    // #swagger.description = 'This endpoint creates a script and returns the newly created script ID.'
    /*  #swagger.parameters['Scripts'] = {
                    in: 'body',
                    description: 'Model of the new script.',
                    schema: { $ref: '#/definitions/Contact' }
            } */
    /* #swagger.responses[201] = {
    description: 'User successfully created.',
    schema: "Newly created Contact ID"
} */
    const script = await Scripts.create(req.body);
    res.status(201).send(script._id);
};

exports.update = async (req, res) => {
    // #swagger.tags = ['Scripts']
    // #swagger.summary = 'Update script.'
    // #swagger.description = 'This endpoint updates a script. All fields are required for a successful update.'
    /*  #swagger.parameters['Scripts'] = {
                in: 'body',
                description: 'Model of the new script.',
                schema: { $ref: '#/definitions/Contact' }
        } */
    const _id = req.params._id;
    await Scripts.findByIdAndUpdate(_id, req.body);
    res.sendStatus(204)
};

exports.delete = async (req, res) => {
    // #swagger.tags = ['Scripts']
    // #swagger.summary = 'Delete script.'
    // #swagger.description = 'This endpoint deletes a script if a valid ID is passed.'
    const _id = req.params._id;
    await Scripts.findByIdAndDelete(_id);
    res.sendStatus(200)
};
