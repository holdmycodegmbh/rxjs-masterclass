import { Component, OnInit } from '@angular/core';
import { combineLatest, delay, finalize, from, groupBy, interval, map, mergeMap, of, ReplaySubject, Subject, take, tap, timer, toArray, zip } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {

  people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
  ];

  interval$ = interval(1000);

  timerOne$ = timer(1000, 4000);
  timerTwo$ = timer(2000, 4000);
  timerThree$ = timer(3000, 4000);

  subject: ReplaySubject<any> = new ReplaySubject<any>(2);

  ngOnInit(): void {
    //from(this.people).subscribe(c => console.log('from', c));
    //of(this.people).subscribe(c => console.log('of', c));

    this.subject
    .pipe(
      groupBy(
        person => person.age,
      ),
      tap(c => console.log(c)),
      mergeMap(group => zip(of(group.key), group.pipe(map(g => g.name), toArray()))),
      ).subscribe(
        v => console.log(v),
        e => console.error(e),
        () => console.log('completed')
      );


      this.subject.next(this.people[0]);

      this.subject.next(this.people[1]);
      this.subject.next(this.people[2]);
      this.subject.next(this.people[3]);
      console.log('populated');
      this.subject.complete();

      this.interval$.subscribe(c => console.log('interval: ', c));
      
      combineLatest(this.timerOne$, this.timerTwo$, this.timerThree$)
        .subscribe(
          ([timerOne, timerTwo, timerThree]) => {
            console.log(`
              Timer One: ${timerOne},
              timer Two: ${timerTwo},
              Timer Three: ${timerThree}
              `);
          }
        );
  }

}
