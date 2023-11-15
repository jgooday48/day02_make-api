const nolanData = require('../data')



class Nolan {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.year = data.year
  }

  static getAll() {
    const nolanFilms = nolanData.map(f => new Nolan(f))
    return nolanFilms
  }

  static findById(nolanId) {
    try {
      const nolanFilmsData = nolanData.find(f => f.id === nolanId)
      const nolanFilm = new Nolan(nolanFilmsData)
      return nolanFilm
    } catch (error) {
      throw new Error('The nolan film does not exist')
    }
  }

  static create(data) {
    if (!data.name) throw new Error('Film name is missing')

    try {
      let nextId
      nolanData.length
        ? nextId = nolanData.reduce((f1, f2) => f1.id > f2.id ? f1 : f2).id + 1
        : nextId = 1

      const newNolanFilm = new Nolan({ id: nextId, name: data.name, year: data.year })
      nolanData.push(newNolanFilm)
      return newNolanFilm
    } catch (err) {
      throw new Error(err)
    }
  }

  update(data) {
    try {
      const nolanFilmsData = nolanData.find(nolan => nolan.id === this.id)

      if (!nolanFilmsData) {
        throw new Error('Nolan film not found')
      }

      if (!data.name) {
        throw new Error('Film name missing')
      }

      nolanFilmsData.name = data.name
      return new Nolan(nolanFilmsData)
    } catch (error) {
      throw new Error(err.message)
    }
  }

  destroy() {
    const nolanFilmsData = nolanData.find(nolan => nolan.id === this.id)
    if (nolanFilmsData) {
        const nolanFilmsIndex = nolanData.indexOf(nolanFilmsData)
        nolanData.splice(nolanFilmsIndex,1)
    } else {
        throw new Error("Nolan film not found")
    }
  }
}

module.exports = Nolan
