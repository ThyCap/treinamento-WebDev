let inventory = {
  sunglasses: 100,
  hats: 50,
  shoes: 80
}

let order = {
  orderSunglass(num)
  {
    return new Promise((resolve,reject) =>
    {
      setTimeOut(() =>
      {
        let inStock = inventory.sunglasses >= num
        if (inStock)
        {
          console.log('Order processed!')
          inventory.sunglasses -= num
        }
        else
        {
          console.log('Sorry! Not enough items in stock.')
        }
      },10)
    })
  },

  orderHat(num)
  {
    return new Promise((resolve,reject) =>
    {
      setTimeOut(() =>
      {
        let inStock = inventory.hats >= num
        if (inStock)
        {
          console.log('Order processed!')
          inventory.hats -= num
        }
        else
        {
          console.log('Sorry! Not enough items in stock.')
        }
      },10)
    })
  },


  orderShoes(num)
  {
    return new Promise((resolve,reject) =>
    {
      setTimeOut(() =>
      {
        let inStock = inventory.shoes >= num
        if (inStock)
        {
          console.log('Order processed!')
          inventory.shoes -= num
        }
        else
        {
          console.log('Sorry! Not enough items in stock.')
        }
      },10)
    })
  }
}


order.orderSunglass(5);
