<?php
    function DNA_strand($dna) {
        // Your code here
        $charArray = str_split($dna);
        $finalOutput = [];
        foreach($charArray as $char){
            switch($char) {
                case 'A': array_push($finalOutput,'T'); break;
                case 'T': array_push($finalOutput,'A'); break;
                case 'C': array_push($finalOutput,'G'); break;
                case 'G': array_push($finalOutput,'C'); break;
                default: ;
                    break;
            }
        }
        return join('',$finalOutput);
    }

    DNA_strand("ATTCG");
?>