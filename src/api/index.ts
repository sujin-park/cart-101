import { Server } from 'miragejs'
import { productItems, coupons } from './data'

new Server({
  routes() {
    this.urlPrefix = 'https://api-class101.com'

    this.get('/products', (schema, request)  => {
      const size = Number(request.queryParams.size)
      const page = Number(request.queryParams.page)
      const startIdx = page * size
      const lastIdx = size * (page + 1)

      const currentItems = productItems.sort((pre, next) => next.score - pre.score).slice(startIdx, lastIdx)

      return {
        items: currentItems,
        currentPage: page,
        hasNext: productItems.length > lastIdx
      }
    })

    this.get('/coupons', () => ({
      items: coupons
    }))
  },
})
