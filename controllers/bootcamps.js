const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middlewares/async')
const Bootcamp = require('../models/Bootcamp')

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access   Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const data = await Bootcamp.find()
    res.status(200).json({ succes: true, count: data.length, data })
})

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access   Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id)
    if (bootcamp) return res.status(200).json({ succes: true, bootcamp })
    return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404))
})

// @desc    Create single bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
    const data = await Bootcamp.create(req.body)
    res.status(201).json({succes: true, data})

})

// @desc    Update single bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
        runValidators: true
    })
    if (bootcamp) return res.status(200).json({ succes: true, data: bootcamp })
    return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404))
})

// @desc    Delete single bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const data = await Bootcamp.findByIdAndDelete(req.params.id)
    if (data) return res.status(200).json({ succes: true, data: {} })
    return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404))

})