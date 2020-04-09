import { Listing } from "#root/db/models"

const setupRoutes = app => {
  try {
    console.log('listing', Listing)

    app.get('/listing', async (req, res, next) => {
      const listing = await Listing.findAll()

      return res.json(listing);
    })
  } catch (e) {
    console.log('error ->', e)
  }
}

export default setupRoutes
