import { Schema, model } from "mongoose";
import { nanoid } from "nanoid";

const allUrlSchema = new Schema({
  orginal_url: {
    type: String,
    required: true,
  },
  shorter_url: {
    type: String,
    default: () => nanoid(10),
  },
  
}, {
  collection: "shorted_urls",
});

export const ShortedUrl = model("ShortedUrl", allUrlSchema);
