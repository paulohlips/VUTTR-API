import Tool from "../models/Tool";

class ToolController {
  async store(req, res) {
    try {
      const tool = await Tool.create(req.body);

      return res.status(200).json({ tool });
    } catch (err) {}
  }
}

export default new ToolController();
