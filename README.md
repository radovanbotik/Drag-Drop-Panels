# Drag-and-Drop
Based on the list of units I am dynamically creating 2 panels. one for units, and the other for units to be moved into. I am using Drag and Drop API to transfer units inbetween two panels however I am facing a bug where in order to drop the unit on the empty tile first I must hover over the empty list and tiles. I identified the bug cause which is the mouseover event being linked to parent element and in order to register tile, I must hover it first. 

i changed the way I generate HTML so I need to fight a way how to access Tiles withotu accessing parent first.
