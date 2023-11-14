const Nolan= require('../models/Nolan')

const index = (req, res) => {
  const nolan = Nolan.getAll()
  res.status(200).send({ data: nolan })
}

const show = (req, res) => {
  try {
    const nolanId = parseInt(req.params.id)
    const nolan = Nolan.findById(nolanId)
    res.status(200).send({ data: nolan })
  } catch (err) {
    res.status(404).send({ error: err.message })
  }
}

const create = (req, res) => {
  try {
    const data = req.body
    const newNolan = Nolan.create(data)
    res.status(201).send({ data: newNolan })
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
}

const update = (req,res) => {
    try {
        const { id } = req.params
        const nolanToUpdate = Nolan.findById(parseInt(id))

        const updatedNolan = nolanToUpdate.update(req.body)
        res.status(200).send({data: updatedNolan})
    } catch (err) {
        res.status(400).send({error: err.message})
        
    }

}

const destroy = (req,res) => {
    try {
        const { id } = req.params
        const nolanToDelete = Nolan.findById(parseInt(id))   
        res.status(204).end()    
    } catch (error) {
        res.status(404).send({error: error.message})
        
    }

}

module.exports = {
  index, show, create, update, destroy
}
