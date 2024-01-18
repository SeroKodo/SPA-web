<?php
header("Content-Type: application/json");

$colorMap = [
    "yellow" => "#FFFF00",
    "lightgreen" => "#90EE90",
    "lightpurple" => "#D8BFD8"
];

$requestedColor = $_GET['color'] ?? null;
$response = [];

if ($requestedColor && isset($colorMap[$requestedColor])) {
    $response['color'] = $colorMap[$requestedColor];
    $response['success'] = true;
} else {
    $response['error'] = 'Unknown color requested!';
    $response['success'] = false;
}

echo json_encode($response);
?>