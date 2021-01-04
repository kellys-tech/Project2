const router = require('express').Router();
const {
  Category
} = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create({
      name: req.body.name,
      description: req.body.description,
    });

    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/',async (req, res) => {
  try {
const category = await Category.findAll();
res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }

});
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({
        message: 'No category found with this id!'
      });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;