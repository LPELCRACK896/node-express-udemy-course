const mongoose = require('mongoose')

const BootCampScheema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please add a name'],
        unique: true, 
        trim: true, 
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    slug: String,
    description: {
        type: String, 
        required: [true, 'Please add a name'],
        maxlength: [500, 'Description cannot be more than 500 characters']
 
    },
    website: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/, 
            'Please use a valid URL with HTTP or HTTPS'
        ]
    },
    address: {
        type: String, 
        required: true
    },
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
          },
          formattedAddress: String,
          street: String,
          city: String,
          state: String,
          zipcode: String,
          country: String,
    },
    carrers: {
        type: [String], 
        required: true, 
        enum: [
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating: {
        type: Number, 
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating must be under 10']
    },
    averagCost: Number, 
    photo: {
        type: String, 
        default: 'no-photo.jpg'
    }, 
    housing: {
        type: Boolean,
        default: false
      },
      jobAssistance: {
        type: Boolean,
        default: false
      },
      jobGuarantee: {
        type: Boolean,
        default: false
      },
      acceptGi: {
        type: Boolean,
        default: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      },

})

module.exports = mongoose.model('Bootcamp', BootCampScheema)