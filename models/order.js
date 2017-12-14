var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = {

  cname: {
    type: String,
    default: '',
    trim: true,
    required: 'Customer Name required'
  },
   pname: {
    type: String,
    default: '',
    trim: true,
    required: 'PizzaName required'
  },
    photo: {
    type: String,
    default: '',
    trim: true,
    required: 'photo required'
  },

  adress: {
    type: String,
    default: '',
    trim: true,
    required: 'Adress required'

  },
  phone: {
    type: String,
    default: '',
    trim: true,
   required: 'Phone Number required'

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

var order = mongoose.model('Order', OrderSchema, 'orders');
module.exports = order;