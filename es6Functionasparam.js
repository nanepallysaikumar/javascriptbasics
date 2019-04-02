const store = {
    fName: "sai",
  }
  
  const pageMapper = createAnalyticsMapper(store => ({
      page: {
         fname: store.fName
      },
  }));
  
  
  function createAnalyticsMapper(fn) {
      return (data) => fn(data);
  }
  
  console.log(pageMapper(store));