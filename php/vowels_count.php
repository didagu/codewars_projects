<?php
function getCount($str) {
  $vowelsCount = 0;
  
  $vowels = ['a','e','i','o','u'];
  $str_array = str_split($str);
  foreach ($str_array as $value) {
      if(in_array($value, $vowels)){
          $vowelsCount++;
      }
  }
  
  return $vowelsCount;
}
