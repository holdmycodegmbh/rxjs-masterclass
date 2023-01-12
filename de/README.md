# RxJS Masterclass in Deutsch

## Allgemein

Reaktive Programmierung ist event-basiertes Programmieren wozu meistens das Observable-Pattern genutzt wird. Dieses Pattern ermöglicht es Streams von Daten durch verschiedene Operatoren zu managen, ohne das wir uns zu viel um low-level Operationen selber kümmern müssen.

## Kernkonzepte

**Observable** -> Stellt die Idee einer aufrufbaren Sammlung zukünftiger Werde oder Ereignisse dar.  

**Observer** -> Eine Sammlung von Callbacks, die weiß, wie man auf die vom Observable geliefereten Werte hört.

**Subscription** -> Stellt die Ausführung eines Observables dar. In erster Linie nützlich, um die Ausführung abzubrechen.

**Operators** -> Sind reine Funktionen, die funktionalen Programmierstil für den Umgang mit Sammlungen mit Operatore wie map, filter, reduce, etc. ermöglichen.

**Subject** -> Ist das Äquivalent zu einem EventEmitter und die einzige Möglichkeit, einen Wert oder ein Ereignis per Multicast an mehrere Observer zu senden.

**Schedulers** -> Sind zentralisierte Dispatcher zur Steuerung der Parallelität, die es uns die Koordinierung ermöglichen, wenn die Berechnungen stattfinden. Z.B. setTimeout.

## Subject

**Subject** ist ein spezieller Observable-Typ, mit dem Werte per Multicasting an viele Observer gesendet werden können.

**Variationen von Subjects:**
- Subject -> keinen initialen Wert und kein Wiedergabeverhalten (replay behavior)
- BehaviorSubject -> Benötigt einen Anfangswert und gibt seinen aktuellen Wert (letztes ausgegebenes Element) an neue Abonnenten aus.
- ReplaySubject -> Sendet die angegebene Anzahl der zuletzt gesendeten Werte (eine Wiederholung) an neue Abonnenten.
- AsyncSubject -> Gibt den Beobachtern nach Abschluss den neuesten Wert aus.

