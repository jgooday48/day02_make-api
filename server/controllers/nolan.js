const Nolan = require('../models/Nolan')

const index = (req, res) => {
  const nolanFilms = Nolan.getAll()
  res.status(200).send({ data: nolanFilms })
}

const show = (req, res) => {
  try {
    const nolanFilmId = parseInt(req.params.id)
    const nolanFilm = Nolan.findById(nolanFilmId)
    res.status(200).send({ data: nolanFilm })
  } catch (err) {
    res.status(404).send({ error: err.message })
  }
}


const create = (req, res) => {
  try {
    const data = req.body
    const newNolanFilm = Nolan.create(data)
    res.status(201).send({ data: newNolanFilm })
  } catch (err) {
    res.status(400).send({ error: err.message })
  }
}

const update = (req,res) => {
    try {
        const { id } = req.params
        const nolanFilmToUpdate = Nolan.findById(parseInt(id))

        const updatedNolanFilm = nolanFilmToUpdate.update(req.body)
        res.status(200).send({data: updatedNolanFilm})
    } catch (err) {
        res.status(400).send({error: err.message})
        
    }

}

const destroy = (req,res) => {
    try {
        const { id } = req.params
        const nolanFilmToDelete = Nolan.findById(parseInt(id))   
        res.status(204).end()    
    } catch (error) {
        res.status(404).send({error: error.message})
        
    }

}



module.exports = {
  index, show, create, update, destroy
}
