import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  subject: Subject<string> = new Subject<string>()
  behaviorSubject: BehaviorSubject<string> = new BehaviorSubject<string>('initial value');
  asyncSubject: AsyncSubject<string> = new AsyncSubject<string>();
  replaySubject: ReplaySubject<string> = new ReplaySubject<string>(5);

  subjects = [this.subject, this.behaviorSubject, this.asyncSubject, this.replaySubject];

  ngOnInit(): void {
    console.log('Subscribe 1');
    this.subject.subscribe(v => console.log('subscriber 1 subject: ', v));
    this.behaviorSubject.subscribe(v => console.log('subscriber 1 behaviorSubject: ', v));
    this.asyncSubject.subscribe(v => console.log('subscriber 1 asyncSubject: ', v));
    this.replaySubject.subscribe(v => console.log('subscriber 1 replaySubject: ', v));

    console.log('push next value: value 1');
    this.subjects.forEach(s => s.next('value 1'));

    console.log('push next value: value 2');
    this.subjects.forEach(s => s.next('value 2'));

    console.log('Subscribe 2');
    this.subject.subscribe(v => console.log(200, 'subscriber 2 subject: ', v));
    this.behaviorSubject.subscribe(v => console.log(200, 'subscriber 2 behaviorSubject: ', v));
    this.asyncSubject.subscribe(v => console.log(200, 'subscriber 2 asyncSubject: ', v));
    this.replaySubject.subscribe(v => console.log(200, 'subscriber 2 replaySubject: ', v));

    console.log('push next value: value 3');
    this.subjects.forEach(s => s.next('value 3'));

    console.log('push next value: value 4');
    this.subjects.forEach(s => s.next('value 4'));

    console.log('Subscribe 3');
    this.subject.subscribe(v => console.log(300, 'subscriber 3 subject: ', v));
    this.behaviorSubject.subscribe(v => console.log(300, 'subscriber 3 behaviorSubject: ', v));
    this.asyncSubject.subscribe(v => console.log(300, 'subscriber 3 asyncSubject: ', v));
    this.replaySubject.subscribe(v => console.log(300, 'subscriber 3 replaySubject: ', v));

    console.log('push next value: value 5');
    this.subjects.forEach(s => s.next('value 5'));

    console.log('Set complete for asyncSubject');
    this.subjects.forEach(s => s.complete());

    console.log('push next value: value 6');
    this.subjects.forEach(s => s.next('value 6'));
  }

}
