import Tool from "../models/Tool";

class ToolController {
  // GET
  async index(req, res) {
    try {
      if (req.query.tags) {
        const tools = await Tool.find({ tags: { $all: req.query.tags } });

        return res.status(200).json(tools);
      }

      const tools = await Tool.find();
      return res.status(200).json(tools);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  // POST
  async store(req, res) {
    const { title } = req.body;

    const verification = await Tool.findOne({ title });

    if (verification) {
      return res.status(400).json({ message: "Tool already exists" });
    }
    try {
      const tool = await Tool.create(req.body);

      if (!tool) {
        return res
          .status(400)
          .json({ message: "Title, link, description and tags are required" });
      }

      return res.status(201).json({ tool });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  // UPDATE
  async update(req, res) {
    const toolToUpdate = await Tool.findOne({
      _id: req.params.id
    });

    if (!toolToUpdate) {
      return res.status(400).json({ error: "Tool requested doest exists." });
    }

    const tool = await Tool.update(req.body);

    return res.status(201).json({ message: "Tool has been modified." });
  }

  // DELETE
  async delete(req, res) {
    const toolToDelete = await Tool.findOne({
      _id: req.params.id
    });

    if (!toolToDelete) {
      return res.status(400).json({ error: "Tool dont exists." });
    }

    const result = await Tool.deleteOne({ _id: req.params.id });

    return res.status(204).json({ message: "Tool has been deleted." });
  }
}

export default new ToolController();
