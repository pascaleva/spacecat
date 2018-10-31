# spacecat 


### Herangehensweise
Die Aufgabe ist es, ein Clicker-Game mit JavaScript zu bauen. Es soll sich an das bekannte Cookie Clicker Game orientieren, aber muss kein Cookie als solches darstellen. Es soll eine eigene und überraschende Spielmechanik entwickelt werden.


---

### Idee
Die Hauptfigur ist eine Katze, die die Erde verlassen will, da sie dort keine Nahrung mehr findet. Bei Spielbeginn befindet sie sich bereits im Weltall auf der Suche nach Snacks und Tools, die ihr die Reise etwas spannender machen. Mit jedem Klick bewegt sie sich etwas weiter weg von der Erde.

---

### Spielmechanik
Bei Klick auf die Katze bewegt sie sich weiter von der Erde weg. Die Distanz als Km Zahl gross angezeigt. Wenn sie eine bestimmte Anzahl Kilometer erreicht hat, erreicht sie ein neues Level. Dies wird durch den Zähler links oben angezeigt. Es gibt eine Kilometer Anzeige pro Sekunde.

Auf dem Weg begegnet die Katze verschiedensten Reiseutensilien, welche ihr einen Boost geben können. Durch diese Boosts steigt die Kilometer Anzeige pro Sekunde. Doch nicht alles ist ungefährlich. Es gibt auch Slow-downs, die die Katze zurückfallen lässt bzw. die Kilometer Anzahl sinken lässt. Diese sind getarnt als normale Boosts und erscheinen random. Jeder Gegenstand hat einen anderen Boost und erscheint zu einem anderen Zeitpunkt. Es soll zudem ein Random Generator erstellt werden, der die Gegenstände willkürlich erscheinen lässt. Momentan erscheinen die Elemente noch auf Klick der Katze aber das soll losgelöst in einer math.random Funktion umgesetzt werden.

Das Spiel soll auch auf Mobile funktionieren. Es soll also möglichst einfach gehalten werden. Zudem soll der Aufwand in der Programmierung abgeschätzt werden und zu aufwändige Ideen nach hinten terminiert werden.


---


### Achievements
Achievements werden hier dokumentiert:

**Boosts**
Ein Boost besteht aus einem Produkt und gibt bei Klick zusätzliche Kilometer pro Sekunde. Wenn man 10 vom jeweiligen Produkt gesammelt hat, verschwindet es und ein neues Produkt mit mehr Boost erscheint.

<img src="https://i.imgur.com/vNbcxNh.png" width="250">


* Cat-Bag alle 10 Klicks (10km), pro Klick +0.2km/s
* Wollknäuel: alle 20 Klicks, +0.5km/s 
* Maus: alle 30 Klicks, +1km/s
* Festmahl: das ist ein Element, welches ein Boost oder ein Slow-down sein kann, welches erst  erscheint wenn von einem Produkt 10 gesammelt wurden: es gibt +10km/s ODER ein slow-down -100km%
 
Später werden die Produkte random erscheinen.


---

### Design
Das Design wird bewusst einfach gehalten, sodass es auch auf Mobile gut umgesetzt werden kann.

### Code


### Endprodukt


### Erweiterung
Es werden weitere Boosts eingesetzt. Es könnte mit Levels gearbeitet werden.

### Quellen
1. [Cookie Clicker](http://orteil.dashnet.org/cookieclicker/)
