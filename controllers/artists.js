const Artist = require("../models/Artist");

async function index(req, res) {
  try {
    const artists = await Artist.find({});
    if (artists) {
      res.status(200).send(artists);
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

async function getArtistByName(req, res) {
  try {
    const artistToGet = await Artist.findOne({ artist: req.params.artist });
    if (artistToGet) {
      res.status(202).send(artistToGet);
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

async function create(req, res) {
  try {
    // req.body will have the info that the artist filled out on the frontend
    const createdArtist = await Artist.create(req.body);
    if (createdArtist) {
      res.status(201).send(createdArtist);
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

async function update(req, res) {
  try {
    const artistToUpdate = await Artist.findByIdAndUpdate(req.params.id);
    if (artistToUpdate) {
      res.status(202).send(artistToUpdate);
    }
  } catch (e) {
    res.status(400).send(e);
  }
}

async function destroy(req, res) {
  try {
    const deletedArtist = await Artist.findByIdAndDelete(req.params.id);
    if (deletedArtist) {
      res.status(201).send(deletedArtist);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  index,
  getArtistByName,
  create,
  update,
  destroy,
};
