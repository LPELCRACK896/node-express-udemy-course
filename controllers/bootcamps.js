const ErrorResponse = require('../utils/errorResponse')
const Bootcamp = require('../models/Bootcamp')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access   Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const data = await Bootcamp.find()
        res.status(200).json({ succes: true, count: data.length, data })
    }catch(err)
    {
        next(err)
    }
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access   Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        if (bootcamp) return res.status(200).json({ succes: true, bootcamp })
        return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404))
    } catch (err) 
    {
        next(err)
    }
}

// @desc    Create single bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
    try
    {
        const data = await Bootcamp.create(req.body)
        res.status(201).json({succes: true, data})
    }
    catch(err)
    {
        next(err)
    }
}

// @desc    Update single bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true, 
            runValidators: true
       })
       if (bootcamp) return res.status(200).json({ succes: true, data: bootcamp })
       return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404))
    } catch (err) 
    {
        next(err)
    }

}

// @desc    Delete single bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
    try 
    {
        const data = await Bootcamp.findByIdAndDelete(req.params.id)
        if (data) return res.status(200).json({ succes: true, data: {} })
        return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404))
    } 
    catch (err) 
    {
        next(err)
    }
}