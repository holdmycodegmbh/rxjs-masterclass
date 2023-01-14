import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  // Subject hat keinen initialen Wert und keinen Replay-Verhalten
  subject: Subject<string> = new Subject<string>();

  // BehaviorSubject hat einen initalen Wert und gibt immer den letzen Wert aus
  behaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('initial value');
  // AsyncSubject gibt nur dann einen Wert aus, wenn die Subscription auf complete gesetzt ist
  asyncSubject: AsyncSubject<string> = new AsyncSubject<string>();
   // ReplaySubject hat keinen initialen Wert und buffert die Anzahl X der Ausgabeergebnisse für den nächsten Subscriber
  replaySubject: ReplaySubject<string> = new ReplaySubject<string>(5);

  subjects = [this.subject, this.behaviorSubject, this.asyncSubject, this.replaySubject];

  ngOnInit(): void {
    console.log('SUBSCRIBER 1');
    this.subject.subscribe(v => console.log('SUBSCRIBER 1 - subject: ', v));
    this.behaviorSubject.subscribe(v => console.log('SUBSCRIBER 1 - behaviorSubject: ', v));
    this.asyncSubject.subscribe(v => console.log('SUBSCRIBER 1 - asyncSubject: ', v));
    this.replaySubject.subscribe(v => console.log('SUBSCRIBER 1 - replaySubject: ', v));
    console.log('=======');

    console.log('push next value: value 1');
    this.subjects.forEach(s => s.next('value 1'));
    console.log('=======');

    console.log('push next value: value 2');
    this.subjects.forEach(s => s.next('value 2'));
    console.log('=======');

    console.log('SUBSCRIBER 2');
    this.subject.subscribe(v => console.log(200, 'SUBSCRIBER 2 - subject: ', v));
    this.behaviorSubject.subscribe(v => console.log(200, 'SUBSCRIBER 2 - behaviorSubject: ', v));
    this.asyncSubject.subscribe(v => console.log(200, 'SUBSCRIBER 2 - asyncSubject: ', v));
    this.replaySubject.subscribe(v => console.log(200, 'SUBSCRIBER 2 - replaySubject: ', v));
    console.log('=======');

    console.log('push next value: value 3');
    this.subjects.forEach(s => s.next('value 3'));
    console.log('=======');

    console.log('push next value: value 4');
    this.subjects.forEach(s => s.next('value 4'));
    console.log('=======');

    console.log('SUBSCRIBER 3');
    this.subject.subscribe(v => console.log(300, 'SUBSCRIBER 3 - subject: ', v));
    this.behaviorSubject.subscribe(v => console.log(300, 'SUBSCRIBER 3 - behaviorSubject: ', v));
    this.asyncSubject.subscribe(v => console.log(300, 'SUBSCRIBER 3 - asyncSubject: ', v));
    this.replaySubject.subscribe(v => console.log(300, 'SUBSCRIBER 3 - replaySubject: ', v));
    console.log('=======');

    console.log('push next value: value 5');
    this.subjects.forEach(s => s.next('value 5'));
    console.log('=======');

    console.log('Set complete for asyncSubject');
    this.subjects.forEach(s => s.complete());
    console.log('=======');

    console.log('push next value: value 6');
    this.subjects.forEach(s => s.next('value 6'));
    console.log('=======');
  }

}
