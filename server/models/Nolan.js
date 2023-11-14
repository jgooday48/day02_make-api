// models/DB -> controllers -> routers -> app -> localhost:3000/villains

// localhost:3000/villains -> app -> routers -> controllers -> models/DB

const nolanData = require('../data')

class Nolan {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.year = data.year
  }

  static getAll() {
    const nolan = nolanData.map(v => new Nolan(v))
    return nolan
  }

  static findById(nolanId) {
    try {
      const nolanData = nolanFilmsData.find(v => v.id === nolanId)
      const nolan = new Nolan(nolanData)
      return nolan
    } catch (error) {
      throw new Error('The nolan film')
    }
  }

  static create(data) {
    if (!data.name) throw new Error('name is missing')

    try {
      let nextId
      nolanFilmsData.length
        ? nextId = nolanFilmsData.reduce((v1, v2) => v1.id > v2.id ? v1 : v2).id + 1
        : nextId = 1

      const newNolan = new Nolan({ id: nextId, name: data.name, year: data.year })
      nolanFilmsData.push(newNolan)
      return newNolan
    } catch (err) {
      throw new Error(err)
    }
  }
  update(data) {
    try {
      const nolanData = nolanFilmsData.find(nolan => nolan.id === this.id)

      if (!nolanData) {
        throw new Error('nolan film not found')
      }

      if (!data.name) {
        throw new Error('film name missing')
      }

      nolanData.name = data.name
      return new Nolan(nolanData)
    } catch (error) {
      throw new Error(err.message)
    }
  }

  destroy() {
    const nolanData = nolanFilmsData.find(nolan => nolan.id === this.id)
    if (nolanData) {
        const nolanFilmsIndex = nolanData.indexOf(nolanData)
        nolanFilmsData.splice(nolanFilmsIndex,1)
    } else {
        throw new Error("Nolan film not found")
    }
  }
}

module.exports = Nolan
