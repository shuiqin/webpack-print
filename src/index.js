/**
 * Created by shuiqin on 2/26/18.
 */
/**
 * Created by shuiqin on 2/23/18.
 */
export default function printMe() {
  console.log('I get called from print.js!');
  this.alert('Hmmm, this probably isn\'t a great idea...');
}

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
);