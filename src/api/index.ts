import { Server } from 'miragejs'
import { productItems, coupons } from './data'

new Server({
  routes() {
    this.urlPrefix = 'https://api-class101.com'

    this.get('/products', (schema, request)  => {
      let size: number = Number(request.queryParams.size)
      let page: number = Number(request.queryParams.page)

      const currentItems = productItems.slice(page * size, size * (page + 1) - 1)

      return {
        items: currentItems,
        currentPage: page,
        hasNext: currentItems.length >= size
      }
    })

    this.get('/coupons', () => ({
      items: coupons
    }))
  },
})
