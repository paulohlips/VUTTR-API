import Tool from "../models/Tool";

class ToolController {
  //GET 
  async index(req, res) {
    console.log(req.body)
    try {

      if (req.query.tags) {
        const tools = await Tool.find({ tags: { $all: req.query.tags } })

        return res.status(200).json(tools);
      }

      const tools = await Tool.find();
      return res.status(200).json(tools);

    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  //POST 
  async store(req, res) {
    try {
      const tool = await Tool.create(req.body);

      return res.status(201).json({ tool });
    } catch (err) { }
  }

  //DELETE
  async delete(req, res) {
    const result = await Tool.deleteOne({ _id: req.params.id })

    return res.status(204).json({ result });
  }
}


export default new ToolController();
