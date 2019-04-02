var _ = require('lodash');

var purchaseService = ['asdf12','39342aa','12399','129asg','39342aa']
var productService = [{id: '39342aa', prductname: 'orange'}, {id: '129asg', prductname: 'apple'},
{id: '39342aa', prductname: 'orange'},]
console.time('start');
var updatedProductService = _.sortBy(productService, function(item){
  console.log(purchaseService.indexOf(item.id));
  return purchaseService.indexOf(item.id)
});

console.timeEnd('start');
console.log(updatedProductService);
