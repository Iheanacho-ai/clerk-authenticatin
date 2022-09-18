import { UserButton } from "@clerk/clerk-react";

const Shop = () => {
  const productList = [
      {
          productName: "Beige Sweatshirt",
          productImage: "https://images.pexels.com/photos/6311670/pexels-photo-6311670.jpeg?auto=compress&cs=tinysrgb&w=300",
          productPrice: "60",
          id: 1
      },
      {
          productName: "itzy Totebag",
          productImage: "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=300",
          productPrice: "20",
          id: 2
      },
      {
          productName: "Netted Bag",
          productImage: "https://images.pexels.com/photos/4385287/pexels-photo-4385287.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
          productPrice: "32",
          id: 3
      },
      {
          productName: "Brown Leather Backpack",
          productImage: "https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=300",
          productPrice: "70",
          id: 4
      },
      {
          productName: "Red Sports Backpack",
          productImage: "https://images.pexels.com/photos/1102874/pexels-photo-1102874.jpeg?auto=compress&cs=tinysrgb&w=300",
          productPrice: "60",
          id: 5
      },
      {
          productName: "Comfy Socks",
          productImage: "https://images.pexels.com/photos/8187289/pexels-photo-8187289.jpeg?auto=compress&cs=tinysrgb&w=300",
          productPrice: "15",
          id: 6
      },
      {
          productName: "Kitchen Apron",
          productImage: "https://images.pexels.com/photos/1274640/pexels-photo-1274640.jpeg?auto=compress&cs=tinysrgb&w=300",
          productPrice: "40",
          id: 7
      },
      {
          productName: "RoundNeck Black Tshirt",
          productImage: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=300",
          productPrice: "20",
          id: 8
      },
  ]

  const addtoCart = (productName) => {
    alert(`${productName} added to cart.`)
  }


  return(
      <div className="ecommerce">
          <div className="bg-white">
            <div className="max-w-2l mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="header">
                  <h2 className="text-4xl font-normal leading-normal mt-0 mb-2 text-gray-800">Welcome!</h2>
                  <UserButton/>
                </div>
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    { 
                        productList.map(({productName, productImage, productPrice, id}) => (
                            <a href="#" className="group" id={id}>
                                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src={productImage} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{productName}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">${productPrice}</p>
                                <button
                                    type="button"
                                    className="cursor inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={()=> addtoCart(productName)}
                                >
                                Add to cart
                                </button>
                            </a>
                        ))
                    }
                </div>
            </div>
          </div>
      </div>
  )
} 

export default Shop;  