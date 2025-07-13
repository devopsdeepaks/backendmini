const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  tlsInsecure: false, // force TLS
  tlsAllowInvalidCertificates: false,
  tlsAllowInvalidHostnames: false,
});

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
  email: String,
  password: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);
