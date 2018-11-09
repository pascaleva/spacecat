# spacecat
A clicker game about a cat who wants to leave earth and explore the universe.

### Herangehensweise
Die Aufgabe ist es, ein Clicker-Game mit JavaScript zu bauen. Es soll sich an das bekannte Cookie Clicker Game orientieren, aber muss kein Cookie als solches darstellen. Es soll eine eigene und überraschende Spielmechanik entwickelt werden.


---

### Idee
Die Hauptfigur ist eine Katze, die die Erde verlassen will, da sie dort keine Nahrung mehr findet. Bei Spielbeginn befindet sie sich bereits im Weltall auf der Suche nach Snacks und Tools, die ihr die Reise etwas spannender machen. Mit jedem Klick bewegt sie sich etwas weiter weg von der Erde.

---

### Spielmechanik
Bei Klick auf die Katze bewegt sie sich weiter von der Erde weg. Die Distanz wird gross in Kilometer angezeigt. Es gibt eine Kilometer Anzeige pro Sekunde. Wenn dieser aktiviert wird, schwebt die Katze von allein.

Auf dem Weg begegnen der Katze verschiedenste Goodies, welche ihr einen Boost geben können. Durch diese Boosts steigt die Kilometer Anzeige pro Sekunde. Die Goodies erscheinen random. Jeder Gegenstand hat einen anderen Boost und erscheint zu einem anderen Zeitpunkt. Es gibt gewisse Goodies, die mehr Kilometer geben. Diese erscheinen auch weniger oft. 

Das Spiel ist auf Mobile optimiert. Es soll also möglichst einfach gehalten werden. 

---

### Boosts
Ein Boost besteht aus einem Produkt und gibt bei Klick zusätzliche Kilometer pro Sekunde. 

* Bag: pro Klick +0.2km/s
* Fisch: pro Klick +1km/s
* Maus: pro Klick +3km/s
* Wollknäuel: pro Klick +8km/s 

 Es gibt unten links eine Goodie Collection Übersicht der gesammelten Gegenstände. Somit hat der User immer im Blick was er gesammelt hat und einen Ansporn mehr zu sammeln. Hier ein Bild, welches zeigen soll, wie die Goodies angezeigt werden. 
 
<img src="https://i.imgur.com/vNbcxNh.png" width="250">


---

### Design
Das Design wird bewusst einfach gehalten, sodass es auch auf Mobile gut umgesetzt werden kann. Die Goodies bestehen aus selbst gezeichneten outline-Grafiken, welche Weiss besonders gut zur Geltung kommen.

### Code


### Endprodukt
https://pascaleva.github.io/spacecat/

### Erweiterung
Es werden weitere Boosts eingesetzt. Die Goodie Collection kann so erweitert werden, indem immer 10 Goodies von einem Gegenstand gesammelt werden müssen, damit ein neues Goodie freigeschaltet wird.

Es könnten auch Slow-downs erscheinen, die die Katze zurückfallen lässt bzw. die Kilometer Anzahl sinken lässt. Diese sind getarnt als normale Boosts und erscheinen random. 

Musik könnte integriert werden.


### Quellen
1. [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/)


### Lizenzen
Copyright 2018 Pascale Anderegg

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

