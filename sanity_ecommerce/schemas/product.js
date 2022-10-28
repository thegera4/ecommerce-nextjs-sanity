export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image', //image
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'name',  //name of product
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price', //price of product
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details', //details of product
      title: 'Details',
      type: 'string',
    },
  ]
}
