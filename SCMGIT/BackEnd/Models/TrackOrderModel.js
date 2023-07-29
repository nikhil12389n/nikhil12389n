const mongoose = require('mongoose');

const TrackOrderSchema = new mongoose.Schema({
  adstname: {
    type: String,
    unique: true
  },
  requests: [{
    requestno: {
      type: Number,
    },
    desc: {
      type: [String]
    },
    status: {
      type: [String]
    }
  }]
});
module.exports = mongoose.model("Trackorder", TrackOrderSchema);
