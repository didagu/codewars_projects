<?php
    function opposite($n){
        return ($n < 0) ? abs($n) : -$n ;
    }

    echo opposite(-6);
    echo opposite(9);
    