export const DUMMY_DATA = {
  _id: '64be9083e5793f47e99454ae',
  name: 'Lorem ipsum dolor sit amet consectetur adipisicing',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  price: 100000,
  isDiscount: true,
  discountPercentage: 10,
  discountPrice: 90000,
  categoryId: '64be8a3516b11f521669b279',
  thumbnail: 'SementaraLangsungDi.png',
  images: [
    require('../../../assets/product/1.jpg'),
    require('../../../assets/product/1.jpg'),
    require('../../../assets/product/1.jpg')
  ],
  averageRating: 3,
  countReview: 2,
  reviews: [
    {
      id: 1,
      name: 'John',
      image: 'https://i.pravatar.cc/150?img=68',
      rating: 4,
      review: 'Ok'
    },
    {
      id: 2,
      name: 'Doe',
      image: 'https://i.pravatar.cc/150?img=68',
      rating: 2,
      review: 'Ok aja'
    }
  ],
  specifications: [
    {
      title: 'Procesor',
      description: 'Intel 7'
    },
    {
      title: 'Ram',
      description: '4 Gb'
    }
  ],
  locations: [
    {
      name: 'Toko 1',
      location: 'Jl. Jalan',
      stock: 10,
      image: require('../../../assets/product/1.jpg')
    },
    {
      name: 'Toko 2',
      location: 'Jl. Jalan',
      stock: 15,
      image: require('../../../assets/product/1.jpg')
    },
    {
      name: 'Toko 3',
      location: 'Jl. Jalan',
      stock: 20,
      image: require('../../../assets/product/1.jpg')
    }
  ],
  sold: 20
}
