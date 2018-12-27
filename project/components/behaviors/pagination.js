const paginationBev = Behavior({
  data: {
    total: null,
    booksArray: []
  },

  methods: {
    setMoreData(booksArray){
      this.setData({
        booksArray: [...this.data.booksArray, ...booksArray]
      });
    },

    getCurrStart(){
      return this.data.booksArray.length;
    },

    setTotal(total){
      this.data.total = total;
    },

    hasMore(){
      if (this.data.booksArray.length >= this.data.total){
        return false;
      }

      return true;
    },
    
    initialize(){
      this.setData({
        total: null,
        booksArray: []
      });
    }
  },
});

export { paginationBev };
