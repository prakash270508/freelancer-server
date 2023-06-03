const { createError } = require("../utils/error");
const { createClientProfile } = require("../services/clientService");

//create client profile
exports.createClient = async (req, res, next) => {
  try {
    const client = await createClientProfile(req);
    if (!client) {
      return next(createError(404, "Client not Found"));
    }
    await client.save();
    res.status(200).json({ message: "Client profile Updated", client });
  } catch (error) {
    return next(createError(400, "Client profile updatefailed"));
  }
};
