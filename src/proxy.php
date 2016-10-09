<?php

$url = $_GET['image'];

$imageType = explode('.', $url);
$imageType = array_pop($imageType);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);
$rawdata=curl_exec ($ch);
curl_close ($ch);

header('Content-Type: image/' . $imageType);

echo $rawdata;