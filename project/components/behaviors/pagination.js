const paginationBev = Behavior({
  data: {
    total: null,
    booksArray: [],
    emptyResult: false
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

      if (!this.data.total){
        this.setData({
          emptyResult: true
        });
      }
    },

    hasMore(){
      if (this.data.booksArray.length >= this.data.total){
        return false;
      }

      return true;
    },
    
    initialize(){
      this.setData({
        total      : null,
        booksArray : [],
        emptyResult: false
      });
    }
  },
});

export { paginationBev };
