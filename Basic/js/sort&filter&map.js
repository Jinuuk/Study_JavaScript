  //array sort
    //숫자
    var arr = [7,3,5,2,40];
    arr.sort(function(a,b){
      return a-b;
    });
    // console.log(arr);

    //문자 역순
    var arr2 = ['a','c','b'];
    arr2.sort(function(a,b){
      if(a>b){
        return -1;
      } else if (a<b){
        return 1;
      } else {
        return 0;
      }
    });
    // console.log(arr2);

    $('.sortByPriceBtn').on('click',function(){
      console.log('정렬');
      products.sort(function(a,b){
        // if(a.price > b.price){
        //   return 1;
        // }else if (a.price < b.price){
        //   return -1;
        // }else {
        //   return 0;
        // }
        return a.price-b.price;
      })
        $('.card-box').html('');
        products.forEach(data=>{
        showMoreProduct(data);
      });
    })

    //array filter
    var arr3 = [7,3,5,2,40];

    var newArr3 = arr3.filter(function(ele){
      return ele < 4;
    });

    console.log(arr3);
    console.log(newArr3);
    
    //array map
    var arr4 = [7,3,5,2,40];

    var newArr4 = arr3.map(function(ele){
      return ele * 4;
    });

    console.log(arr4);
    console.log(newArr4);