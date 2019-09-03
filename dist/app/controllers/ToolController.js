"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _Tool = require('../models/Tool'); var _Tool2 = _interopRequireDefault(_Tool);

class ToolController {
  // GET
  async index(req, res) {
    try {
      if (req.query.tags) {
        const tools = await _Tool2.default.find({ tags: { $all: req.query.tags } });

        return res.status(200).json(tools);
      }

      const tools = await _Tool2.default.find();
      return res.status(200).json(tools);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  // POST
  async store(req, res) {
    const { title } = req.body;

    const verification = await _Tool2.default.findOne({ title });

    if (verification) {
      return res.status(400).json({ message: "Tool already exists" });
    }
    try {
      const tool = await _Tool2.default.create(req.body);

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
    const toolToUpdate = await _Tool2.default.findOne({
      _id: req.params.id
    });

    if (!toolToUpdate) {
      return res.status(400).json({ error: "Tool requested doest exists." });
    }

    const tool = await _Tool2.default.update(req.body);

    return res.status(201).json({ message: "Tool has been modified." });
  }

  // DELETE
  async delete(req, res) {
    const toolToDelete = await _Tool2.default.findOne({
      _id: req.params.id
    });

    if (!toolToDelete) {
      return res.status(400).json({ error: "Tool dont exists." });
    }

    const result = await _Tool2.default.deleteOne({ _id: req.params.id });

    return res.status(204).json({ message: "Tool has been deleted." });
  }
}

exports. default = new ToolController();
