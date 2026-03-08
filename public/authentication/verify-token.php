<?php
require_once '../libraries/php-jwt/src/JWT.php';
require_once '../libraries/php-jwt/src/Key.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

// Encode a JWT token
$payload = [
    'iss' => 'your-issuer',
    'iat' => time(),
    'exp' => time() + 3600, // 1 hour expiration
    'user_id' => 123
];

$secretKey = 'your-secret-key';
$jwt = JWT::encode($payload, $secretKey, 'HS256');
echo "Encoded JWT: " . $jwt;

// Decode a JWT token
try {
    $decoded = JWT::decode($jwt, new Key($secretKey, 'HS256'));
    print_r($decoded);
} catch (Exception $e) {
    echo 'Error decoding JWT: ', $e->getMessage();
}
?>
