import Tool from "../models/Tool";

class ToolController {
  //GET (list)
  async index(req, res) {
    try {
      const tools = await Tool.find();

      return res.status(200).json(tools);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  //POST (create)
  async store(req, res) {
    try {
      const tool = await Tool.create(req.body);

      return res.status(200).json({ tool });
    } catch (err) {}
  }
}

export default new ToolController();
