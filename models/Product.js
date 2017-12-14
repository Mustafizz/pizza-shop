var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },

  category: {
    type: String,
    default: '',
    trim: true,
    required: 'Category required'

  },
  description: {
    type: String,
    default: '',
    trim: true,
   required: 'Description required'

  },
    image: {
    type: String,
    default: '',
    trim: true,
    required: 'Image required'

  },
     size: {
    type: String,
    default: '',
    trim: true,
    required: 'size required'

  },
  price: {
    type: Number,
    trim: true,
    //default: '0',
    required: 'Price required'

  },
  
 

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var product = mongoose.model('Product', ProductSchema, 'products');
module.exports = product;