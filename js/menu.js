var menuHTML =    "<ul>" +
        "<li><a href=\"index.html\">Strona główna</a></li>" +
            "<li><a href=\"#\">Pseudoklasy</a>" +
                "<ul>" +
                    "<li><a href=\"pseudo.html\">Wszystkie</a></li>" +
                    "<li><a href=\"#\">Część I</a>" +
                        "<ul>" +
                            "<li><a href=\"pseudo.html#active\">:active</a></li>" +
                            "<li><a href=\"pseudo.html#checked\">:checked</a></li>" +
                            "<li><a href=\"pseudo.html#enabled\">:enabled & :disabled</a></li>" +
                            "<li><a href=\"pseudo.html#empty\">:empty</a></li>" +
                            "<li><a href=\"pseudo.html#first\">:first</a></li>" +
                            "<li><a href=\"pseudo.html#first-child\">:first-child</a> </li>" +
                            "<li><a href=\"pseudo.html#focus\>:focus</a></li>" +
                            "<li><a href=\"pseudo.html#hover\">:hover</a>" +
                        "</ul>" +
                    "</li>" +
                    "<li><a href=\"#\">Część II</a>" +
                        "<ul>" +
                            "<li><a href=\"pseudo.html#last-child\">:last-child</a></li>" +
                            "<li><a href=\"pseudo.html#last-of-type\">:last-of-type</a></li>" +
                            "<li><a href=\"pseudo.html#link\">:link</a></li>" +
                            "<li><a href=\"pseudo.html#not\">:not()</a></li>" +
                            "<li><a href=\"pseudo.html#nth-child\">:nth-child()</a></li>" +
                            "<li><a href=\"pseudo.html#nth-last-child\">:nth-last-child()</a></li>" +
                            "<li><a href=\"pseudo.html#only-child\">:only-child</a></li>" +
                            "<li><a href=\"pseudo.html#required\">:required</a></li>" +
                            "<li><a href=\"pseudo.html#target\">:target</a></li>" +
                            "<li><a href=\"pseudo.html#visited\">:visited</a></li>" +
                        "</ul>" +
                    "</li>" +
                "</ul>" +
            "</li>" +
            "<li><a href=\"#\">Czcionki</a>" +
                "<ul>" +
                    "<li><a href=\"fontRelative.html\">Wielkości wględne</a>" +
                        "<ul>" +
                            "<li><a href=\"fontRelative.html#px\">px</a></li>" +
                            "<li><a href=\"fontRelative.html#em\">em</a></li>" +
                            "<li><a href=\"fontRelative.html#ex\">ex</a></li>" +
                            "<li><a href=\"fontRelative.html#percent\">%</a></li>" +
                        "</ul>" +
                    "</li>" +
                    "<li><a href=\"fontAbsolute.html\">Wielkości bezwględne</a>" +
                        "<ul>" +
                            "<li><a href=\"fontAbsolute.html#in\">in (cale)</a></li>" +
                            "<li><a href=\"fontAbsolute.html#cm\">cm (centymetry)</a></li>" +
                            "<li><a href=\"fontAbsolute.html#mm\">mm (milimetry)</a></li>" +
                            "<li><a href=\"fontAbsolute.html#pt\">pt (punkty)</a></li>" +
                            "<li><a href=\"fontAbsolute.html#pc\">pc (picas)</a></li>" +
                        "</ul>" +
                    "</li>" +
                    "<li><a href=\"columns.html\">Kolumny</a></li>" +
                    "<li><a href=\"sizeComparator.html\">Porównanie</a></li>" +
                    "<li><a href=\"fonts.html\">Font-...</a></li>" +
                "</ul>" +
            "</li>" +
            "<li><a href=\"#\">Obiekty</a>" +
                "<ul>" +
                    "<li><a href=\"background.html\">Tło</a>" +
                            "<ul>" +
                                "<li><a href=\"background.html#repeat\">background-repeat</a></li>" +
                                "<li><a href=\"background.html#attachment\">background-attachment</a></li>" +
                                "<li><a href=\"background.html#position\">background-position</a></li>" +
                                "<li><a href=\"background.html#size\">background-size</a></li>" +
                                "<li><a href=\"background.html#image\">background-image</a></li>" +
                                "<li><a href=\"background.html#origin\">background-origin</a></li>" +
                            "</ul>" +
                    "</li>" +
                    "<li><a href=\"positions.html\">Pozycje</a>" +
                        "<ul>" +
                            "<li><a href=\"positions.html#relative\">Relative</a></li>" +
                            "<li><a href=\"positions.html#absolute\">Absolute</a></li>" +
                            "<li><a href=\"positions.html#fixed\">Fixed</a></li>" +
                            "<li><a href=\"positions.html#static\">Static</a></li>" +
                            "<li><a href=\"positions.html#sticky\">Sticky</a></li>" +
                        "</ul>" +
                    "</li>" +
                    "<li><a href=\"gradients.html\">Gradienty</a>" +
                            "<ul>" +
                                "<li><a href=\"gradients.html#linear\">Linearny</a></li>" +
                                "<li><a href=\"gradients.html#radial\">Radialny</a></li>" +
                            "</ul>" +
                    "</li>" +
                    "<li><a href=\"border.html\">Obramowanie</a></li>" +
                "</ul>" +
            "</li>" +
            "<li><a href=\"#\">Kolory</a>" +
                "<ul>" +
                    "<li><a href=\"color.html#rgba\">RGBA</a></li>" +
                    "<li><a href=\"color.html#hsla\">HSLA</a></li>" +
                "</ul>" +
            "</li>" +
            "<li><a href=\"animations.html\">Animacje</a>" +
                "<ul>" +
                    "<li><a href=\"animations.html#keyframes\">@keyframes</a></li>" +
                    "<li><a href=\"animations.html#transformAnimation\">Transform</a></li>" +
                    "<li><a href=\"animations.html#transitionAnimation\">Transitions</a></li>" +
                "</ul>" +
            "</li>" +
            "<li><a href=\"media.html\">@media</a></li>" +
            "<li><a href=\"FBLM.html\">FBLM</a></li>" +
            "<li><a href=\"javascript.html\">JS</a></li>" +

        "</ul>" ;

document.getElementById("menu").innerHTML = menuHTML;