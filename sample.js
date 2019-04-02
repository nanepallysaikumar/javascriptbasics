const obj = {
    a: 1,
    fun: function() {
      return this.a;
    }
  }
  
  console.log(obj.fun());

  const d = obj.fun;



  console.log(d.call(obj));

  const e = obj.fun.bind(obj);

  
  console.log(e)
  console.log(e())