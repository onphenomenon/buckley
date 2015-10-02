# Case-Citation Heatmap

>A heatmap svg using D3.js mapping page citation frequency data to pages in Buckley v. Valeo.
>Live site here: [Citation Heatmap](http://onphenomenon.github.io/buckley/client/buckley.html)

## Design

Based on this [block](http://bl.ocks.org/nbremer/6052681), made the heatmap a single column of tiled hexagons.
The darker green represents higher frequency of citations. Mousover for a tool-tip to reveal data. 
Click the tile to scroll to the page of the document in the adjacent div. 

## Additional Styling

I would like to create a marker that appears to the right side of the heatmap that specifies the page #
that is clicked on and shown in the window. Since I'm farily new to SVGs, I ran into coordinate complications.
Also resizing the heatmap SVG to be the same size as the document window with scaling proved challenging, in addition to getting it to resize with the window.
Overall, I still need to perfect the scaling, as the heatmap extends past the bottom of the window, but to keep it in view I would sacrifice visibility, as all the hexagons would get smaller. 
The design choice of hexagons is interesting but not quite user friendly and may not work with the dynamic scaling. 






