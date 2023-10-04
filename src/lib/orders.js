export async function getOrderIdList() {
    return [{
        params: {
            id: '1'
        }
        }, {
        params: {
            id: '2'
        }
        }, {
        params: {
            id: '3'
        }
    }]  
}

export async function getOrderDetails(orderId) {
    const dataSet = {
      '1': {
        id: '1',
        date: 'Oct 1, 2023'
      },
      '2': {
        id: '2',
        date: 'Oct 2, 2023'
      },
      '3': {
        id: '3',
        date: 'Oct 3, 2023'
      }
    }
    return dataSet[orderId]
  }