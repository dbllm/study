// var click = Rx.Observable.fromEvent(document, 'click');
// var source = click.map(e => Rx.Observable.of(1,2,3));

// var example = source.concatAll();
// example.subscribe({
//     next: (value) => { console.log(value, 'value'); },
//     error: (err) => { console.log('Error: ' + err); },
//     complete: () => { console.log('complete'); }
// });

var obs1 = Rx.Observable.interval(1000).take(5);
var obs2 = Rx.Observable.interval(500).take(2);
var obs3 = Rx.Observable.interval(2000).take(1);

var source = Rx.Observable.of(obs1, obs2, obs3);

var example = source.concatAll();

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});