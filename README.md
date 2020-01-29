# node-postgres-rest
Test Poweshell Jenkins API


<!-- Jenkins Powershell Update -->
$postParams = @{name="${ENV:username}";email="${ENV:email}"}
Invoke-WebRequest -Uri http://localhost:3000/users -Method POST -Body $postParams -UseBasicParsing